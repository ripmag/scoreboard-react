import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const GameBoard = ({ game, onChange }) => {

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
                    {game.setsScore}
                </Grid>
                <Grid item xs={4}>
                    {game.team2Score}
                </Grid>
                <Grid item xs={6}>
                    buttons
                </Grid>
                <Grid item xs={6}>
                    buttons
                </Grid>
            </Grid>
        </Box>
    );
}

GameBoard.propTypes = {
    game: PropTypes.object,
};

export default GameBoard;