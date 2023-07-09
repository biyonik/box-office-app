import React from 'react';

interface AppTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}
export default function AppTitle({ title = "Box Office", subtitle, className }: React.FC<AppTitleProps>) {
  return <>
    <h2 className={className}>{title}</h2>
    <p>{subtitle}</p>
  </>
}
