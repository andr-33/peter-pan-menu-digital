import { Box, Card, CardContent, Typography, Divider } from '@mui/material';
import { GenericItem } from '../data/menuData';

interface GenericPanelProps {
  items: GenericItem[];
  lang: 'es' | 'en';
}

export default function GenericPanel({ items, lang }: GenericPanelProps) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        {items.map((item, idx) => (
          <Box key={idx}>
            <Box sx={{ px: 2, py: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body1">{item.name[lang]}</Typography>
              {item.price && <Typography variant="body1" color="primary.light" fontWeight="bold">{item.price}€</Typography>}
            </Box>
            {idx < items.length - 1 && <Divider sx={{ opacity: 0.5 }} />}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
