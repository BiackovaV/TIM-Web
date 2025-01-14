import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom"; // Importovanie Link pre navigáciu
import heroImage from "../assets/hero-img.svg"; // Uprav podľa cesty k tvojmu obrázku
import Group1 from "../components/landing/Group1";  // Skontroluj správnu cestu
import Team from "../components/landing/Team"

// Definovanie primárnej farby pre T.I.M.
const primaryColor = "#C20E4D"; // Tento odtieň použijeme pre názov

// Štýly pre hero sekciu
const heroSectionStyle = {
  position: "relative",
  height: "100vh", // Výška hero sekcie
  backgroundImage: `url(${heroImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center", // Horizontálne zarovnanie na stred
  alignItems: "center", // Vertikálne zarovnanie na stred
  color: "#fff",
};

const textContainerStyle = {
  maxWidth: "1200px", // Maximálna šírka textového kontajnera
  width: "100%", // Zabezpečí, že text nebude väčší ako obraz
  textAlign: "left", // Zarovná text doľava
  padding: "0 20px", // Pridaj padding pre lepšiu čitateľnosť
};

const Home = () => {
  return (
    <div>
      {/* Hero sekcia */}
      <section style={heroSectionStyle}>
        <div style={textContainerStyle}>
          <h1
            style={{
              fontSize: "4.5rem",
              marginBottom: "20px",
            }}
          >
            <span style={{ color: primaryColor }}>T.I.M</span> Group Slovakia
          </h1>
          <p style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#fff" }}>
            Aj vaše deti naučíme tancovať!
          </p>
          <Button
            variant="contained"
            component={Link} // Zabezpečuje navigáciu pri kliknutí
            to="/schedule" // Odkaz na stránku Schedule
            sx={{
              color: "white",
              backgroundColor: primaryColor, // Používa sa primárna farba
              borderRadius: "8px",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#D22E5B", // Tmavší červený odtieň pri hoveri
              },
            }}
          >
            Rozvrh hodín
          </Button>
        </div>
      </section>

      {/* Sekcia O nás */}
      <Group1 />
      <Team />
    </div>
  );
};

export default Home;