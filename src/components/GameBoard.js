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
    updateInfo,
    onEditTeam1,
    onEditTeam2,
} from '../features/games/gamesSlice.ts';
import PointIcon from '@mui/icons-material/ControlPoint.js';
import EditIcon from '@mui/icons-material/Edit.js';
import GameForm from './GameForm.js';
import IconButton from '@mui/material/IconButton';


const GameBoard = () => {

    const list = useSelector((state) => state.games.list);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [game, setGame] = useState();
    const [isShowForm, setIsShowForm] = useState(false);

    useEffect(() => {
        setGame(list.find(game => game.id === +id));
    }, [list, id])

    // const editName = debounce((e) => {
    //     dispatch(onEditGameName({ id, name: e.target.value }));
    // }, 1000)

    const onSaveGame = (content) => {
        dispatch(updateInfo({ id, content }));
    }

    const editTeam1 = debounce((e) => {
        dispatch(onEditTeam1({ id, name: e.target.value }));
    }, 1000)

    const editTeam2 = debounce((e) => {
        dispatch(onEditTeam2({ id, name: e.target.value }));
    }, 1000)

    if (!game) { return null; }

    if (isShowForm) {
        return (
            <GameForm
                gameName={game.gameName}
                team1Name={game.team1Name}
                team2Name={game.team2Name}
                onSubmit={onSaveGame}
                onBack={() => setIsShowForm(false)}
            />)
    }

    return (
        <>
            <Grid container spacing={0}>
                <Grid
                    item xs={10}
                    alignItems="center"
                    justifyContent="center"
                >
                    <TextField
                        sx={{ m: 2, mb: 0 }}
                        id="outlined-helperText"
                        label="Name of the game"
                        value={game.gameName}
                    />
                </Grid>
                <Grid
                    item xs={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    <IconButton
                        title='go back'
                        onClick={() => setIsShowForm(true)}
                    >
                        <EditIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        sx={{ m: 2 }}
                        id="outlined-helperText"
                        label="Team1"
                        value={game.team1Name}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        sx={{ m: 2 }}
                        id="outlined-helperText"
                        label="Team2"
                        value={game.team2Name}
                        contentEditable={false}
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
                                    <ListItemText primary={`Set - ${setNumber + 1}`} secondary={set} align='center' />
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