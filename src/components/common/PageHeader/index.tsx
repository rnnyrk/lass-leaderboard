import React from 'react';

import { PageHeaderContainer, HeaderSubtitle, HeaderPart } from './styled';

const PageHeader: React.FC<PageHeaderProps> = ({
  subtitle, secondTitle, title,
}) => (
  <PageHeaderContainer>
    <HeaderPart>
      <HeaderSubtitle>{subtitle}</HeaderSubtitle>
      <h1>{title}</h1>
    </HeaderPart>
    {secondTitle && (
      <HeaderPart>
        <h1>Ranking</h1>
      </HeaderPart>
    )}
  </PageHeaderContainer>
);

type PageHeaderProps = {
  subtitle: string;
  title: string;
  secondTitle?: string;
};

export default PageHeader;
