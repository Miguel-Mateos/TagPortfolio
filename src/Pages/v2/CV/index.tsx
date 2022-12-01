import { HeadLine } from '@Components/v2/HeadLine/HeadLine'
import './index.css'
export const CVPage = () => {
  return (
    <div role="main">
      <HeadLine title="Hello Welcome to my portfolio!" />
      <div className="cv-header">
        <h1>CV</h1>
      </div>
      <iframe src="/Resumee_2022.pdf"></iframe>
    </div>
  )
}
