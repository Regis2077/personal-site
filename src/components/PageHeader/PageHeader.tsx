"use client";

import { ReactNode } from 'react';
import LongText from '../LongText/LongText';
import styles from './PageHeader.module.scss';

interface PageHeaderProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

const PageHeader = ({ title, children, className }: PageHeaderProps) => {
  return (
    <div className={`${styles.pageHeader} ${className || ''}`}>
      <h2 className={styles.title}>{title}</h2>
      {children && (
        <LongText className={styles.description}>
          {children}
        </LongText>
      )}
    </div>
  );
};

export default PageHeader;
