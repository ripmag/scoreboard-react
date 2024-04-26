import React from 'react';
import PropTypes from 'prop-types';

import apiService from '../services/api.ts';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/base/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

const GameBoard = ({ game, onChange }) => {

    const addPointTeam1 = () => {
        apiService.addPointTeam1(game.id)
            .then((data) => onChange(data));
    }

    const addPointTeam2 = () => {
        apiService.addPointTeam2(game.id)
            .then((data) => onChange(data));
    }

    const onEditGameName = (e) => {
        const newGameName = e.target.value;
        apiService.onEditGameName(game.id, newGameName)
            .then((data) => onChange(data));
    }

    const onEditTeam1 = (e) => {
        apiService.onEditTeam1(game.id, e.target.value)
            .then((data) => onChange(data));
    }

    const onEditTeam2 = (e) => {
        apiService.onEditTeam2(game.id, e.target.value)
            .then((data) => onChange(data));
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-helperText"
                        label="Name of the game"
                        value={game.gameName}
                        helperText="You can edit it"
                        onChange={onEditGameName}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-helperText"
                        label="Team1"
                        value={game.team1Name}
                        helperText="You can edit it"
                        onChange={onEditTeam1}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-helperText"
                        label="Team2"
                        value={game.team2Name}
                        helperText="You can edit it"
                        onChange={onEditTeam2}
                    />
                </Grid>
                <Grid item xs={4}>
                    {game.team1Score}
                </Grid>
                <Grid item xs={4}>
                    <List>
                        {game.setsScore.map((set, setNumber) => (
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