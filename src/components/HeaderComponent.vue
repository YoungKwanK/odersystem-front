<template>
  <!-- 상단의 헤더를 꾸밀 때 사용 -->
  <v-app-bar>
    <v-container>
      <v-row>
        <!-- justify-start : 왼쪽 기준 정렬 -->
        <v-col class="d-flex justy-start">
          <div v-if="userRole === 'ADMIN'">
            <v-btn :to="'/member/list'">회원관리</v-btn>
            <v-btn>상품관리</v-btn>
            <v-btn :to="'/order/list'">실시간주문건수</v-btn>
          </div>
        </v-col>
        <v-col class="text-center">
          <v-btn :to="'/'">java shop</v-btn>
        </v-col>
        <v-col class="d-flex justy-end">
          <v-btn v-if="isLogined">장바구니</v-btn>
          <v-btn>상품목록</v-btn>
          <v-btn v-if="isLogined" :to="'/member/mypage'">마이페이지</v-btn>
          <v-btn v-if="!isLogined" :to="'/member/create'">회원가입</v-btn>
          <v-btn v-if="!isLogined" :to="'/member/login'">로그인</v-btn>
          <v-btn v-if="isLogined" @click="doLogout()">로그아웃</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { jwtDecode } from 'jwt-decode';

export default {
  data() {
    return {
      userRole: null,
      isLogined: false,
    };
  },
  created() {
    console.log("header 컴포넌트");
    const accessToken = localStorage.getItem("accessToken");
    if(accessToken){
      const payload = jwtDecode(accessToken);
      this.userRole = payload.role;
      console.log(payload);
      this.isLogined=true;
    }
  },
  methods: {
    doLogout() {
      localStorage.clear();
      this.isLogined = false;
      this.userRole=null;
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
