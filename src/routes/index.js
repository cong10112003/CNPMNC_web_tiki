import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

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
        path: ':Type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: 'sign-in',
        page: SignInPage,
        isShowHeader: false
    },
    {
        path: 'sign-up',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path: 'Product-detail',
        page: ProductDetailPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]