import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { Button } from "@mui/material";
import "mapbox-gl/dist/mapbox-gl.css";


mapboxgl.accessToken =
  "pk.eyJ1IjoiaHgyNTAiLCJhIjoiY20wczB3dWl0MGY3czJrc2hweTMwZTVhOSJ9.2P--GR2Y_gwasRs9MuKLmg";

const Contact = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const lat = 48.68992655911591;
    const lng = 21.28430305586983;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 15,
    });

    new mapboxgl.Marker({ color: "red" })
      .setLngLat([lng, lat])
      .setPopup(new mapboxgl.Popup().setHTML(
        "<h3 style={{ height: '100%'}}>T.I.M. Group Slovakia</h3>"))
      .addTo(map);
    
    return () => map.remove();
  }, []);

  return (
    <div
      style={{
        flexDirection: "column",
        width: "100%",
        minHeight: "100svh",
        height: "100%",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        backgroundColor: "#920B3A",
      }}
    >
      <h1 style={{ fontSize: "64px", color: "#fff", FontFamily:"Lora" }}>Spojme sa</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          width: "60%",
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            style={{
              padding: "4px",
              borderRadius: "8px",
              width: "100%",
              height: "2.5rem",
            }}
            type="text"
            placeholder="Vaše meno"
            required
          />
          <input
            style={{
              padding: "4px",
              borderRadius: "8px",
              width: "100%",
              height: "2.5rem",
            }}
            type="email"
            placeholder="Váš email"
            required
          />
        </div>
        <textarea
          style={{
            padding: "4px",
            borderRadius: "8px",
            height: "4rem",
          }}
          placeholder="Vaša správa"
          required
        ></textarea>
        <div
          style={{
            justifyContent: "flex-end",
            width: "100%",
            display: "flex",
          }}
        >
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
            Odoslať
          </Button>
        </div>
      </form>
      {/* Map Container */}
      <div
        ref={mapContainerRef}
        style={{
          width: "60%",
          height: "400px",
          marginTop: "16px",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      ></div>
    </div>
  );
};

export default Contact;