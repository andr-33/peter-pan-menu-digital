import { AppBar, Toolbar, Box, Typography, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { Globe } from 'lucide-react';
import { uiTexts } from '../data/menuData';

interface HeaderProps {
  lang: 'es' | 'en';
  onSelectLanguage?: (lang: 'es' | 'en') => void;
  onToggleLanguage?: () => void;
}

export default function Header({ lang, onSelectLanguage, onToggleLanguage }: HeaderProps) {
  const handleChange = (event: SelectChangeEvent) => {
    const selectedLang = event.target.value as 'es' | 'en';
    if (onSelectLanguage) {
      onSelectLanguage(selectedLang);
    } else if (onToggleLanguage) {
      onToggleLanguage();
    }
  };

  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        bgcolor: 'background.default',
        backgroundImage: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, mt: 2, mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src="/logo.png" alt="Logo" style={{ width: '35px', height: '35px' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" component="div" sx={{ color: 'primary.main', fontFamily: 'serif', letterSpacing: 1 }}>
                {uiTexts.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {uiTexts.subtitle[lang]}
              </Typography>
            </Box>
          </Box>
        </Box>
        <FormControl size="small" variant="outlined">
          <Select
            value={lang}
            onChange={handleChange}
            displayEmpty
            sx={{
              color: 'text.primary',
              bgcolor: 'rgba(255, 255, 255, 0.06)',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              height: '36px',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.15)'
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'primary.main'
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'primary.main'
              },
              '& .MuiSelect-select': {
                display: 'flex',
                alignItems: 'center',
                gap: 0.75,
                py: 0.5,
                px: 1.25,
                pr: '28px !important'
              },
              '& .MuiSvgIcon-root': {
                color: 'text.secondary',
                right: '6px'
              }
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: '#1e1e1e',
                  color: 'text.primary',
                  borderRadius: '12px',
                  mt: 0.5,
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
                  '& .MuiMenuItem-root': {
                    fontSize: '0.85rem',
                    py: 1,
                    px: 2,
                    gap: 1.25,
                    fontWeight: 500,
                    '&.Mui-selected': {
                      bgcolor: 'rgba(76, 175, 80, 0.18)',
                      color: 'primary.main',
                      fontWeight: 'bold'
                    },
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.08)'
                    }
                  }
                }
              }
            }}
          >
            <MenuItem value="es">
              <Globe size={15} style={{ opacity: 0.8 }} />
              <span>Español</span>
            </MenuItem>
            <MenuItem value="en">
              <Globe size={15} style={{ opacity: 0.8 }} />
              <span>English</span>
            </MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
}
