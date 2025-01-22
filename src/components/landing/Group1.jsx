import React from "react";
import { Button, Container, Box, Typography } from "@mui/material";
import aboutImage from "../../assets/about.png"; // Uistite sa, že máte obrázok v tejto ceste


// Štýly pre Group1 (O nás)
const sectionStyle = {
  backgroundColor: "#C20E4D", // Používame primárnu farbu pre pozadie
  padding: "40px 20px", // Padding pre sekciu
};

const contentContainerStyle = {
  display: "flex", // Flexbox pre zarovnanie
  justifyContent: "space-between", // Medzera medzi textom a obrázkom
  alignItems: "center", // Vertikálne zarovnanie
  maxWidth: "1200px", // Maximálna šírka kontajnera
  margin: "0 auto", // Na stred
};

const textContainerStyle = {
  flex: 1, // Text zaberať 1/2 šírky
  textAlign: "left", // Zarovnanie textu doľava
  color: "#fff", // Nastavenie farby textu na bielu
};

const headingStyle = {
  fontSize: "3rem",
  marginBottom: "20px",
  color: "#fff", // Nadpis biely
  FontFamily: "Lora", 
};

const paragraphStyle = {
  fontSize: "1.2rem",
  marginBottom: "30px",
  color: "#fff", // Text biely
  FontFamily: "Lora"
};

const imageContainerStyle = {
  flex: 1, // Obrázok zaberá druhú polovicu
  width: "100%", // Umožní obrázku rozťahovať sa na celú šírku
  maxWidth: "500px", // Maximálna šírka obrázka
  height: "auto", // Pre zachovanie pomeru strán obrázka
  backgroundImage: `url(${aboutImage})`, // Nastavenie obrázka
  backgroundSize: "cover", // Prispôsobenie obrázku
  backgroundPosition: "center", // Zarovnanie obrázku na stred
};

const buttonStyle = {
  marginTop: "20px",
  color: "#fff",
  backgroundColor: "#fff", // Tlačidlo biele
  "&:hover": {
    backgroundColor: "#e0e0e0", // Tmavší odtieň pri hoveri
  },
};

const Group1 = () => {
  return (
    <section style={sectionStyle}>
      <Container style={contentContainerStyle}>
        <div style={textContainerStyle}>
          <Typography variant="h2" style={headingStyle}>
            O nás :
          </Typography>
          <Typography style={paragraphStyle}>
          Sme tanečná škola a voláme sa <strong>T.I.M. GROUP SLOVAKIA.</strong> Sme občianské združenie, ktoré od roku <strong>1991</strong> pôsobí na tanečnej scéne až dodnes, 
          čo je <strong>vyše 30 rokov pôsobenia</strong> nášho tanečného klubu na svetoznámych pódiách.
          </Typography>
          <Button
              variant="outlined"
              color="inherit"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                borderWidth: 2,
                boxShadow: "none", // Odstránenie tieňa z tlačidla
                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "none", // Odstránenie tieňa pri hoveri
                },
              }}
            >
              Zistiť viac 
            </Button>
        </div>
        <Box style={imageContainerStyle} /> {/* Obrázok na pravej strane */}
      </Container>
    </section>

  );
};

export default Group1;