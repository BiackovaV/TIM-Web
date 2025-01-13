import React from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 2rem;
`;

const ImageCard = styled.div`
    img {
        width: 100%;
        border-radius: 10px;
    }
`;

const Gallery = () => {
    return (
        <GalleryContainer>
            <ImageCard>
                <img src="https://via.placeholder.com/300" alt="Gallery Item" />
            </ImageCard>
            <ImageCard>
                <img src="https://via.placeholder.com/300" alt="Gallery Item" />
            </ImageCard>
        </GalleryContainer>
    );
};

export default Gallery;
