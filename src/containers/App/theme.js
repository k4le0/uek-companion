import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    bottomNavigation: {
        backgroundColor: '#E8E8E8',
        unselectedColor: '#303440',
        selectedColor: '#8D0126',
        height: 56,
        unselectedFontSize: 8,
        selectedFontSize: 10,
    },
});

export default muiTheme;