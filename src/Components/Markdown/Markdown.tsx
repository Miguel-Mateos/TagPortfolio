import { FC, useState } from 'react'
import { classNames } from '../../utils'
import ReactMarkdown from 'react-markdown'
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// @ts-ignore
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import './styles.css'
import { useFetch } from '../../utils/useFetch'
const formatRepoUrl = (repo: string) =>
  'https://raw.githubusercontent.com/eneko96/' +
  repo.toLowerCase() +
  '/main/README.md'

interface IMarkdownProps {
  repo: string
  className?: string
}

export const Markdown: FC<IMarkdownProps> = ({ repo, className }) => {
  const [markdown, setMarkdown] = useState<string | null>(null)
  const cleanRepo = formatRepoUrl(repo)
  const { loading } = useFetch<any>({
    url: cleanRepo,
    onError: (error) => setMarkdown('# No Readme Found'),
    onSuccess: (data) => setMarkdown(data),
    responseType: 'text'
  })

  const CodeBlock = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          style={dracula}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }

  if (loading || !markdown) {
    return (
      <div className="markdown">
        <ReactMarkdown
          className={markdown || ''}
          components={CodeBlock}
          children={'# Loading...'}
        />
      </div>
    )
  }

  return (
    <div className="markdown">
      <ReactMarkdown
        className={`${classNames(className)} ${markdown || ''}`}
        components={CodeBlock}
        children={markdown}
      />
    </div>
  )
}
