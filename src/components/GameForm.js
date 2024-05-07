import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const GameForm = ({
    gameName,
    team1Name,
    team2Name,
    onSubmit,
    onBack,
}) => {
    const initialState = {
        gameName,
        team1Name,
        team2Name,
    }
    const [formState, setFormState] = useState(initialState);

    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormState((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        onSubmit(formState);
        onBack();
    }

    return (
        <Stack>
            <Grid container spacing={2} >
                <Grid
                    item xs={12}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Stack>
                        <TextField
                            sx={{ m: 2, mb: 0 }}
                            name='gameName'
                            id="outlined-helperText"
                            label="Name of the game"
                            defaultValue={gameName}
                            onChange={onChange}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        sx={{ m: 2 }}
                        name='team1Name'
                        id="outlined-helperText"
                        label="Team1"
                        defaultValue={team1Name}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        sx={{ m: 2 }}
                        name='team2Name'
                        id="outlined-helperText"
                        label="Team2"
                        defaultValue={team2Name}
                        onChange={onChange}
                    />
                </Grid>
            </Grid>
            <Stack direction="row" spacing={4} sx={{ m: 2 }} >
                <Button
                    variant="contained"
                    title='go back'
                    size='large'
                    fullWidth
                    onClick={onBack}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    title='save game'
                    size='large'
                    fullWidth
                    onClick={handleSubmit}
                >
                    Save
                </Button>
            </Stack>
        </Stack>
    );
}

GameForm.propTypes = {
    gameName: PropTypes.string,
    team1Name: PropTypes.string,
    team2Name: PropTypes.string,
    onSubmit: PropTypes.func,
    onBack: PropTypes.func,
};

export default GameForm;