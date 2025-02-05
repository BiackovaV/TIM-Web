import { HashLink } from "react-router-hash-link";
import { Paper, Switch, AppBar, Box, CssBaseline, Toolbar, Button, Modal, TextField, Checkbox, FormControlLabel, FormHelperText, Drawer, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
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
import './LoginSignup.css';
import axios from "axios";
import userIcon from "./components/Assets/user.png";
import mailIcon from "./components/Assets/mail.png";
import passwordIcon from "./components/Assets/unlock.png";
 

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

  const [action, setAction] = useState("Registrácia");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Schedule", path: "/schedule" },
    { label: "About Us", path: "/about" },
    { label: "Events", path: "/events" },
    { label: "Gallery", path: "/gallery" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (action === "Registrácia") {
        const response = await axios.post("http://localhost:5000/register", formData);
        alert(response.data.message);
      } else {
        const response = await axios.post("http://localhost:5000/login", {
          email: formData.email,
          password: formData.password,
        });
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') handleSubmit();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [formData, action]);

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const handleChange = (event) => {
    setMode(event.target.checked);
  };

  return (
    <ThemeProvider theme={createTheme({ palette: { mode: mode ? 'dark' : 'light' } })}>
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
                    }}
                  />
                </Box>
              </Box>
            </Toolbar>
          </AppBar>

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
            <div style ={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              maringTop: "200px",
              backgroundColor: "#F2D7E0",
              paddingBottom: "30px",
              borderRadius: "10px",
              width: "600px",
              textAlign: "left",
              boxShadow: 3,
            }}>
              <div className = "header">
                <div className = "text"> {action} </div>
                <div className = "underline"> </div>
              </div>
              <div className = "inputs">
                { action === "Prihlásiť sa" ? null : (
                  <div className = "input">
                    <img src = {userIcon} alt ="User icon" />
                    <input
                      type = "text"
                      name = "username"
                      placeholder = "Meno"
                      value = {formData.username}
                      onChange = {handleInputChange}
                      />
                  </div>
                )}
                <div className = "input">
                  <img src = {mailIcon} alt = "Mail icon" />
                  <input
                    type = "email"
                    name = "email"
                    placeholder = "Email"
                    value = {formData.email}
                    onChange = {handleInputChange}
                  />
                </div>
                <div className = "input">
                  <img src = {passwordIcon} alt = "Password icon" />
                  <input
                    type = "password"
                    name = "password"
                    placeholder = "Heslo"
                    value = {formData.password}
                    onChange = {handleInputChange}
                  />
                </div>
              </div>
              { action === "Registrácia" ? null : (
                <div className = "forgot-password">
                  Zabudli ste heslo? <span> Klikni sem! </span>
                </div>
              )}
              <div className = "submit-container">
                <div
                  className = {action === "Prihlásiť sa" ? "submit gray" : "submit"}
                  onClick = {() => setAction("Registrácia")}
                  >
                    Registrácia
                </div>
                <div
                  className = {action === "Registrácia" ? "submit gray" : "submit"}
                  onClick = {() => setAction("Prihlásiť sa")}
                  >
                    Prihlásiť sa
                </div>
              </div>
            </div>
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