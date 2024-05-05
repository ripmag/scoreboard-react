import React from 'react';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BallIcon from '@mui/icons-material/SportsVolleyball';
import DeleteIcon from '@mui/icons-material/Delete';

import ResetScoreIcon from '@mui/icons-material/RestartAlt';

import Typography from '@mui/material/Typography';

import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';


const GamesList = () => {
    const list = useSelector((state) => state.games.list);

    return (
        <>
            <List
                sx={{ width: '100%', maxWidth: 360 }}
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
                                    <ListItemText primary={game.gameName} secondary={`id: ${game.id} score: ${game.team1Score} - ${game.team2Score}`} />

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
                                <DeleteIcon />
                                <ResetScoreIcon />
                            </ListItemIcon>
                        </Stack>

                    </li>
                ))}
            </List>
        </>
    );
}

export default GamesList;