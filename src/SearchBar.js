import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

// function for "Search for a city" search bar in the header
// includes a search icon (magnifying glass) and text input
export default function InputWithIcon() {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1 },
    }}
    noValidate
    autoComplete="off"
  >
              <SearchIcon className="search-icon"/>
              <Input
                className="search-city" placeholder="Search for a city" inputProps={ariaLabel} />
              </Box>
  );
}