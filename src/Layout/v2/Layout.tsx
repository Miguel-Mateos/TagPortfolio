import { Sidebar } from 'tag-ds'
import { Footer } from '../../Components/v2/Footer/Footer'
import { PreFooter } from '../../Components/v2/PreFooter/PreFooter'
import './styles.css'

export const Layout: React.FC<any> = ({ children }) => (
  <div className="tag-ds layout">
    <div style={{ display: 'flex' }}>
      <Sidebar>{/* Missing sidebar tools on index.components */}</Sidebar>
      <div style={{ width: '100%' }}>{children}</div>
    </div>
    <PreFooter />
    <Footer />
  </div>
)
