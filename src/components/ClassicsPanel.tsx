import { Card, CardContent, Typography } from '@mui/material';
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
          <CardContent>
            <Typography variant="h6" color="primary.light">
              {item.name[lang]}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1.5, minHeight: '40px' }}>
              {item.description[lang]}
            </Typography>
            <PriceRow priceCopa={item.priceCopa} priceCachi={item.priceCachi} lang={lang} />
          </CardContent>
        </Card>
      ))}
    </>
  );
}
