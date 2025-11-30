"use client";

import { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './LongText.module.scss';

interface LongTextProps {
  children: ReactNode;
  className?: string;
}

const LongText = ({ children, className }: LongTextProps) => {
  // Convert ReactNode to string if needed
  const content = typeof children === 'string' ? children : String(children || '');

  return (
    <div className={`${styles.longText} ${className || ''}`}>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default LongText;
