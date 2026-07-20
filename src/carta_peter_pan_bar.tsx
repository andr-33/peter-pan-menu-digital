import React, { useState } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Tabs,
  Tab,
  Container,
  Chip,
  Typography
} from '@mui/material';
import { Info } from 'lucide-react';

// Custom imports
import { theme } from './theme/theme';
import { menuData, uiTexts } from './data/menuData';
import Header from './components/Header';
import CustomTabPanel from './components/CustomTabPanel';
import ClassicsPanel from './components/ClassicsPanel';
import SpiritsPanel from './components/SpiritsPanel';
import GenericPanel from './components/GenericPanel';

export default function PeterPanBarMenu() {
  const [tabValue, setTabValue] = useState(0);
  const [lang, setLang] = useState<'es' | 'en'>('es');

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

        {/* HEADER */}
        <Header lang={lang} onToggleLanguage={toggleLanguage} />

        {/* NAVEGACIÓN (TABS) */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="menu categories"
            textColor="primary"
            indicatorColor="primary"
          >
            {menuData.categories.map((cat) => (
              <Tab key={cat.id} label={cat.label[lang]} />
            ))}
          </Tabs>
        </Box>

        {/* CONTENIDO DESLIZABLE (SCROLL) */}
        <Box sx={{ flexGrow: 1, overflowY: 'auto', bgcolor: 'background.default' }}>
          <Container maxWidth="sm" disableGutters>

            {/* Banner de información de "Cachi" global */}
            {(tabValue === 0 || tabValue === 1) && (
              <Box sx={{ px: 2, pt: 2, pb: 0, display: 'flex', justifyContent: 'center' }}>
                <Chip
                  icon={<Info size={16} />}
                  label={uiTexts.cachiInfo[lang]}
                  color="secondary"
                  variant="outlined"
                  size="small"
                  sx={{ mb: 1, px: 1 }}
                />
              </Box>
            )}

            {/* PANEL 1: NUESTROS CLÁSICOS */}
            <CustomTabPanel value={tabValue} index={0}>
              <ClassicsPanel lang={lang} />
            </CustomTabPanel>

            {/* PANEL 2: COPAS */}
            <CustomTabPanel value={tabValue} index={1}>
              <SpiritsPanel lang={lang} />
            </CustomTabPanel>

            {/* PANEL 3: CERVEZAS */}
            <CustomTabPanel value={tabValue} index={2}>
              <GenericPanel items={menuData.cervezas} lang={lang} />
            </CustomTabPanel>

            {/* PANEL 4: VINOS */}
            <CustomTabPanel value={tabValue} index={3}>
              <GenericPanel items={menuData.vinos} lang={lang} />
            </CustomTabPanel>

            {/* PANEL 5: CHUPITOS */}
            <CustomTabPanel value={tabValue} index={4}>
              <Box sx={{ mb: 2, p: 1.5, bgcolor: 'rgba(76, 175, 80, 0.1)', borderRadius: 2, borderLeft: '4px solid #4caf50', textAlign: 'center' }}>
                <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
                  {lang === 'es' ? 'Todos nuestros chupitos a 2,50€' : 'All our shots at 2.50€'}
                </Typography>
              </Box>
              <GenericPanel items={menuData.chupitos} lang={lang} />
            </CustomTabPanel>

            {/* PANEL 6: REFRESCOS */}
            <CustomTabPanel value={tabValue} index={5}>
              <GenericPanel items={menuData.refrescos} lang={lang} />
            </CustomTabPanel>

          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}