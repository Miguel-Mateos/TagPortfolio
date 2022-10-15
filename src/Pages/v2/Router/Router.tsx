import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../../../Layout/v2/Layout'
import { Book } from '../Book'
import { Home } from '../Home'
import '@TagDs/assets/styles/main.scss'
import { Study } from '../Study/Study'
import ScrollToTop from '@Components/ScrollTop'

export const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
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
          <Route
            path="Study/:title"
            element={
              <Layout>
                <Study />
              </Layout>
            }
          />
          {/* <Route
            path="Dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          /> */}
          {/* <Route path="Work" element={<div>404</div>} />
        <Route path="/Stack" element={<div>404</div>} /> */}
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default Router
