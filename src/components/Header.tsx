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
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="div" sx={{ color: 'primary.main', fontFamily: 'serif', letterSpacing: 1 }}>
            {uiTexts.title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {uiTexts.subtitle[lang]}
          </Typography>
        </Box>
        <Button 
          variant="outlined" 
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
