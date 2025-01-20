import React from "react";
import { Calendar } from "@nextui-org/calendar";
import { parseDate } from "@internationalized/date";
import { Button } from "@mui/material";

const Contact = () => {
    return (
        <div style = {{flexDirection: "column", 
            width : "100%",
            minHeight : "100svh",
            height: "100%", 
            display : "flex",
            justifyItems : "center",
            alignItems : "center",
            backgroundColor: "#C20E4D",
            }}>
            <h1 style={{fontSize: "64px", color:"#fff" }} >Spojme sa </h1>
            <form style={{display: "flex", flexDirection:"column", gap: "8px", width: "60%" }}>
                <div style={{display: "flex", gap: "8px",  }}> 
                <input style= {{padding: "4px", borderRadius: "8px", width:"100%", height:"2.5rem"}} type="text" placeholder="Vaše meno" required />
                <input style= {{padding: "4px", borderRadius: "8px", width:"100%", height:"2.5rem" }} type="email" placeholder="Váš email" required />
                </div>
                <textarea style= {{padding: "4px", borderRadius: "8px", height:"4rem" }} placeholder="Vaša správa" required></textarea>
                {/* Použitie MUI Button */} 
                <div style={{justifyContent: "flex-end", 
                             width: "100%", display: "flex"}} >
      <Button variant="outlined" 
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
              }}> 
              Odoslať
        </Button>
    </div>       
        </form>
        
        </div>
    );
};

export default Contact;