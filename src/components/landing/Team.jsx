import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import jana from "../../assets/jana.jpg"; 
import domka from "../../assets/domka.jpg"; 
import lubo from "../../assets/lubo.jpg"; 
const trainers = [
  { id: 1, name: 'Jana Rozhoňová', foto: jana, shortDescription: 'Som lektorka a majiteľka tanečnej školy T.I.M. Group Slovakia. Reprezentujem Slovensko doma aj v zahraničí. Na tanečnej scéne pôsobím profesionálne od svojich 3 rokov. Počas života som dosiahla množstvo ocenení a chcem svojich tanečníkov posúvať vpred mojimi znalosťami v oblasti tanca.',  description: 'Som lektorka a majiteľka tanečnej školy T.I.M. Group Slovakia. Reprezentujem Slovensko doma aj v zahraničí. Na tanečnej scéne pôsobím profesionálne od svojich 3 rokov. Počas života som dosiahla množstvo ocenení. Celý život sa pohybujem na prvenstvách a stupienkoch víťazov. Pôsobila som na pódiách s rôznymi slávnymi osobnosťami ako napríklad Rytmus, Ivan Vereš z kapeky Made to made, Marián Čekovský, Separ a Tina, rapper Helico, Bacil a Rakby a podobne. Taktiež som tancovala ako doprovod pre rôznych svetoznámych DJs a podobne. Na tanečných scénach som predvádzala rôzne značky tanečným doprovodom. Pôsobila som v troch svetoznámych muzikáloch a to Pomáda, Báthoryčka, Búrka. Tanečným číslom som otvárala obchodné centrum Aupark v Košiciach. Za celý môj život je to nespočetné množstvo dosiahnutých  úspechov. Venujem sa tvorbe  Show choreografií, scénike, modernej klasike, Hip-Hopu, streetdancu, breakdancu, latino dance, dancehall a podobne. Som plne certifikovaný tanečník, ktorého poznajú na domácej scéne ale aj v zahraničí. Mala som rôzne spolupráce počas Gala večerov a rôznych akcií.' },
  { id: 2, name: 'Ľubomír Pelko', foto: lubo, shortDescription: 'Pôsobím ako tanečník a lektor tanečnej školy T.I.M Group Slovakia. Tancu sa venujem od roku 2005, keď ma prijali do breakin-ovej skupiny Version Style. V minulosti som tancoval s Janou Rozhoňovou,  ktorá ma oslovila ohľadom lektorstva vo svojej tanečnej škole.', description: 'Pôsobím ako tanečník a lektor tanečnej školy T.I.M Group Slovakia. Tancu sa venujem od roku 2005, keď ma prijali do breakin-ovej skupiny Version Style. Zdokonaľovanie týchto štýlov, formovanie svojej osobnosti a zbieranie skuseností som načerpával cestovaním po zahraničí a navštevovaním množstva workshopov, battlov, kempov a súťaží. Výsledkom boli vystúpenia, natáčania a spolupráce so slávnymi osobnosťami, členstvo v zahraničných skupinách,  či úspechy v rôznych súťažiach. Ako lektor chcem na sebe naďalej pracovať, učiť, odovzdávať svoje skúsenosti a formovať novú generáciu tanečníkov.' },
  { id: 3, name: 'Dominika Mrázová', foto: domka, shortDescription: 'Som tanečník a výpomoc lektorov v tanečnej škole T.I.M. Group Slovakia. Od roku 2010 a teda mojich 5 rokov som sa pretancovala cez rôzne Európske súťaže a dosiahla množstvo ocenení. Začiatkom roka 2023 som súhlasila s výpomocou na tréningoch mladších generácií našej tanečnej školy. ',  description: 'Som tanečník a výpomoc lektorov v tanečnej škole T.I.M. Group Slovakia. Od roku 2010 a teda mojich 5 rokov som sa pretancovala cez rôzne Európske súťaže a dosiahla množstvo ocenení. Začiatkom roka 2023 som súhlasila s výpomocou na tréningoch mladších generácií našej tanečnej školy. '  },
];

const Team = ({showButton=true, isShortDescription=true}) => {
  return (
    <Box sx={{ backgroundColor: '#121212', color: 'white', py: 8, px: 4 }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h3" align="center" gutterBottom>
          Naši tréneri
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Náš trénerský tím sa skladá z dvoch certifikovaných profesionálov a jedného pomocného trénera. 
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {trainers.map((trainer) => (
            <Grid item xs={12} sm={6} md={4} key={trainer.id}>
              <Card sx={{ backgroundColor: '#1E1E1E', color: 'white', textAlign: 'center' }}>
                <CardMedia 
                image = {trainer.foto}
                  component="img"
                  alt={trainer.name}
                  sx={{
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    mx: 'auto',
                    mt: 2,
                    backgroundColor: 'white',
                  }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {trainer.name}
                  </Typography>
                  <Typography variant="body2">
                  {isShortDescription ? trainer.shortDescription : trainer.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {showButton && (
          <Box textAlign="center" sx={{ mt: 4 }}>
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                borderWidth: 2,
                boxShadow: "none",
                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "none",
                },
              }}
            >
              Viac informácií
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Team;