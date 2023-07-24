import React from 'react';
import styled from 'styled-components';

interface AppTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function AppTitle({ title = 'Box Office', subtitle, className }: React.FC<AppTitleProps>) {
  const TitleWrapper = styled.div`
    text-align: center;
    margin: 0 0 40px;

    h1 {
      color: ${({ theme }) => theme.mainColors.blue};
      letter-spacing: 10px;
      text-transform: uppercase;
      margin: 0 0 10px;
    }

    p {
      color: ${({ theme }) => theme.mainColors.dark};
      margin: 0;
    }
  `;

  return (
    <TitleWrapper>
      <h1 className={className}>{title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
}
