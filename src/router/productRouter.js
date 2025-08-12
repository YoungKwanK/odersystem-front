import ProductListComponent from "@/components/ProductListComponent.vue";
import ProductCreateComponent from "@/views/ProductCreate.vue";

export const productRouter = [
    {
        path: "/product/list"
        , name: "ProductList"
        , component: ProductListComponent
        , props: {isAdmin: false, pageTitle:"상품목록"}
    }
    ,
    {
        path: "/product/manage"
        , name: "ProductManage"
        , component: ProductListComponent
        , props: {isAdmin: true, pageTitle:"상품관리"}
    }
    ,
    {
        path: "/product/create"
        , name: "ProductCreate"
        , component: ProductCreateComponent
    }
    ,

]