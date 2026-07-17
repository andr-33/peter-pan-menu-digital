import { Box, Typography, Divider } from '@mui/material';
import { uiTexts } from '../data/menuData';

interface PriceRowProps {
  priceCopa: string;
  priceCachi: string;
  lang: 'es' | 'en';
}

export default function PriceRow({ priceCopa, priceCachi, lang }: PriceRowProps) {
  return (
    <Box sx={{ display: 'flex', gap: 2, mt: 1, justifyContent: 'flex-end' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="caption" color="text.secondary" display="block">
          {uiTexts.copaHeader[lang]}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" color="primary.light">
          {priceCopa}€
        </Typography>
      </Box>
      <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="caption" color="text.secondary" display="block">
          {uiTexts.cachiHeader[lang]}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" color="secondary.main">
          {priceCachi}€
        </Typography>
      </Box>
    </Box>
  );
}
