import React, { Component } from 'react';
import PropTypes from 'prop-types';


import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/SportsVolleyball';


const GamesList = ({ list, onChange }) => {

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
                    <ListItemButton
                        onClick={() => onChange(game)}
                        key={game.id}
                    >
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary={game.gameName}  secondary={`id: ${game.id} score: ${game.team1Score} - ${game.team2Score}`}/>
                    </ListItemButton>
                ))}
            </List>
        </div>
    );
}

GamesList.propTypes = {
    list: PropTypes.array,
};

export default GamesList;