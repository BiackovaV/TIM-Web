import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const trainers = [
  { id: 1, name: 'Tréner #1', description: 'Lorem ipsum dolor sit amet consectetur. Aliquam egestas sed quam aliquam fermentum metus arcu quam et. Consectetur iaculis diam non amet in. Nunc lacus nisi adipiscing enim sed. Ultrices amet nibh fringilla accumsan.' },
  { id: 2, name: 'Tréner #2', description: 'Lorem ipsum dolor sit amet consectetur. Aliquam egestas sed quam aliquam fermentum metus arcu quam et. Consectetur iaculis diam non amet in. Nunc lacus nisi adipiscing enim sed. Ultrices amet nibh fringilla accumsan.' },
  { id: 3, name: 'Tréner #3', description: 'Lorem ipsum dolor sit amet consectetur. Aliquam egestas sed quam aliquam fermentum metus arcu quam et. Consectetur iaculis diam non amet in. Nunc lacus nisi adipiscing enim sed. Ultrices amet nibh fringilla accumsan.' },
  { id: 4, name: 'Tréner #1', description: 'Lorem ipsum dolor sit amet consectetur. Aliquam egestas sed quam aliquam fermentum metus arcu quam et. Consectetur iaculis diam non amet in. Nunc lacus nisi adipiscing enim sed. Ultrices amet nibh fringilla accumsan.' },
  { id: 5, name: 'Tréner #2', description: 'Lorem ipsum dolor sit amet consectetur. Aliquam egestas sed quam aliquam fermentum metus arcu quam et. Consectetur iaculis diam non amet in. Nunc lacus nisi adipiscing enim sed. Ultrices amet nibh fringilla accumsan.' },
  { id: 6, name: 'Tréner #3', description: 'Lorem ipsum dolor sit amet consectetur. Aliquam egestas sed quam aliquam fermentum metus arcu quam et. Consectetur iaculis diam non amet in. Nunc lacus nisi adipiscing enim sed. Ultrices amet nibh fringilla accumsan.' },
];

const Team = () => {
  return (
    <Box sx={{ backgroundColor: '#121212', color: 'white', py: 8, px: 4 }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h3" align="center" gutterBottom>
          Naši tréneri
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Lorem ipsum dolor sit amet consectetur. Aliquam egestas sed quam aliquam fermentum metus arcu quam et. Consectetur iaculis diam non amet in. Nunc lacus nisi adipiscing enim sed. Ultrices amet nibh fringilla accumsan.
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {trainers.map((trainer) => (
            <Grid item xs={12} sm={6} md={4} key={trainer.id}>
              <Card sx={{ backgroundColor: '#1E1E1E', color: 'white', textAlign: 'center' }}>
                <CardMedia
                  component="div"
                  alt={trainer.name}
                  sx={{
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    mx: 'auto',
                    mt: 2,
                    backgroundColor: 'white',
                  }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {trainer.name}
                  </Typography>
                  <Typography variant="body2">
                    {trainer.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" sx={{ mt: 4 }}>
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
            Viac informácií
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;