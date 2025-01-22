import React from "react";
import { Grid, Typography, CardContent, Card } from '@mui/material';
import Contact from "../pages/Contact"


const Cards = [
    { id: 1, name: 'MIA FESTIVAL',  description: ' Tanečná súťaž KOŠICE 18.4.2025' },
    { id: 2, name: 'BREAK-IN WORKSHOP',  description: ' KOŠICE 14.5.2025  Lektor: Ľubomír Pelko   17:00 Kultúrne Stredisko Nad Jazerom' },
    { id: 3, name: 'EUROPEAN DANCE CUP',  description: 'Európska súťaž o pohár a postup  KANIJŽA SERBIA  20.5.2025' },
    { id: 4, name: 'CONTEMPORARY WORKSHOP',  description: ' KOŠICE 12.6.2025 Lektor: Jana Rozhoňová  18:00 Kultúrne Stredisko Nad Jazerom' },
    { id: 5, name: 'DANCE CAMP',  description: 'Tanečný tábor plný tréningov a nových znalostí   5.7-13.7.2025 Remetské Hámre ' },
  ];
const Events = () => {
    return (
        <div style = 
        {{  flexDirection: "column", 
            width : "100%",
            minHeight : "100svh",
            height: "100%", 
            display : "flex",
            justifyItems : "center",
            alignItems : "center",
            backgroundColor: '#121212', 
            textAlign: "center",
            fontFamily: "'Opens Sans', sans-serif",
            color: "#fff",
            FontSize: "116px"
         }}> 
         <div style={{padding:"32px 350px 0px 350px", FontSize: "116px", FontFamily: "Lora", color: "#C20E4D"}}>
            
            <h1>Udalosti</h1>
        
            </div>
                     {Cards.map((card) => (
                         <Card sx={{ backgroundColor: '#fff', color: 'black', textAlign: 'Left',borderRadius: "8px",width:"40rem", marginTop: "8px", marginBottom:"16px"}}>
                           <CardContent>
                             <Typography style={{ FontSize: "16px", FontFamily: "Lora"}}variant="h6" gutterBottom>
                               {card.name}
                             </Typography>
                             <Typography style={{ FontSize: "16px", FontFamily: "Lora"}} variant="body2">
                             {card.description}
                             </Typography>
                           </CardContent>
                         </Card>
                     ))}
        <Contact/>
        </div>
    
    );
};

export default Events;
