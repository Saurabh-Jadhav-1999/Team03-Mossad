export const FiltersData = () => [
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
                defaultChecked: false,
                value: 'breakfast'
                // value: [{ 'Breakfast'}, { 'Dinner'}]
            }, {
                id: 3,
                filterName: 'Free Cancelation',
                defaultChecked: false
            },
            {
                id: 4,
                filterName: 'No Prepayment',
                defaultChecked: false,
                value: 'no_prepayment'
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
                filterName: '$75 to $300',
                defaultChecked: false
            },
            {
                id: 3,
                filterName: '$300 to $500',
                defaultChecked: false
            },
            {
                id: 4,
                filterName: '$500 to $1000',
                defaultChecked: false
            },
            {
                id: 5,
                filterName: 'Greater than $1000',
                defaultChecked: true
            }
        ]
    },
    {
        id: 103,
        filterType: 'Facilties',
        filterProperties: [
            {
                id: 1,
                filterName: 'Outdoor Sports',
                defaultChecked: false
            },
            {
                id: 2,
                filterName: 'Barbeque',
                defaultChecked: false
            }, {
                id: 3,
                filterName: 'Living Room',
                defaultChecked: false
            },
            {
                id: 4,
                filterName: 'Room Service',
                defaultChecked: false
            },
            {
                id: 5,
                filterName: 'Infinity Pool',
                defaultChecked: false
            },
            {
                id: 6,
                filterName: 'Spa',
                defaultChecked: false
            },
        ]
    },
]