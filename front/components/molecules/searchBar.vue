<template>
  <div class="searchBar">
    <input v-model="text" class="searchBar__text" type="text" name="text" placeholder="文字を入力してください" maxlength="30">
    <nuxt-link class="searchBar__button" :to="searchTo">
      <img src="@/assets/images/icon/search_icon.svg">
    </nuxt-link>
  </div>
</template>

<script>

export default {
  name: "searchForm",
  data() {
    return {
      text: '',
      placeholder: '文字を入力してください。'
    }
  },
  computed: {
    searchTo() {
      const searchParam = {}
      searchParam.path = '/search';

      if (this.text) {
        searchParam.query = { text: this.text }
      }
      return searchParam
    }
  }
}
</script>

<style scoped lang="scss">

.searchBar {
  width: 400px;

  letter-spacing: -.4em;
}
.searchBar__text {
  display: inline-block;
  width: 370px;
  height: 30px;
  font-size: 14px;

  @include border-radius-box;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  padding: 0 5px;

  letter-spacing: normal;
}
.searchBar__button {
  display: inline-block;
  height: 30px;
  width: 30px;
  vertical-align: middle;
  @include border-radius-box;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border: 1px solid $main-font-color;
  border-left: 0;

  letter-spacing: normal;

}
.searchBar__button img {
  width: 20px;
  height: 20px;
  margin: 5px;
  vertical-align: middle;
}
</style>