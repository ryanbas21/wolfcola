import { useEffect } from 'react';
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers";

function Code ({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  
  return (
  <div data-cy='code-blocks'>    
    <pre className={`language-${language}`}>
      <code> 
        {code}
      </code>
    </pre>
  </div>
  );
}

export default Code;
