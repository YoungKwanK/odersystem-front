import OrderListComponent from "@/components/OrderListComponent.vue";


export const orderRouter = [
  {
    path: "/order/list",
    name: "OrderListComponent",
    component: OrderListComponent,
    props: {isMyOrder: false, pageTitle: "전체주문조회"}
  },
];
