import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import { ChevronDown } from 'lucide-react';
import { menuData, uiTexts } from '../data/menuData';

interface SpiritsPanelProps {
  lang: 'es' | 'en';
}

export default function SpiritsPanel({ lang }: SpiritsPanelProps) {
  return (
    <>
      <Box sx={{ mb: 3, p: 1.5, bgcolor: 'rgba(76, 175, 80, 0.1)', borderRadius: 2, borderLeft: '4px solid #4caf50' }}>
        <Typography variant="body2" color="text.primary">
          {uiTexts.mixInfo[lang]}
        </Typography>
      </Box>

      {menuData.copas.map((category, idx) => (
        <Accordion key={idx} defaultExpanded={idx === 0}>
          <AccordionSummary
            expandIcon={<ChevronDown color="#4caf50" />}
            aria-controls={`panel-${category.categoryId}-content`}
            id={`panel-${category.categoryId}-header`}
          >
            <Typography variant="h6">{category.name[lang]}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            {/* Cabecera de columnas para Copa y Cachi */}
            <Box sx={{ px: 2, py: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                {lang === 'es' ? 'Marca' : 'Brand'}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, textAlign: 'right' }}>
                <Box sx={{ width: '55px' }}>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                    {uiTexts.copaHeader[lang]}
                  </Typography>
                </Box>
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
                    <Box sx={{ width: '55px' }}>
                      <Typography variant="body2" fontWeight="medium" color="text.secondary">{item.priceCopa}€</Typography>
                    </Box>
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
