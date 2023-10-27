import React, { useState } from 'react'
import './Header.css'
import { MenuItem, TextField, createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react';

const Header = ({ category, setCategory, word, setWord }) => {
    const categories = ['English']
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#fff'
            }
        },
    });

    return (
        <div className='header'>
            <span className='title'>{word ? word : 'Word Hunt'}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField id="standard-basic" label="Standard" variant="standard" value={word}
                        onChange={(e) => setWord(e.target.value)}
                        className='search' />
                    <TextField
                        className='select'
                        id="standard-select-currency"
                        variant="standard"
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((option) => (
                            <MenuItem value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header