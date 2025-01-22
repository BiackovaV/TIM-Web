import React, { useState } from 'react';

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Mockované údaje o obrázkoch
  const galleryItems = Array.from({ length: 30 }, (_, index) => ({
    title: `Obrázok ${index + 1}`,
    description: 'Popis obrázka',
    availability: 'Available soon. Get notified.',
  }));

  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedItems = galleryItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Štýly ako objekty
  const styles = {
    gallery: {
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#610726',
      color: '#fff',
      minHeight: '100vh',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '10px',
    },
    description: {
      fontSize: '1rem',
      marginBottom: '20px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '15px',
      marginBottom: '20px',
    },
    item: {
      background: 'linear-gradient(to bottom, #4e112c, #240a14)',
      padding: '15px',
      borderRadius: '10px',
      color: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      textAlign: 'left',
    },
    itemHeader: {
      marginBottom: '10px',
    },
    itemTitle: {
      margin: '5px 0',
      fontSize: '1.2rem',
    },
    itemDescription: {
      fontSize: '0.9rem',
      color: '#aaa',
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '0.9rem',
    },
    button: {
      backgroundColor: '#a03755',
      border: 'none',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#ff5f7f',
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
      transition: 'background-color 0.3s ease',
    },
    paginationButtonActive: {
      backgroundColor: '#ff5f7f',
    },
  };

  return (
    <div style={styles.gallery}>
      <h1 style={styles.title}>Galéria</h1>
      <p style={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Aliquam egestas sed quam aliquam fermentum metus arcu quam et. Consectetur iaculis diam non amet in. Nunc lacus nisi adipiscing enim sed. Ultrices amet nibh fringilla accumsan.
      </p>
      <div style={styles.grid}>
        {displayedItems.map((item, index) => (
          <div key={index} style={styles.item}>
            <div style={styles.itemHeader}>
              <span style={styles.itemDescription}>{item.description}</span>
              <h2 style={styles.itemTitle}>{item.title}</h2>
            </div>
            <div style={styles.footer}>
              <span>{item.availability}</span>
              <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
              >
                Notify Me
              </button>
            </div>
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
