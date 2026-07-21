import { Card, CardContent, Typography, Box } from '@mui/material';
import { menuData } from '../data/menuData';
import PriceRow from './PriceRow';

interface ClassicsPanelProps {
  lang: 'es' | 'en';
}

export default function ClassicsPanel({ lang }: ClassicsPanelProps) {
  return (
    <>
      {menuData.clasicos.map((item) => (
        <Card key={item.id} sx={{ mb: 2, background: 'linear-gradient(145deg, #1e1e1e 0%, #161616 100%)', border: '1px solid #2e2e2e' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" color="primary.light">
              {item.name[lang]}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1, minHeight: '40px' }}>
              {item.description[lang]}
            </Typography>
            <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'row', alignItems: 'end', justifyContent: 'end' }}>
              {item.image && (
                <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'start' }}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name[lang]}
                    sx={{
                      width: '100px',
                      height: '110px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  />
                </Box>
              )}
              <PriceRow priceCopa={item.priceCopa} priceCachi={item.priceCachi} lang={lang} />
            </Box>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
