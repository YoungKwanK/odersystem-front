<template>
  <!-- 상단의 헤더를 꾸밀 때 사용 -->
  <v-app-bar>
    <v-container>
      <v-row>
        <!-- justify-start : 왼쪽 기준 정렬 -->
        <v-col class="d-flex justy-start">
          <div v-if="userRole === 'ADMIN'">
            <v-btn :to="'/member/list'">회원관리</v-btn>
            <v-btn :to="'/product/manage'">상품관리</v-btn>
            <v-btn href="'/order/list'">실시간주문건수 {{ liveOrderCount }}</v-btn>
            <!-- <v-btn :to="'/practice/store'">스토어테스트</v-btn> -->
          </div>
        </v-col>
        <v-col class="text-center">
          <v-btn :to="'/'">java shop</v-btn>
        </v-col>
        <v-col class="d-flex justy-end">
          <v-btn v-if="isLogined" :to="'/order/cart'">장바구니 {{ TotalQunatity }}</v-btn>
          <v-btn :to="'/product/list'">상품목록</v-btn>
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
import { EventSourcePolyfill } from 'event-source-polyfill';
import { jwtDecode } from 'jwt-decode';

export default {
  computed:{
    TotalQunatity(){
       return this.$store.getters.getTotalQuantity;
      }
  },
  data() {
    return {
      userRole: null,
      isLogined: false,
      cartProductCount: 0,
      liveOrderCount: 0
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
    // sse 연결 및 메시지 수신
    if(this.userRole==='ADMIN'){
      // sse연결을 위한 event-source-polyfill라이브러리 사용
      let sse = new EventSourcePolyfill(`${process.env.VUE_APP_API_BASE_URL}/sse/connect`,{
        headers:{
          Authorization: `Bearer ${accessToken}`
        }
      });

      sse.addEventListener('connect', (event)=>{
        console.log(event);
      })
      sse.addEventListener('ordered', (event)=>{
        console.log(event);
        this.liveOrderCount++;
      })
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
