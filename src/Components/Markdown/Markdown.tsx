import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// @ts-ignore
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import './styles.css'

export const Markdown = ({
  repo,
  className
}: {
  repo: string
  className?: string
}) => {
  const [markdown, setMarkdown] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const getMarkdown = async () => {
    setLoading(true)
    const response = await fetch(
      'https://raw.githubusercontent.com/eneko96/' +
        repo.toLowerCase() +
        '/main/README.md'
    )
    const status = await response.status
    if (status === 404) {
      setMarkdown('# No Readme Found')
      setLoading(false)
      return
    }
    const text = await response.text()
    setLoading(false)
    setMarkdown(text)
  }

  useEffect(() => {
    getMarkdown()
    return () => setMarkdown(null)
  }, [repo])

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
        className={markdown || ''}
        components={CodeBlock}
        children={markdown}
      />
    </div>
  )
}
