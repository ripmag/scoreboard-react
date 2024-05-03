import React from 'react';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/SportsVolleyball';

import { useSelector } from 'react-redux'
import {  NavLink } from 'react-router-dom';


const GamesList = () => {

    const list = useSelector((state) => state.games.list);
    // const isReady = useSelector((state) => state.games.isReady);
    // const dispatch = useDispatch();
    const onChange = (e) => {
        console.log('onChange', e);
    }

    return (
        <div className='GamesList'>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        All Games:
                    </ListSubheader>
                }
            >
                {list.map(game => (
                    <NavLink
                        to={`/game/${game.id}`}
                    >
                        <ListItemButton
                            onClick={() => onChange(game.id)}
                            key={game.id}
                        >
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary={game.gameName} secondary={`id: ${game.id} score: ${game.team1Score} - ${game.team2Score}`} />
                        </ListItemButton>
                    </NavLink>
                ))}
            </List>
        </div>
    );
}

export default GamesList;