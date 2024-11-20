import { PageTitleAndNavigation } from '@/libs/react/components/title';
import { BaseBreadcrumb } from '@/libs/react/router/breadcrumbs';
import {
  Alert,
  Box,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import { TableData } from '../data';

const DetailsListItem = ({
  label,
  values,
}: {
  label: string;
  values: string[];
}) => (
  <ListItem>
    <Stack
      sx={{ width: '100%' }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography sx={{ fontWeight: 'bold' }}>{label}</Typography>
      <Stack direction="column" alignItems="flex-end">
        {...values.map((value) => (
          <Typography sx={{ fontWeight: 'lighter' }}>{value}</Typography>
        ))}
      </Stack>
    </Stack>
  </ListItem>
);

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
          <DetailsListItem
            label="Name"
            values={[`${data.firstName} ${data.lastName}`]}
          />
          <Divider />
          <DetailsListItem label="Email address" values={[data.email]} />
          <Divider />
          <DetailsListItem
            label="Country / timezone"
            values={[`${data.country} (${data.timezone})`]}
          />
          <Divider />
          <DetailsListItem label="Currency" values={[data.currency]} />
          <Divider />
          <DetailsListItem label="Job title" values={[data.jobTitle]} />
          <Divider />
          <DetailsListItem label="Company" values={[data.company]} />
          <Divider />
          <DetailsListItem label="Skills" values={data.skills} />
        </List>
      ) : (
        <Alert severity="error" sx={{ width: '100%' }}>
          Data not found
        </Alert>
      )}
    </Box>
  );
}
