<template>
  <div class="index-wrap">
    <vote></vote>
  </div>
</template>
<script>
export default {
  components: {
    vote: () => import("../page/vote.vue")
  }
};
</script>
<style lang="less">
.index-wrap {
  background-color: rgb(16, 8, 128);
}
</style>
