import { PageTitleAndNavigation } from '@/libs/react/components/title';
import { BaseBreadcrumb } from '@/libs/react/router/breadcrumbs';

export default function Table() {
  return (
    <>
      <PageTitleAndNavigation
        pageTitle="Table"
        breadcrumbs={[BaseBreadcrumb]}
      />
    </>
  );
}
