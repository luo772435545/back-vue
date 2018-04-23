<template>
  <div>
    login1
  </div>
</template>

<script>
export default {
  name: 'login',
  created () {
    this.$axios.post('https://easy-mock.com/mock/5accc6d9b7b3be6bd9b375c1/btb/kkkkk#!method=post', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>

</style>
