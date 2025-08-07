<template>
  <h1>vue 조건식</h1>
  <button v-if="!isLogined" @click="doLogin()">로그인버튼</button>
  <button v-if="isLogined" @click="doLogout()">로그아웃버튼</button>
  <div v-if="!isLogined">로그인해주세요</div>
  <div v-if="isLogined">환영합니다</div>

  <h1>상품목록조회</h1>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productList" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isLogined: false,
      // productList: [{id:1,name:"사과",price:1000},{id:2,name:"배",price:2500},{id:3,name:"거봉",price:10000}],
      productList:[],
    }
  },
  async created(){
    const response = await axios.get("http://localhost:8080/product/list");
    console.log(response);
    this.productList = response.data.result.content;
  },
  methods: {
    doLogin() {
      this.isLogined = true;
    },
    doLogout() {
      this.isLogined = false;
    },
  },
};
</script>
