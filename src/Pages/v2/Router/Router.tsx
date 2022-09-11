import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../../../Layout/v2/Layout'
import { Home } from '../Home'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        {/* <Route path="Work" element={<div>404</div>} />
        <Route path="/Stack" element={<div>404</div>} /> */}
      </Routes>
    </BrowserRouter>
  )
}
