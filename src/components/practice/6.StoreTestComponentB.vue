<template>
  <h1>StoreComponentB</h1>
  <p>지역변수 값 count : {{ count }}</p>
  <p>전역store변수값 count : </p>
</template>

<script>
  export default {
    data(){
      return{
        count: 0,
      }
    }
  }
</script>