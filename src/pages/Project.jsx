import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Box, Typography, Card, CardMedia, Chip, Grid } from "@mui/material";

export const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const projects = [
    { title: "Title Project 1", tags: ["Tag1", "Tag2", "Tag3"], imageUrl: "https://via.placeholder.com/300" },
    { title: "Title Project 2", tags: ["Tag1", "Tag2", "Tag3"], imageUrl: "https://via.placeholder.com/300" },
    { title: "Title Project 3", tags: ["Tag1", "Tag2", "Tag3"], imageUrl: "https://via.placeholder.com/300" },
    { title: "Title Project 4", tags: ["Tag1", "Tag2", "Tag3"], imageUrl: "https://via.placeholder.com/300" },
  ];

  return (
    <Box className="min-h-screen w-full p={5}" id="project" sx={{ backgroundColor: '#f5f5f5', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        sx={{ fontWeight: 'bold', mb: 5, mt: 10, color: "text.primary" }}
        data-aos="fade-up"
      >
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 4,
              }}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} 
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': { 
                    transform: 'scale(1.05)', 
                    boxShadow: 6 
                  },
                  width: '100%',
                  maxWidth: 400,
                  boxShadow: 3, 
                  bgcolor: 'white',
                  borderRadius: 2, 
                  overflow: 'hidden', 
                }}
              >
                <CardMedia
                  component="img"
                  image={project.imageUrl}
                  alt={project.title}
                  sx={{ height: 200, width: '100%', objectFit: 'cover' }}
                />
                <Box sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: "text.primary" }}>
                    {project.title}
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    {project.tags.map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        label={tag}
                        sx={{ margin: '2px', bgcolor: 'blue.500', color: 'white', fontWeight: 'bold' }}
                      />
                    ))}
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Project;