import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../../../Layout/v2/Layout'
import { Book } from '../Book/Book'
import { Home } from '../Home'
import '@TagDs/assets/styles/main.scss'

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
        <Route
          path="Book"
          element={
            <Layout>
              <Book />
            </Layout>
          }
        />
        {/* <Route path="Work" element={<div>404</div>} />
        <Route path="/Stack" element={<div>404</div>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router