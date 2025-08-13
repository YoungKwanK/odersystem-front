import OrderListComponent from "@/components/OrderListComponent.vue";
import OrderCart from "@/views/OrderCart.vue";


export const orderRouter = [
  {
    path: "/order/list",
    name: "OrderListComponent",
    component: OrderListComponent,
    props: {isMyOrder: false, pageTitle: "전체주문조회"}
  },
  {
    path: "/order/cart",
    name: "OrderCart",
    component: OrderCart,
  },
];
