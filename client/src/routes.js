import { Component } from "react"
import Admin from "./pages/Admin"
import Bron from "./pages/Bron"
import Auth from "./pages/Auth"
import Main from "./pages/MainPage"
import Blog from "./pages/Blog"
import { ADMIN_ROUTE, BLOG_ROUTE, BRON_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

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
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
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