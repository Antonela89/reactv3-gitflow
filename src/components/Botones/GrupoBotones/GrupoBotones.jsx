import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';

export const GrupoBotones = ({lista, theme}) => {
  return (
    <ButtonGroup sx={{ width:'20%', height:'10%',  padding: '1rem', display: 'flex', alignItems: 'center'}} size="large" aria-label="large button group">
        {lista.map((Elemento, i) => (
            <IconButton key={i} aria-label={i} color='secondary'>
            <Elemento sx={{ fontSize: 40 }}/>
            </IconButton>
        ))}
    </ButtonGroup>
  )
}
