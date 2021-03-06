from datetime import datetime
from api.database.database import db


class ItemImage(db.Model):
    __tablename__ = 'item_image'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    item_id = db.Column(db.Integer, db.ForeignKey('item.id', onupdate='CASCADE', ondelete='CASCADE'))
    url = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now, onupdate=datetime.now)

    def __init__(self, url='', item_id=None):
        self.url = url
        self.item_id = item_id

    def postRecord(self):
        db.session.add(self)
        db.session.commit()
        db.session.refresh(self)
        return self

    @classmethod
    def getImage(cls, image_id):
        record = cls.query.filter_by(id=image_id).first()
        return record

