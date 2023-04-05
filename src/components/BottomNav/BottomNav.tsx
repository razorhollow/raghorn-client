import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EditNoteIcon from '@mui/icons-material/EditNote';
import EventIcon from '@mui/icons-material/Event';
import FilterListIcon from '@mui/icons-material/FilterList';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function BottomNav() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 500, position: 'fixed', bottom: 0, left: 0, right: 0}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Filter" icon={<FilterListIcon />} />
        <BottomNavigationAction
          label="Post"
          icon={
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: (theme) => theme.palette.secondary.main,
                padding: '10px',
                marginTop: '-30px',
              }}
            >
              <EditNoteIcon sx={{ color: '#ffffff'}} />
            </Box>
          }
          sx={{
            '&.Mui-selected': {
              color: (theme) => theme.palette.primary.main,
            },
          }}
        />
        <BottomNavigationAction label="Events" icon={<EventIcon />} />
      </BottomNavigation>
    </Box>
  );
}