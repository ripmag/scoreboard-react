import React from 'react';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BallIcon from '@mui/icons-material/SportsVolleyball';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ResetScoreIcon from '@mui/icons-material/RestartAlt';

import Typography from '@mui/material/Typography';

import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';

import { deleteGame, resetGame } from '../features/games/gamesSlice.ts';


const GamesList = () => {
    const list = useSelector((state) => Object.values(state.games.list));
    const dispatch = useDispatch();

    return (
        <>
            <List
                sx={{ width: '100%', maxWidth: 460 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                        align='center'
                    >
                        <Typography variant="h4" gutterBottom align='center'>
                            All Games:
                        </Typography>
                    </ListSubheader>
                }
            >
                {list.map(game => (
                    <li key={game.id}>
                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <NavLink
                                to={`/game/${game.id}`}
                                key={game.id}
                            >
                                <ListItemButton
                                    key={game.id}
                                >
                                    <ListItemIcon>
                                        <BallIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={game.gameName} secondary={`id: ${game.id} ${game.team1Score} - ${game.team2Score}`} />
                                </ListItemButton>
                            </NavLink>
                            <ListItemIcon
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    m: 1
                                }}
                            >
                                <Button
                                    variant="contained"
                                    title='delete game'
                                    onClick={() => dispatch(deleteGame({ id: game.id }))}
                                >
                                    <DeleteIcon />
                                </Button>
                                <Button
                                    variant="contained"
                                    title='reset game'
                                    onClick={() => dispatch(resetGame({ id: game.id }))}
                                >
                                    <ResetScoreIcon />
                                </Button>
                            </ListItemIcon>
                        </Stack>

                    </li>
                ))}
            </List>
        </>
    );
}

export default GamesList;