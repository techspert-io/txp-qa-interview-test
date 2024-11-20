import { KeyValueListItem } from '@/libs/react/components/list-item';
import { PageTitleAndNavigation } from '@/libs/react/components/title';
import { BaseBreadcrumb } from '@/libs/react/router/breadcrumbs';
import { Alert, Box, Divider, List } from '@mui/material';
import { TableData } from '../data';

export default async function DetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = TableData.find((item) => item.id === id);

  const fullName = data ? `${data.firstName} ${data.lastName}` : 'Not found';

  return (
    <Box>
      <PageTitleAndNavigation
        pageTitle={fullName}
        breadcrumbs={[BaseBreadcrumb, { title: 'Table', path: '/table' }]}
      />
      {data ? (
        <List>
          <KeyValueListItem
            label="Name"
            values={[`${data.firstName} ${data.lastName}`]}
          />
          <Divider />
          <KeyValueListItem label="Email address" values={[data.email]} />
          <Divider />
          <KeyValueListItem
            label="Country / timezone"
            values={[`${data.country} (${data.timezone})`]}
          />
          <Divider />
          <KeyValueListItem label="Currency" values={[data.currency]} />
          <Divider />
          <KeyValueListItem label="Job title" values={[data.jobTitle]} />
          <Divider />
          <KeyValueListItem label="Company" values={[data.company]} />
          <Divider />
          <KeyValueListItem label="Skills" values={data.skills} />
        </List>
      ) : (
        <Alert severity="error" sx={{ width: '100%' }}>
          Data not found
        </Alert>
      )}
    </Box>
  );
}
