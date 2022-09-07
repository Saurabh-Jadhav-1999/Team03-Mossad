import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider() {
    const [value, setValue] = React.useState(800);
    const mark = [
        {
            value: 50,
            label: '$50'
        },
        {
            value: 2000,
            label: '$2000'
        }
    ]
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 50) {
            setValue(50);
        } else if (value > 2000) {
            setValue(2000);
        }
    };

    return (
        <Box sx={{ width: 250 }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        step={10}
                        min={50}
                        max={2000}
                        marks={mark}
                        valueLabelDisplay="auto"
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        textDecoration={'none'}
                        sx={{
                            width: '70%',
                            border: '3px solid #316AFF',
                            borderRadius: '7px',
                            height: '40px',
                            textDecoration: 'none',
                            alignContent: 'center',
                            paddingLeft: '15px'
                        }}
                        inputProps={{
                            step: 10,
                            min: 50,
                            max: 2000,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            background: '#FFFFFF',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
