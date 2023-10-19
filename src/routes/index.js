import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductPage from "../pages/ProductPage/ProductPage";

 export const routes=[
    {
        path: 'Home',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: 'Order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: 'Product',
        page: ProductPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]