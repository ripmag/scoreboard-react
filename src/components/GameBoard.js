import React, { Component } from 'react';
import PropTypes from 'prop-types';

const GameBoard = ({ game }) => {

    return (
        <div className='GameBoard'>
            {game.id}
        </div>
    );
}

GameBoard.propTypes = {
    game: PropTypes.object,
};

export default GameBoard;