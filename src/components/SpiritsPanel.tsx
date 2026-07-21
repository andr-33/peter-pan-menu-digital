import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import { ChevronDown, Wine, Beer, Martini, GlassWater, Flame, Sparkles } from 'lucide-react';
import { menuData, uiTexts } from '../data/menuData';

interface SpiritsPanelProps {
  lang: 'es' | 'en';
}

const getCategoryIcon = (categoryId: string) => {
  const iconProps = { size: 20, color: '#4caf50' };
  switch (categoryId) {
    case 'ron':
      return <Flame {...iconProps} />;
    case 'whisky':
      return <GlassWater {...iconProps} />;
    case 'ginebra':
      return <Martini {...iconProps} />;
    case 'vodka':
      return <Sparkles {...iconProps} />;
    case 'con-vino':
      return <Wine {...iconProps} />;
    case 'cerveza-chachi':
      return <Beer {...iconProps} />;
    default:
      return null;
  }
};

export default function SpiritsPanel({ lang }: SpiritsPanelProps) {
  return (
    <>
      {menuData.copas.map((category, idx) => (
        <Accordion key={idx}>
          <AccordionSummary
            expandIcon={<ChevronDown color="#4caf50" />}
            aria-controls={`panel-${category.categoryId}-content`}
            id={`panel-${category.categoryId}-header`}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {getCategoryIcon(category.categoryId)}
              <Typography variant="h6">{category.name[lang]}</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            {/* Cabecera de columnas para Copa y Cachi */}
            <Box sx={{ px: 2, py: 0.25, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Box sx={{ width: '150px' }}>
                {idx !== 0 && idx !== 5 && <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold' }}>{uiTexts.copaInfo[lang]}</Typography>}
              </Box>
              <Box sx={{ display: 'flex', flexGrow: 1, textAlign: 'right', justifyContent: 'flex-end' }}>
                <Box sx={{ width: '55px' }}>
                  <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                    {uiTexts.cachiHeader[lang]}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {category.items.map((item, itemIdx) => (
              <Box key={itemIdx}>
                <Box sx={{ px: 2, py: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body1">{item.name}</Typography>
                  <Box sx={{ display: 'flex', gap: 2, textAlign: 'right' }}>
                    {/* Copa/Glass price value hidden for now
                    <Box sx={{ width: '55px' }}>
                      <Typography variant="body2" fontWeight="medium" color="text.secondary">{item.priceCopa}€</Typography>
                    </Box>
                    */}
                    <Box sx={{ width: '55px' }}>
                      <Typography variant="body1" fontWeight="bold" color="secondary.main">{item.priceCachi}€</Typography>
                    </Box>
                  </Box>
                </Box>
                {itemIdx < category.items.length - 1 && <Divider sx={{ mx: 2, opacity: 0.5 }} />}
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
