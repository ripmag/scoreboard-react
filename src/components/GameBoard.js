import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/base/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const GameBoard = ({ game, onChange }) => {

    const addPointTeam1 = () => {
        axios.post(`http://localhost:3000/games/${game.id}/addPointTeam1`)
            .then((response) => onChange(response.data));
    }

    const addPointTeam2 = () => {
        axios.post(`http://localhost:3000/games/${game.id}/addPointTeam2`)
            .then((response) => onChange(response.data));
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {game.gameName}
                </Grid>
                <Grid item xs={6}>
                    {game.team1Name}
                </Grid>
                <Grid item xs={6}>
                    {game.team2Name}
                </Grid>
                <Grid item xs={4}>
                    {game.team1Score}
                </Grid>
                <Grid item xs={4}>
                    <List>
                        {game.setsScore.map( (set, setNumber) => (
                            <>
                                <ListItem>
                                    <ListItemText primary={set} secondary={`Set - ${setNumber}`} />
                                </ListItem>
                                <Divider component="li" />
                            </>
                        ))}                        
                    </List>
                </Grid>
                <Grid item xs={4}>
                    {game.team2Score}
                </Grid>
                <Grid item xs={6}>
                    <Button
                        disabled={game.isGameOver}
                        onClick={addPointTeam1}
                    >+</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        disabled={game.isGameOver}
                        onClick={addPointTeam2}
                    >+</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

GameBoard.propTypes = {
    game: PropTypes.object,
};

export default GameBoard;