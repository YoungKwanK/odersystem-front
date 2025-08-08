<template>
  <!-- 상단의 헤더를 꾸밀 때 사용 -->
  <v-app-bar>
    <v-container>
      <v-row>
        <!-- justify-start : 왼쪽 기준 정렬 -->
        <v-col class="d-flex justy-start">
          <div v-if="userRole === 'ADMIN'">
            <v-btn>회원관리</v-btn>
            <v-btn>상품관리</v-btn>
            <v-btn>실시간주문건수</v-btn>
          </div>
        </v-col>
        <v-col class="text-center">
          <v-btn :to="'/'">java shop</v-btn>
        </v-col>
        <v-col class="d-flex justy-end">
          <v-btn>장바구니</v-btn>
          <v-btn>상품목록</v-btn>
          <v-btn v-if="!isLogined" :to="'/member/create'">회원가입</v-btn>
          <v-btn v-if="!isLogined" :to="'/member/login'">로그인</v-btn>
          <v-btn v-if="isLogined" @click="doLogout()">로그아웃</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
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
      this.isLogined=true;
    }
  },
  methods: {
    doLogout() {
      localStorage.clear();
      this.isLogined = false;
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
