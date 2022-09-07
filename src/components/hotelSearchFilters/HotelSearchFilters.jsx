import { Box, Checkbox, FormControlLabel, Typography, TextField, Stack } from "@mui/material"
import { SearchOutlined } from "@material-ui/icons"
import styles from "./HotelSearchFilters.module.css"
import InputAdornment from '@mui/material/InputAdornment';
import InputSlider from './PriceRangeFilter'

export const HotelSearchFilters = () => {
    const getCheckedFilterProperties = event => {
        if (event.target.checked) {
            console.log(event.target.value, 'is checked')
        }
    }

    const filtersData = [
        {
            id: 101,
            filterType: 'Popular Hotels',
            filterProperties: [
                {
                    id: 1,
                    filterName: 'Hotels',
                    defaultChecked: true
                },
                {
                    id: 2,
                    filterName: 'Breakfast and Dinner',
                    defaultChecked: false
                }, {
                    id: 3,
                    filterName: 'Free Cancelation',
                    defaultChecked: false
                },
                {
                    id: 4,
                    filterName: 'No Prepayement',
                    defaultChecked: false
                }]
        },
        {
            id: 102,
            filterType: 'Your Budget',
            filterProperties: [
                {
                    id: 1,
                    filterName: 'Less than $75',
                    defaultChecked: false
                },
                {
                    id: 2,
                    filterName: '$75 to 300',
                    defaultChecked: false
                },
                {
                    id: 3,
                    filterName: '$300 to 500',
                    defaultChecked: false
                },
                {
                    id: 4,
                    filterName: '$500 to 1000',
                    defaultChecked: false
                },
                {
                    id: 5,
                    filterName: 'Greater than $1000',
                    defaultChecked: true
                }
            ]
        }
    ]

    return (
        <Box className={styles.filterComponentsContainer}>
            <Box className={styles.searchPropertyContainer}>
                <Box className="searchPropertyHeaderContainer">
                    <Typography className={styles.searchPropertyHeader}>
                        Price Range
                    </Typography>
                    <InputSlider />
                </Box>
                <Typography className={styles.searchPropertyHeader}>
                    Search Property
                </Typography>
                <Box>
                    <TextField
                        id="outlined-basic" label="Search Property" variant="outlined" size="small"
                        sx={{
                            border: "1px",
                            borderRadius: "80px",
                            "& input": {
                                textAlign: "center"
                            },
                            paddingRight: "20px"
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <SearchOutlined />
                                </InputAdornment>
                            ),
                        }}></TextField>
                </Box>
            </Box>
            <Box className={styles.searchFiltersContainer}>
                {filtersData.map((filters) => {
                    return (
                        <Box key={filters.id}>
                            <Stack key={filters.id} className={styles.filterPopularHotels}>
                                <Typography className={styles.searchPropertyHeader}>
                                    {filters.filterType}
                                </Typography>

                                {filters.filterProperties.map((filter) => {
                                    return (
                                        <FormControlLabel key={filter.id} label={filter.filterName} control={<Checkbox value={filter.filterName} defaultChecked={filter.defaultChecked ? true : false} onChange={getCheckedFilterProperties} sx={{ fontSize: '14px' }} />} />
                                    )
                                })}
                            </Stack>
                            <hr style={{ marginRight: '20px', width: '80%', color: '#D1D4D9' }} />
                        </Box>
                    )
                })}
            </Box >
        </Box>
    )
}
