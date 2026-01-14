import React, { useEffect, useMemo, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const renderId = useMemo(
    () => `mermaid-${Math.random().toString(36).slice(2)}`,
    []
  );

  useEffect(() => {
    let cancelled = false;
    setError(null);

    const renderDiagram = async () => {
      try {
        const isDark = document.documentElement.classList.contains('dark');
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: isDark ? 'dark' : 'default',
        });

        const { svg } = await mermaid.render(renderId, chart);
        if (cancelled) return;
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (err) {
        if (!cancelled) {
          setError('No se pudo renderizar el diagrama Mermaid.');
        }
      }
    };

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [chart, renderId]);

  if (error) {
    return (
      <pre className="my-6 p-4 md:p-6 rounded-xl overflow-x-auto bg-slate-900 dark:bg-slate-950 shadow-lg text-slate-100 text-sm md:text-base font-mono leading-relaxed">
        {chart}
      </pre>
    );
  }

  return <div ref={containerRef} className="my-6 overflow-x-auto" />;
};

export default Mermaid;
