<template>
  <v-container>
    <v-row>
      <!-- 한 row의 전체 cols는 12 -->
      <v-col cols="8"> helloword1 </v-col>
      <v-col cols="4"> helloword2 </v-col>
    </v-row>
    <v-row>
      <v-card>
        <v-card-title id="signup-title" style="font-size: 200px;"> 회원가입 </v-card-title>
        <v-card-text> 회원가입을 해주세요. </v-card-text>
      </v-card>
    </v-row>
    <v-row>
      <v-table>
        <thead>
          <tr>
            <th>이름</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>test1</td>
            <td>test@naver.com</td>
          </tr>
          <tr>
            <td>test1</td>
            <td>test@naver.com</td>
          </tr>
        </tbody>
      </v-table>
    </v-row>
  </v-container>
  <v-card>
    <v-card-title>회원가입</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="name" type="text" />
        <v-text-field label="email" type="email" />
        <v-text-field label="password" type="password" />
        <v-btn color="secondary">제출하기</v-btn>
      </v-form>
    </v-card-text>
  </v-card>

  <!-- 모달창(팝업) 위한 v-dialog -->
  <v-btn @click="cancel()" max-width="400px">취소버튼</v-btn>
  <!-- v-dialog는 내부적으로 true/false값을 가지고 외부 공개될 지 여부가 결정 -->
  <v-dialog v-model="trueOrFalse">
    <v-card>
      <v-card-title>정말 취소하시겠습니까?</v-card-title>
      <v-card-actions>
        <v-btn color="primary" @click="resetModal()">예</v-btn>
        <v-btn color="secondary" @click="resetModal()">아니요</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      trueOrFalse: false,
    };
  },
  methods: {
    cancel() {
      this.trueOrFalse = true;
    },
    resetModal() {
      this.trueOrFalse = false;
    },
  },
};
</script>
<style>
#signup-title{
  color: aqua;
}
</style>