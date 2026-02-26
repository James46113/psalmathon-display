let currentPsalm = 0;

const psalmLengths = [7, 12, 8, 9, 13, 10, 18, 9, 20, 20, 8, 9, 6, 11, 7, 12, 16, 51, 15, 9, 13, 32, 6, 10, 21, 12, 16, 10, 10, 13, 27, 12, 21, 22, 28, 12, 41, 22, 15, 21, 13, 15, 6, 26, 18, 11, 9, 13, 20, 23, 19, 10, 8, 7, 25, 13, 12, 10, 17, 12, 8, 12, 12, 10, 14, 18, 7, 35, 37, 6, 22, 19, 27, 24, 12, 12, 20, 73, 14, 19, 17, 8, 18, 13, 13, 17, 7, 18, 50, 17, 16, 14, 6, 23, 11, 13, 12, 10, 9, 4, 11, 28, 22, 35, 44, 46, 43, 13, 30, 7, 10, 10, 8, 8, 18, 16, 2, 29, 176, 6, 8, 9, 4, 7, 5, 7, 6, 7, 8, 8, 4, 19, 4, 4, 21, 27, 9, 8, 24, 13, 11, 9, 12, 15, 21, 10, 20, 13, 9, 6]
const sungVerses = (current) => {
    return psalmLengths.slice(0, current).reduce((runningSum, psalmVerses) => runningSum + psalmVerses, 0) + 2 * current;
}
const totalVerses = 2808;

console.log(psalmLengths.reduce((runningSum, psalmVerses) => runningSum + psalmVerses, 0) + 2 * 150)

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') currentPsalm++;
    if (event.key === 'ArrowLeft') currentPsalm--;
    if (currentPsalm > 150) {
        currentPsalm = 151;
        document.getElementById('psalm').innerText = `All Psalms Completed`;
        document.getElementById('percentage').innerText = `100%`;
    } else if (currentPsalm < 1) {
        currentPsalm = 0;
        document.getElementById('psalm').innerText = `Awaiting Start`;
        document.getElementById('percentage').innerText = `0.0%`;
    } else {
        document.getElementById('psalm').innerText = `Psalm ${currentPsalm}/150`;
        document.getElementById('percentage').innerText = `${(sungVerses(currentPsalm - 1) / totalVerses * 100).toFixed(1)}%`;
    }
});