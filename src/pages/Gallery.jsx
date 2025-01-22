import React, { useState } from 'react';
import fotka1 from '../assets/fotka1.jpg'; 
import fotka2 from '../assets/fotka2.jpg'; 
import fotka3 from '../assets/fotka3.jpg'; 
import fotka4 from '../assets/fotka4.jpg'; 
import fotka5 from '../assets/fotka5.jpg'; 
import fotka6 from '../assets/fotka6.jpg'; 
import fotka7 from '../assets/fotka7.jpg'; 
import fotka8 from '../assets/fotka8.jpg'; 
import fotka9 from '../assets/fotka9.jpg'; 
import fotka10 from '../assets/fotka10.jpg'; 
import fotka11 from '../assets/fotka11.jpg'; 
import fotka12 from '../assets/fotka12.jpg'; 
import fotka13 from '../assets/fotka13.jpg'; 
import fotka14 from '../assets/fotka14.jpg'; 
import fotka15 from '../assets/fotka15.jpg'; 

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const galleryItems = [
    { image: fotka1 },
    { image: fotka2 },
    { image: fotka3 },
    { image: fotka4 },
    { image: fotka5 },
    { image: fotka6 },
    { image: fotka7 },
    { image: fotka8 },
    { image: fotka9 },
    { image: fotka10 },
    { image: fotka11 },
    { image: fotka12 },
    { image: fotka13 },
    { image: fotka14 },
    { image: fotka15 },
  ];

  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedItems = galleryItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const styles = {
    gallery: {
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#610726',
      color: '#fff',
      minHeight: '100vh',
      fontSize:"64px", 
      fontFamily:"Lora"
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '15px',
      marginBottom: '20px',
      marginTop: "50px"
    },
    item: {
      background: 'linear-gradient(to bottom, #4e112c, #240a14)',
      borderRadius: '10px',
      color: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '300px',
      
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '5px',
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px',
    },
    paginationButton: {
      backgroundColor: '#a03755',
      color: 'white',
      border: 'none',
      margin: '0 5px',
      padding: '5px 10px',
      borderRadius: '50%',
      cursor: 'pointer',
    },
    paginationButtonActive: {
      backgroundColor: '#ff5f7f',
    },
  };

  return (
    <div style={styles.gallery}>
      <h1 style={styles.title}>Galéria</h1>
      <div style={styles.grid}>
        {displayedItems.map((item, index) => (
          <div key={index} style={styles.item}>
            <img src={item.image} alt={`Obrázok ${index + 1}`} style={styles.image} />
          </div>
        ))}
      </div>
      <div style={styles.pagination}>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            style={{
              ...styles.paginationButton,
              ...(currentPage === page + 1 ? styles.paginationButtonActive : {}),
            }}
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
