import colors from 'yoctocolors';

export default textoPintado => {
    console.log(colors.cyan('Hola!'));
    console.log(colors.magenta(`Welcome to the ${colors.green('yoctocolors')} package!`));
    console.log(colors.bgYellow(colors.black('This is a warning message!')));
    console.log(colors.bgRed(colors.white('Error message')));
    console.log(colors.greenBright(colors.bgWhite('Este fue el TP2 de Jaz y Dai, I hope you enjoyed it!')));
}