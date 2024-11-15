import { BaseBreadcrumb } from '@/libs/react/router/breadcrumbs';
import { PageContainer } from '@toolpad/core';

export default function Form() {
  return (
    <PageContainer
      title="Form"
      breadcrumbs={[BaseBreadcrumb, { title: 'Form', path: '/form' }]}
    ></PageContainer>
  );
}
