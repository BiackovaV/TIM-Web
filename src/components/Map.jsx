import React from "react";
import styled from "styled-components";

const MapContainer = styled.div`
    iframe {
        width: 100%;
        height: 400px;
        border: none;
    }
`;

const Map = () => {
    return (
        <MapContainer>
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Slovakia"
                allowFullScreen
            ></iframe>
        </MapContainer>
    );
};

export default Map;
