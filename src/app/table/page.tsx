import { BaseBreadcrumb } from '@/libs/react/router/breadcrumbs';
import { PageContainer } from '@toolpad/core';

export default function Table() {
  return (
    <PageContainer
      title="Table"
      breadcrumbs={[BaseBreadcrumb, { title: 'Table', path: '/table' }]}
    ></PageContainer>
  );
}
