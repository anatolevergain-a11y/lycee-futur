import React, { useMemo } from 'react';
import katex from 'katex';

interface MathFormulaProps {
  formula: string;
  displayMode?: boolean;
  className?: string;
}

export const MathFormula: React.FC<MathFormulaProps> = ({
  formula,
  displayMode = true,
  className = ''
}) => {
  const html = useMemo(() => {
    try {
      // Clean up common issues if needed
      const sanitized = formula.trim();
      return katex.renderToString(sanitized, {
        displayMode,
        throwOnError: false,
        strict: false
      });
    } catch (e) {
      console.warn('KaTeX rendering fallback:', e);
      return `<span class="font-mono text-sm">${formula}</span>`;
    }
  }, [formula, displayMode]);

  return (
    <span
      className={`math-rendered ${displayMode ? 'block my-1.5 overflow-x-auto text-center' : 'inline-block'} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

// Component to parse a string containing inline formulas like $x^2 + 1$ or text
export const FormattedMathText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = ''
}) => {
  const elements = useMemo(() => {
    // Split by $...$
    const parts = text.split(/(\$[^$]+\$)/g);
    return parts.map((part, index) => {
      if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
        const mathContent = part.slice(1, -1);
        try {
          const html = katex.renderToString(mathContent, {
            displayMode: false,
            throwOnError: false
          });
          return (
            <span
              key={index}
              className="inline-block mx-0.5"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <span key={index} className="font-mono text-sky-600">{mathContent}</span>;
        }
      }
      return <span key={index}>{part}</span>;
    });
  }, [text]);

  return <span className={className}>{elements}</span>;
};
