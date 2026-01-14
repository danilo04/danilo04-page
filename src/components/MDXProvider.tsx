import React from 'react';
import { MDXProvider as BaseMDXProvider } from '@mdx-js/react';
import Mermaid from './Mermaid';

// Custom components for MDX rendering
const components = {
  // Headings
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-12 mb-6 first:mt-0" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-10 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-3" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-6 mb-2" {...props} />
  ),
  
  // Paragraph
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300" {...props} />
  ),
  
  // Links
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a 
      className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors" 
      target="_blank" 
      rel="noopener noreferrer" 
      {...props} 
    />
  ),
  
  // Lists
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-4 pl-6 space-y-2 list-disc" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-4 pl-6 space-y-2 list-decimal" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-base md:text-lg text-slate-700 dark:text-slate-300" {...props} />
  ),
  
  // Blockquote
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote 
      className="my-6 pl-6 border-l-4 border-primary/50 italic text-slate-600 dark:text-slate-400" 
      {...props} 
    />
  ),
  
  // Code
  code: (props: React.HTMLAttributes<HTMLElement>) => {
    const { className, children, ...rest } = props;
    // Check if this is inline code or a code block
    const isInline = !className?.includes('language-');
    
    if (isInline) {
      return (
        <code 
          className="px-1.5 py-0.5 mx-0.5 rounded bg-slate-100 dark:bg-slate-800 text-primary font-mono text-sm" 
          {...rest}
        >
          {children}
        </code>
      );
    }
    
    return (
      <code className={`${className} block text-sm md:text-base text-slate-100 font-mono leading-relaxed`} {...rest}>
        {children}
      </code>
    );
  },
  
  // Pre (code blocks)
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => {
    const child = React.Children.toArray(props.children)[0];
    if (React.isValidElement(child)) {
      const className = (child.props as { className?: string }).className;
      if (className?.includes('language-mermaid')) {
        const rawChart = (child.props as { children?: React.ReactNode }).children;
        const chart =
          typeof rawChart === 'string'
            ? rawChart.trim()
            : Array.isArray(rawChart)
              ? rawChart.join('').trim()
              : '';
        return <Mermaid chart={chart} />;
      }
    }

    return (
      <pre 
        className="my-6 p-4 md:p-6 rounded-xl overflow-x-auto bg-slate-900 dark:bg-slate-950 shadow-lg" 
        {...props} 
      />
    );
  },
  
  // Table
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse rounded-lg overflow-hidden" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-slate-100 dark:bg-slate-800" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-slate-700 dark:text-slate-300" {...props} />
  ),
  
  // Horizontal rule
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-slate-200 dark:border-slate-700" {...props} />
  ),
  
  // Strong and emphasis
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-slate-900 dark:text-white" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props} />
  ),
  
  // Image
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="my-6 rounded-xl max-w-full h-auto" {...props} />
  ),
};

interface MDXProviderProps {
  children: React.ReactNode;
}

export const MDXProvider: React.FC<MDXProviderProps> = ({ children }) => {
  return (
    <BaseMDXProvider components={components}>
      {children}
    </BaseMDXProvider>
  );
};

export default MDXProvider;

