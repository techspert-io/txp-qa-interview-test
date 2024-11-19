import { PageTitleAndNavigation } from '@/libs/react/components/title';
import { BaseBreadcrumb } from '@/libs/react/router/breadcrumbs';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function Form() {
  return (
    <>
      <PageTitleAndNavigation pageTitle="Form" breadcrumbs={[BaseBreadcrumb]} />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 2, md: 12 }}
        display="flex"
      >
        <Grid size={6}>
          <TextField
            variant="outlined"
            label="First name"
            required={true}
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            variant="outlined"
            label="Last name"
            required={true}
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            variant="outlined"
            label="Email address"
            required={true}
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid size={4}>
          <TextField
            variant="outlined"
            label="Date of birth"
            type="date"
            sx={{ width: '100%' }}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </Grid>
        <Grid size={4}>
          <TextField
            variant="outlined"
            label="Years of experience"
            type="number"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid size={4}>
          <FormControl fullWidth>
            <InputLabel id="form-education-level-label">
              Highest education level
            </InputLabel>
            <Select
              label="Highest education level"
              labelId="form-education-level-label"
              sx={{ marginTop: 'auto' }}
            >
              <MenuItem value="high-school">High school or equivalent</MenuItem>
              <MenuItem value="college">College</MenuItem>
              <MenuItem value="associate-or-trade">
                Associate or Trade qualification
              </MenuItem>
              <MenuItem value="bachelors">Bachelor's degree</MenuItem>
              <MenuItem value="masters">
                Masters or other post-graduate degree
              </MenuItem>
              <MenuItem value="doctorate">Doctorate</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={12}>
          <Button variant="contained" sx={{ width: '100%' }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
