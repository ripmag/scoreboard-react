import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
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
import PointIcon from '@mui/icons-material/ControlPoint.js';


const GameBoard = () => {

    const list = useSelector((state) => state.games.list);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [game, setGame] = useState();
    const [dbVal, setDbVal] = useState();

    const helperText = game && game.isGameOver ? "Game finished" : "You can edit it";

    useEffect(() => {
        setGame(list.find(game => game.id === +id));
    }, [list, id])

    const editName = debounce((e) => {
        dispatch(onEditGameName({ id, name: e.target.value }));
    }, 1000)

    const editTeam1 = debounce((e) => {
        dispatch(onEditTeam1({ id, name: e.target.value }));
    }, 1000)

    const editTeam2 = debounce((e) => {
        dispatch(onEditTeam2({ id, name: e.target.value }));
    }, 1000)

    if (!game) { return null; }

    return (
        <>
            <Grid container spacing={2} >
                <Grid
                    item xs={12}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Stack>
                        <TextField
                            sx={{ m: 2, mb: 0 }}
                            id="outlined-helperText"
                            label="Name of the game"
                            // value={dbVal}
                            defaultValue={game.gameName}
                            disabled={game.isGameOver}
                            helperText={helperText}
                            onChange={editName}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        sx={{ m: 2 }}
                        id="outlined-helperText"
                        label="Team1"
                        defaultValue={game.team1Name}
                        disabled={game.isGameOver}
                        helperText={helperText}
                        onChange={editTeam1}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        sx={{ m: 2 }}
                        id="outlined-helperText"
                        label="Team2"
                        defaultValue={game.team2Name}
                        disabled={game.isGameOver}
                        helperText={helperText}
                        onChange={editTeam2}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h2" gutterBottom align='center'>
                        {game.team1Score}
                    </Typography>
                    <Stack padding={2}>
                        <Button
                            variant="contained"
                            title='add point'
                            disabled={game.isGameOver}
                            onClick={() => dispatch(addPointTeam1({ id }))}
                        >
                            <PointIcon />
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={4} >
                    <List >
                        {game.setsScore.map((set, setNumber) => (
                            <div key={setNumber}>
                                <ListItem>
                                    <ListItemText primary={set} secondary={`Set - ${setNumber}`} align='center' />
                                </ListItem>
                                <Divider component="li" />
                            </div>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h2" gutterBottom align='center'>
                        {game.team2Score}
                    </Typography>
                    <Stack padding={2}>
                        <Button
                            variant="contained"
                            title='add point'
                            disabled={game.isGameOver}
                            onClick={() => dispatch(addPointTeam2({ id }))}
                        >
                            <PointIcon />
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}

GameBoard.propTypes = {
    game: PropTypes.object,
};

export default GameBoard;