import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { withStyles } from "@material-ui/core/styles";
import { Stack } from '@mui/system';
import styles from "./PriceRangeFilters.module.css"
import { useDispatch } from 'react-redux';
import { setBudgetFilters } from '../../slices/searchSlice';
import "./PriceRangeFilters.module.css"


const ImageSlider = withStyles({
    root: {
    },
    thumb: {
        color: "#3C71FF",
    },
    track: {
        color: "#3C71FF",
    },
    rail: {
        color: '#dfe2e7',
        border: "1px solid #b1b4b9",
    }
})(Slider);


export const InputSlider = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState(2000);
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

        setTimeout(() => {
            // console.log(newValue);
            // If required, we can slow down the rendering speed of filtered hotels list
        })
        dispatch(setBudgetFilters([50, newValue]))
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = (event) => {
        if (value < 50) {
            setValue(50);
            console.log("input slider value: ", Number(event.target.value));
        } else if (value > 2000) {
            setValue(2000);
        }
    };

    return (
        <Box xs={12} className={styles.test}>
            <Stack sx={{ width: 200 }} flexDirection={"row"} className={styles.removeExtraSpan}>
                <ImageSlider
                    value={typeof value === 'number' ? value : 0}
                    onChange={handleSliderChange}
                    step={10}
                    min={50}
                    max={2000}
                    marks={mark}
                    valueLabelDisplay="auto"
                    className={styles.removeExtraSpan}
                // onDragStop={console.log(value)}
                />
                <MuiInput
                    hidden
                    value={value}
                    size="small"
                    disableUnderline={true}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    sx={{
                        width: "33%",
                        height: "30px",
                        marginLeft: "10%",
                        marginBottom: "7%",
                        border: "3px solid #316AFF",
                        borderRadius: "10px ",
                        paddingLeft: "4px",
                        paddingTop: "4px",
                        fontSize: "15px",
                        fontWeight: "550"
                    }}
                />
            </Stack>
        </Box>
    );
}
