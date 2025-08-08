import MemberCreate from "@/views/MemberCreate.vue";
import MemberLogin from "@/views/MemberLogin.vue";

export const memberRouter = [
  {
    path: "/member/create",
    name: "MemberCreate",
    component: MemberCreate,
  },
  {
    path: "/member/login",
    name: "MemberLogin",
    component: MemberLogin,
  },
];
