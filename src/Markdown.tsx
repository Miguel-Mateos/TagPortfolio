import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export const Markdown = ({ repo }: { repo: string }) => {
  const [markdown, setMarkdown] = useState<string|null>(null);

  const getMarkdown = async () => {
    const response = await fetch("https://raw.githubusercontent.com/eneko96/"+repo.toLowerCase()+"/main/README.md");
    const status = await response.status;
    if (status === 404) {
      setMarkdown('patata')
      // create placeholder markkdown?
      return 
    }
    const text = await response.text();
    setMarkdown(text);
  }

  useEffect(() => {
    getMarkdown();
    return () => setMarkdown(null)
  }, [repo])

  if (!markdown) return null
  return (
    <div className="markdown">
      <ReactMarkdown children={markdown} />
    </div>
  );
}