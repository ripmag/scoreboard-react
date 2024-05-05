import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/base/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { 
    addPointTeam1,
    addPointTeam2,
    onEditGameName,
    onEditTeam1,
    onEditTeam2,
 } from '../features/games/gamesSlice.ts';


const GameBoard = ({ onChange }) => {

    const list = useSelector((state) => state.games.list);
    const dispatch = useDispatch();
    const { id } = useParams();    
    const [game, setGame] = useState();

    useEffect( () => {
        setGame(list.find(game => game.id === +id));
    }, [list, id])

    if (!game) {return null;}

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-helperText"
                        label="Name of the game"
                        value={game.gameName}
                        helperText="You can edit it"
                        onChange={(e) => dispatch(onEditGameName({id, name: e.target.value}))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-helperText"
                        label="Team1"
                        value={game.team1Name}
                        helperText="You can edit it"
                        onChange={(e) => dispatch(onEditTeam1({id, name: e.target.value}))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-helperText"
                        label="Team2"
                        value={game.team2Name}
                        helperText="You can edit it"
                        onChange={(e) => dispatch(onEditTeam2({id, name: e.target.value}))}
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
                        onClick={() => dispatch(addPointTeam1({id}))}
                    >+</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        disabled={game.isGameOver}
                        onClick={() => dispatch(addPointTeam2({id}))}
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