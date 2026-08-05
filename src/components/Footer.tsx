import { Box, Container, Typography, Divider } from '@mui/material';
import { MapPin, Clock } from 'lucide-react';
import { uiTexts } from '../data/menuData';

interface FooterProps {
  lang: 'es' | 'en';
}

export default function Footer({ lang }: FooterProps) {
  const footerData = uiTexts.footer;

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        bgcolor: '#181818',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        pt: 3,
        pb: 4,
        px: 2,
        color: 'text.secondary'
      }}
    >
      <Container maxWidth="sm" disableGutters>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>

          {/* DIRECCIÓN / DIRECTION */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
            <Box
              sx={{
                bgcolor: 'rgba(76, 175, 80, 0.12)',
                color: 'primary.main',
                p: 1,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <MapPin size={20} />
            </Box>
            <Box>
              <Typography variant="subtitle2" color="primary.light" fontWeight="bold" sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {footerData.addressTitle[lang]}
              </Typography>
              <Typography variant="body2" color="text.primary" sx={{ mt: 0.5, lineHeight: 1.4 }}>
                {footerData.addressText[lang]}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.06)' }} />

          {/* HORARIO / SCHEDULE */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
            <Box
              sx={{
                bgcolor: 'rgba(255, 179, 0, 0.12)',
                color: 'secondary.main',
                p: 1,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Clock size={20} />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography variant="subtitle2" color="secondary.main" fontWeight="bold" sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {footerData.scheduleTitle[lang]}
              </Typography>
              <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                {footerData.scheduleDetails.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.875rem'
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      {item.days[lang]}
                    </Typography>
                    <Typography variant="body2" color="text.primary" fontWeight={500}>
                      {item.hours}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}
