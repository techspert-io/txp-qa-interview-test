import { BaseBreadcrumb } from '@/libs/react/router/breadcrumbs';
import { PageContainer } from '@toolpad/core';

export default function NetworkRequest() {
  return (
    <PageContainer
      title="Network request"
      breadcrumbs={[
        BaseBreadcrumb,
        { title: 'Network request', path: '/network-request' },
      ]}
    ></PageContainer>
  );
}
