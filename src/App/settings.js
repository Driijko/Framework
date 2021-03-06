// LAYOUT //////////////////////////////////////////////////////////////////////
// Aspect Ratio ---------------------------------------------------------------
const ratioWidth = 2;
const ratioHeight = 3;
const ratio = ratioWidth / ratioHeight;

// Gap -----------------------------------------------------------------------
// Size of gap when two layer containers.
// Setting to 1 takes up all available extra space.
const gapRatio = 5;

// Element Grid ---------------------------------------------------------------
// Determines numbers of unit for a given dimension of a layer.
// Exp: 2 x 3 aspect ratio 
// gridMultipler = 10
// result: 20 x 30 grid
const gridMultiplier = 10;

// RESIZE DELAY ///////////////////////////////////////////////////////////////////////
// Delay time after user resizes window before page refresh.
const delay = 2000;

// PAGE TRANSITION DURATION ///////////////////////////////////////////////
// The time, in seconds, it takes to fade out one page and fade in another.
// This number is used by the Page component as well as the SiteForeground
// component.
const pageTransitionDuration = 4;

/////////////////////////////////////////////////////////////////////////////////

const hor = calcUnits(ratioWidth, gridMultiplier);
const ver = calcUnits(ratioHeight, gridMultiplier);

export {
    ratioWidth, ratioHeight, ratio, gapRatio,
    delay, hor, ver, pageTransitionDuration,
};

function calcUnits(dimension, gridMultiplier) {
    const result = [];
    const unitNum = dimension * gridMultiplier;
    const unitSize = 100 / unitNum;
    for (let i = 0 ; i <= unitNum ; i++) {
        let unit = unitSize * i;
        if (Number.isInteger(unit)) {
            result[i] = unit;
        }
        else {
            result[i] = Math.round((unit + Number.EPSILON) * 100) / 100;
        }
    }
    return result;
}