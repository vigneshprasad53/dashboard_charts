
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './App.css'

const FilterContent = styled(Paper)(({ theme }) => ({ 
  border: '1px solid black',
  margin:theme.spacing(3),
  textAlign: 'center',
  height: window.innerHeight - 100,
}));

const DashboardContent = styled(Paper)(({ theme }) => ({ 
  border: '1px solid black', 
  margin:theme.spacing(3),
  textAlign: 'center',
  height: window.innerHeight - 100,
}));



function App() {
  return (
    <Box sx={{ flexGrow: 2 ,border: '2px solid black',margin:3 }}>
      <Grid container spacing={2}>
        <Grid item  md={2}>
          <FilterContent elevation={20}>xs=6 md=4 </FilterContent>
        </Grid>
        <Grid item  md={10}>
          <DashboardContent elevation={0}> xs=6 md=8</DashboardContent>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App
