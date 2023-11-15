import React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GrupoBotones } from '../Botones/GrupoBotones/GrupoBotones';

// datos recibidos desde base de datos
const integrantes = {
    'Antonela Borgogno': {
        'GitHub': 'https://github.com/antonela',
        'LinkedIn': 'https://www.linkedin.com/in/antonela'
    },
    'Hugo Segura': {
        'GitHub': 'https://github.com/hugo',
        'LinkedIn': 'https://www.linkedin.com/in/hugo'
    }
}

export const Integrante = ({theme}) => {
  return (
    <>
    {Object.entries(integrantes).map(([nombre, detalles]) => (
        <Container sx={{ width: '100%', padding: '1rem', display: 'flex', alignItems: 'center'}} key={nombre}>
            <Box sx={{ width: '80%', padding: '1rem', display: 'flex', alignItems: 'center'}}>{nombre}</Box>
            <GrupoBotones lista={[GitHubIcon, LinkedInIcon]} theme={theme}/>
        </Container> 
    ))}
    </>
)}
  