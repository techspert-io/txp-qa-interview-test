import { PageTitleAndNavigation } from '@/libs/react/components/title';
import { EditNote, SyncAlt, TableView } from '@mui/icons-material';
import { Box, Card, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';

const icons = {
  form: EditNote,
  table: TableView,
  networkRequest: SyncAlt,
};

const Item = ({
  title,
  href,
  icon,
}: {
  title: string;
  href: string;
  icon: keyof typeof icons;
}) => {
  const Icon = icons[icon];

  return (
    <Grid size={{ xs: 2, sm: 4, md: 4 }}>
      <Link href={href}>
        <Card
          variant="outlined"
          sx={{
            minHeight: 75,
            p: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <Icon fontSize="large" sx={{ marginRight: 2 }} />
            <Typography>{title}</Typography>
          </Box>
        </Card>
      </Link>
    </Grid>
  );
};

export default function Home() {
  return (
    <>
      <PageTitleAndNavigation />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 2, md: 8 }}
        sx={{ marginBottom: 2 }}
        display="flex"
      >
        <Item title="Form" href="/form" icon="form" />
        <Item title="Table" href="/table" icon="table" />
        <Item
          title="Network request"
          href="/network-request"
          icon="networkRequest"
        />
      </Grid>
      <Typography>Some copy about the interview text task - TBC</Typography>
    </>
  );
}
