import React from 'react'
import { useRoutes } from 'react-router'
import Landing from './landings/landing/landing'
import Layout from './layout/layout'
const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [{
                path: "/",
                element: <Landing />,
            }
            ]

        }
    ]

    )
}

export default Router