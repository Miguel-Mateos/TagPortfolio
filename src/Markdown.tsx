import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export const Markdown = ({ repo }: { repo: string }) => {
  const [markdown, setMarkdown] = useState<string|null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getMarkdown = async () => {
    setLoading(true)
    const response = await fetch("https://raw.githubusercontent.com/eneko96/"+repo.toLowerCase()+"/main/README.md");
    const status = await response.status;
    if (status === 404) {
      setMarkdown('# No Readme Found')
      setLoading(false)
      return 
    }
    const text = await response.text();
    setLoading(false)
    setMarkdown(text);
  }

  useEffect(() => {
    getMarkdown();
    return () => setMarkdown(null)
  }, [repo])

  if (!markdown) return null
  return (
    <div className="markdown">
      <ReactMarkdown className="markdown" children={markdown} />
    </div>
  );
}