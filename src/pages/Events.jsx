import React from "react";
import { Grid, Typography, CardContent, Card } from '@mui/material';
import Contact from "../pages/Contact"


const Cards = [
    { id: 1, name: 'HVK TRÉNING',  description: ' 16:30 - 18:30 ' },
    { id: 2, name: 'JVK TRÉNING',  description: ' 16:50 - 17:50 ' },
    { id: 3, name: 'HVK TRÉNING',  description: ' 16:30 - 18:30 ' },
    { id: 4, name: 'DVK TRÉNING',  description: ' 17:00 - 18:00 ' },
    { id: 5, name: 'JVK TRÉNING',  description: ' 18:00 - 19:00 ' },
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
            fontSize: "1.2rem"
         }}> 
         <div style={{padding:"32px 350px 0px 350px", }}>
            
            <h1>Udalosti</h1>
        
            </div>
                     {Cards.map((card) => (
                         <Card sx={{ backgroundColor: '#fff', color: 'black', textAlign: 'Left',borderRadius: "8px",width:"40rem", marginTop: "8px", marginBottom:"16px"}}>
                           <CardContent>
                             <Typography variant="h6" gutterBottom>
                               {card.name}
                             </Typography>
                             <Typography variant="body2">
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
