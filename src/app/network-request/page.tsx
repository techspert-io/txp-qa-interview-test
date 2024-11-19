import { PageTitleAndNavigation } from '@/libs/react/components/title';
import { BaseBreadcrumb } from '@/libs/react/router/breadcrumbs';

export default function NetworkRequest() {
  return (
    <>
      <PageTitleAndNavigation
        pageTitle="Network request"
        breadcrumbs={[BaseBreadcrumb]}
      />
    </>
  );
}
