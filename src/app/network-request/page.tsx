import { PageTitleAndNavigation } from '@/libs/react/components/title';
import { BaseBreadcrumb } from '@/libs/react/router/breadcrumbs';
import { Box } from '@mui/material';
import { Questions } from './questions';

export default function NetworkRequest() {
  return (
    <Box>
      <PageTitleAndNavigation
        pageTitle="Network request"
        breadcrumbs={[BaseBreadcrumb]}
      />
      <Questions />
    </Box>
  );
}
