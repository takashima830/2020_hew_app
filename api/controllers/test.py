from flask import Blueprint, request, jsonify
from flask_jwt import JWT, jwt_required, current_identity
import logging
import json
from api.models import User, Auth, Category

bp = Blueprint('test', __name__, url_prefix='/test')


@bp.route('/', methods=['post'])
def post():
    for num in range(5):
        user = User(
            display_name='guest' + str(num),
            image='',
            name='山田太郎',
            name_ruby='ヤマダタロウ',
            birthday='2001-03-12'
        )
        postUser = user.postRecord()
        auth = Auth(
            user_id=postUser.id,
            email='guest' + str(num) + '@test.com',
            password='password'
        )
        auth.postRecord()

    Category.addTestData()
    return jsonify({'state': True})
