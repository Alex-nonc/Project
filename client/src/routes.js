import Admin from "./pages/Admin"
import Bron from "./pages/Bron"
import Registration from "./pages/Registration"
import Main from "./pages/MainPage"
import Blog from "./pages/Blog"
import { ADMIN_ROUTE, BLOG_ROUTE, BRON_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"
import Login from "./pages/Login"

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: BRON_ROUTE,
        Component: Bron
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: BLOG_ROUTE,
        Component: Blog
    }
]