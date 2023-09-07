import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => (
  <Suspense fallback="Load...">
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={<div className="page-wrap">{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
)

export default AppRouter
