import { HashLink } from "react-router-hash-link";
import { Paper, Switch, AppBar, Box, CssBaseline, Toolbar, Button, Modal, TextField, Checkbox, FormControlLabel, FormHelperText, Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import EventsSub from "./pages/EventsSub";
import GallerySub from "./pages/GallerySub";
import Schedule from "./pages/Schedule";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const isMobile = useMediaQuery("(max-width: 600px)"); // Breakpoint pre mobilné zariadenia
  const [mode, setMode] = useState(prefersDarkMode);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState(""); 
  const [openDrawer, setOpenDrawer] = useState(false); // Stav pre otvorený/zakrytý Drawer

  const appTheme = createTheme({
    typography: {
      fontSize: 16,
      fontFamily: "'Lora', serif",
      h1: { fontSize: "2.25rem" },
      h2: { fontSize: "2rem" },
      h3: { fontSize: "1.75rem" },
      h4: { fontSize: "1.5rem" },
      h5: { fontSize: "1.25rem" },
      h6: { fontSize: "1rem" },
    },
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const handleChange = () => {
    setMode(!mode);
  };

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const handleLoginSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError("Prosím zadajte platný email.");
      return;
    } else {
      setEmailError(""); 
    }
    console.log("Prihlásenie úspešné s emailom:", email);
    setOpenLoginModal(false);
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const navItems = [
    { label: "Domov", path: "/" },
    { label: "Rozvrh", path: "/schedule" },
    { label: "O nás", path: "/about" },
    { label: "Udalosti", path: "/events" },
    { label: "Galéria", path: "/gallery" },
    { label: "FAQ", path: "/#faq-section" },
    { label: "Kontakt", path: "/contact" },
  ];

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Router>
        <Paper elevation={0} sx={{ height: "100vh" }}>
          {/* AppBar pre desktop */}
          <AppBar component="nav" sx={{ backgroundColor: "#000", width: "100%" }}>
            <Toolbar sx={{ padding: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
                <Box component="img" src="/images/logo.svg" alt="Logo" sx={{ height: "60px" }} />
                {!isMobile && ( // Ak nie je mobil, zobraziť horizontálnu navigáciu
                  <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                    {navItems.map((item) => (
                      <Button
                        key={item.label}
                        component={HashLink}
                        smooth
                        to={item.path}
                        sx={{ color: "#F9E0E6" }}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </Box>
                )}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "auto" }}>
                  {!isMobile && ( // Ak nie je mobil, zobraziť tlačidlo "Prihlásiť sa"
                    <Button
                      variant="outlined"
                      sx={{ color: "#F9E0E6", borderColor: "#F9E0E6", marginLeft: "20px" }}
                      onClick={handleOpenLoginModal}
                    >
                      Prihlásiť sa
                    </Button>
                  )}
                  <Switch
                    checked={mode}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                    sx={{
                      ml: 2,
                      "& .MuiSwitch-thumb": { backgroundColor: "#C20E4D" },
                      "& .MuiSwitch-track": { backgroundColor: "#FFF" },
                      "& .MuiSwitch-rail": { backgroundColor: "#F9E0E6" },
                    }}
                  />
                  {isMobile && ( // Ak je mobil, zobrazí sa hamburger ikona
                    <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ color: "#F9E0E6", marginLeft: "10px" }}>
                      <MenuIcon />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </Toolbar>
          </AppBar>

          {/* Mobile Drawer */}
          <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: "#000",
                color: "#610726",
                padding: "16px",
              },
            }}
          >
            <Box sx={{ width: 250 }}>
              <Box component="img" src="/images/logo.svg" alt="Logo" sx={{ height: "60px", marginBottom: 2 }} />
             
              <Box sx={{ marginTop: 3, display: "flex", flexDirection: "column", justifyContent: "left"}}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={HashLink}
                    smooth
                    to={item.path}
                    sx={{ color: "#FFF", marginBottom: 2 }}
                    onClick={() => setOpenDrawer(false)} // Zavrieme Drawer po kliknutí
                  >
                    {item.label}
                  </Button>
                ))}
                {/* Tlačidlo Prihlásiť sa v mobile menu */}
                <Button
                  variant="outlined"
                  sx={{ color: "#F9E0E6", borderColor: "#F9E0E6", marginTop: 2 }}
                  onClick={handleOpenLoginModal}
                >
                  Prihlásiť sa
                </Button>
              </Box>
            </Box>
          </Drawer>

          {/* Modal for Login */}
          <Modal
            open={openLoginModal}
            onClose={handleCloseLoginModal}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backdropFilter: "blur(3px)",
              "& .MuiBox-root": {
      marginLeft: isMobile ? "16px" : "auto",
      marginRight: isMobile ? "16px" : "auto",
   
    },
            }}
          >
            <Box sx={{
              backgroundColor: "#F2D7E0",
              padding: "30px",
              borderRadius: "10px",
              width: "600px",
              textAlign: "left",
              boxShadow: 3,
            }}>
              <h2 style={{ color: "#610726", marginBottom: "20px" }}>Prihlásenie</h2>
              
              <TextField
                fullWidth
                variant="outlined"
                label="Váš email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{
                  style: { color: "#610726" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#610726" },
                    marginBottom: "8px",
                    "&:hover fieldset": { borderColor: "#610726" },
                    "&.Mui-focused fieldset": { borderColor: "#610726" },
                  },
                  input: { color: "#610726" },
                }}
              />
              {emailError && (
                <FormHelperText error sx={{ marginTop: 0, color: "#D32F2F", marginBottom: "16px" }}>
                  {emailError}
                </FormHelperText>
              )}

              <TextField
                fullWidth
                variant="outlined"
                label="Vaše heslo"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{
                  style: { color: "#610726" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#610726" },
                    marginBottom: "24px",
                    "&:hover fieldset": { borderColor: "#610726" },
                    "&.Mui-focused fieldset": { borderColor: "#610726" },
                  },
                  input: { color: "#610726" },
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    sx={{
                      color:"#610726",
                      "&.Mui-checked": { color: mode ? "#4CAF50" : "#17C964" },
                    }}
                  />
                }
                label="Zapamätať prihlásenie"
                sx={{
                    color: "#610726"
                }}
              />

              <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <Button
                  onClick={handleCloseLoginModal}
                  sx={{
                    backgroundColor: "#FFF",
                    color: "#920B3A",
                    width: "48%",
                  }}
                >
                  Zatvoriť
                </Button>
                <Button
                  onClick={handleLoginSubmit}
                  sx={{
                    backgroundColor: "#FFF",
                    color: "#920B3A",
                    width: "48%",
                  }}
                >
                  Prihlásiť
                </Button>
              </Box>
            </Box>
          </Modal>

          <Routes>
            <Route path="/" element={<Home mode={mode} />} />
            <Route path="/schedule" element={<Schedule mode={mode} />} />
            <Route path="/about" element={<AboutUs mode={mode} />} />
            <Route path="/events" element={<EventsSub mode={mode} />} />
            <Route path="/gallery" element={<GallerySub mode={mode} />} />
            <Route path="/faq" element={<FAQ mode={mode} />} />
            <Route path="/contact" element={<Contact mode={mode} />} />
          </Routes>
        </Paper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
