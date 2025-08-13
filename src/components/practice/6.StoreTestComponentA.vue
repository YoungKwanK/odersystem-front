<template>
  <h1>StoreComponentA</h1>
  <p>지역변수 값 count : {{ count }}</p>
  <v-btn @click="incrementCount()">count값 증가</v-btn>
  <p>전역store변수값 count : </p>
  <v-btn @click="incrementStoreCount()">전역store count값 증가</v-btn>
  <br/><br/><br/>
</template>

<script>
  export default {
    data(){
      return{
        count: 0,
      }
    },
    methods:{
      incrementCount(){
        this.count++;
      },
      incrementStoreCount(){

      },
    }
  }
</script>