import React, { Component } from 'react';
import PropTypes from 'prop-types';


import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/SportsVolleyball';


const GamesList = ({ list }) => {

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
                    <ListItemButton>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary={game.id} />
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