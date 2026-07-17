import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';
import { uiTexts } from '../data/menuData';

interface HeaderProps {
  lang: 'es' | 'en';
  onToggleLanguage: () => void;
}

export default function Header({ lang, onToggleLanguage }: HeaderProps) {
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
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={onToggleLanguage}
          sx={{ minWidth: '40px', borderRadius: '20px' }}
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
