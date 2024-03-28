const colors: string[] = [
    "rgb(245, 255, 162)",
    "rgb(170, 255, 162)",
    "rgb(255, 139, 139)",
    "rgb(159, 209, 255)"
];

const ColorChoice = (value: number): string => {
    let colorWinner: string;
    switch (value.toString()) {
        case '100':
            colorWinner = colors[0];
            break;
        case '200':
            colorWinner = colors[1];
            break;
        case '300':
            colorWinner = colors[2];
            break;
        default:
            colorWinner = colors[3];
    }
    return colorWinner;
};

export default ColorChoice;
