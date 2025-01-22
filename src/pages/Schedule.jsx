import React from "react";
import { Grid, Typography, CardContent, Card, CardMedia,Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import DVK from "../assets/DVK.jpg"; 
import JVK from "../assets/JVK.jpg"; 
import HVK from "../assets/HVK.jpg";
import Contact from "../pages/Contact"

const label = { inputProps: { 'aria-label': 'Checkbox label' } };

const buttonStyle = {
  marginTop: "20px",
  color: "#fff",
  backgroundColor: "#fff", // Tlačidlo biele
  "&:hover": {
    backgroundColor: "#e0e0e0", // Tmavší odtieň pri hoveri
  },
};

const Cards = [
  { id: 1, name: 'DVK - Detská veková kategória', foto: DVK , description: 'od 3-6 rokov. --> Každý štvrtok 17:00-18:00', description2: "15€ Mesačne" },
  { id: 2, name: 'JVK - Juniorská veková kategória', foto: JVK ,  description: 'od 6-11 rokov. --> Každý utorok 16:50-17:50 a štvrtok 18:00-19:00', description2:"25€ Mesačne" },
  { id: 3, name: 'HVK - Hlavná veková kategória', foto: HVK , description: 'od 12 + rokov. --> Každý pondelok a stredu 16:30-18:30', description2:"35€ Mesačne"},
];

const Courses = () => {
  return (
    <div
      style={{
        flexDirection:"column",
        width: "100%",
        minHeight: "100svh",
        height: "80%",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        backgroundColor: '#121212',
        textAlign: "center",
        fontFamily: "'Open Sans', sans-serif",
        color: "#fff",
        fontSize: "1.2rem",
        
      }} 
    >
      <div style={{ 
                    fontSize: "2rem",
                    fontFamily: "'Helvetica', sans-serif", 
                    textAlign: "center",
                     color: "#C20E4D" }}>
                        <div style={{padding:"32px 350px 0px 350px", }}></div>
        <h1>Rozvrh hodín</h1>
      </div>
      <p>Vitajte na stránke ponuky kurzov. Prezrite si jednotlivé kurzy a zaregistrujte Vaše dieťa hneď !</p>
      <div
      style={{
        width: "85%",
        minHeight: "100svh",
        height: "100%",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        backgroundColor: '#121212',
        textAlign: "center",
        fontFamily: "'Open Sans', sans-serif",
        color: "#fff",
        fontSize: "1.2rem",
        
      }} 
    >
      {Cards.map((course) => (
        <Card
          key={course.id} 
          sx={{
            backgroundColor: '#fff',
            color: 'black',
            textAlign: 'Left',
            borderRadius: "8px",
            width: "40rem",
            marginTop: "-400px",
            height:"20%",
            height:"30rem",
            width:"35rem",
            marginRight:"3rem",
            marginLeft:"1rem",
            fontSize: "1.2rem",
            marginBottom:"-200px"

          }}
        ><CardMedia 
                        image = {course.foto}
                          component="img"
                          alt={course.name}
                          sx={{
                            borderRadius: '0%',
                            width: '100%',
                            height: '60%',
                            mx: 'auto',
                            mt: 2,
                            backgroundColor: 'white',
                            marginTop:"0px"
                          }}
                        />
            
          <CardContent>
            <Typography style = {{ fontSize:"1.1rem", marginTop: "2px"}} variant="h6" gutterBottom>
              {course.name}
            </Typography>
            <Typography style = {{ fontSize:"1.2rem"}} variant="body2">
              {course.description}
            </Typography>
            <Typography style = {{ fontSize:"1.4rem", marginTop: "18px"}} variant="body2">
              {course.description2}
            </Typography>
          </CardContent>
        </Card>
      ))}
      </div>


      <div
  style={{
    width: "100%", // Full width of the viewport
    height: "100%", // Full height of the viewport
    display: "flex", // Use flexbox
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
    backgroundColor: "#121212", // Background color
    fontFamily: "'Open Sans', sans-serif", // Font style
    marginBottom: "10rem",
    marginTop:"-200px"
  }}
>
  <div style={{ display: "flex", gap: "340px",justifyContent:"right", alignItems:"right",  marginTop: "0px"}}>
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
      Zvoliť
    </Button>
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
      Zvoliť
    </Button>
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
      Zvoliť
    </Button>
  </div>
</div>     
<div style={{ height:"70svh",
              marginTop:"-80px",
              fontSize: "2rem",
              fontFamily: "'Helvetica', sans-serif", 
              textAlign: "center",
               color: "#C20E4D" }}>
              <div style={{padding:"5px 350px 0px 350px", }}></div>
        <h1>Vaše kontaktné údaje</h1>
      <p  style = {{ fontSize:"12px", textAlign: "left", color:"white", fontFamily:"Lora",marginBottom:"-5px"}}>
        Meno dieťaťa
      </p>
        <input
            style={{
              padding: "5px",
              borderRadius: "8px",
              width: "100%",
              height: "2.5rem",
            }}
            type="text"
            placeholder=""
            required
          />
          <p  style = {{ fontSize:"12px", textAlign: "left", color:"white", fontFamily:"Lora",marginBottom:"-5px"}}>
           Váš e-mail
          </p>
          <input
            style={{
              padding: "5px",
              borderRadius: "8px",
              width: "100%",
              height: "2.5rem",
            }}
            type="email"
            placeholder=""
            required
          />
          <p  style = {{ fontSize:"12px", textAlign: "left", color:"white", fontFamily:"Lora",marginBottom:"-5px"}}>
           Vaše telefónne číslo
          </p>
          <input
            style={{
              padding: "5px",
              borderRadius: "8px",
              width: "100%",
              height: "2.5rem",
            }}
            type="email"
            placeholder=""
            required
          />
       <FormGroup style={{ fontSize: "14px", textAlign: "left", color: "white", fontFamily: "Lora", marginBottom: "-5px" }}>
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "green", 
              '&.Mui-checked': {
                color: "green", 
              },
            }}
          />
        }
        label="Súhlasím s odoslaním prihlášky"
      />
    </FormGroup>
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
                    backgroundColor: "#920B3A",
                    boxShadow: "none",
                  },
                }}
              >
                Odoslať
              </Button>
        </div>
        <Contact/>  
</div>   
      
 );
};

export default Courses;
