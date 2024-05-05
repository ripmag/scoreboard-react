import React from "react";
import { Outlet } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import AddGameIcon from '@mui/icons-material/AddBox';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { createGame } from "../features/games/gamesSlice.ts";

import { unwrapResult } from '@reduxjs/toolkit';

export const Layout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddGame = () => {
        dispatch(createGame())
            .then(res => navigate (`/game/${unwrapResult(res)}`) );
    }
    return (
        <>
            <Container maxWidth="sm">
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit"
                            onClick={() => navigate('/')}
                        >
                            <HomeIcon />
                        </Button>
                        <Button color="inherit"
                            onClick={handleAddGame}
                        >
                            <AddGameIcon />
                        </Button>

                    </Toolbar>
                </AppBar>
                <Paper
                    elevation={3}
                >
                    <Box
                        display="flex"
                        justifyContent={'center'}
                    >
                        <Outlet />
                    </Box>
                </Paper>
            </Container>
        </>
    );
}