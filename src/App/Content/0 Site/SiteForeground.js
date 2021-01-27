// IMPORTS ///////////////////////////////////////////////////////////////
// Import libraries -----------------------------------------------------
import {useContext, createContext, useState, useEffect} from "react";
import styled, {css, keyframes} from "styled-components";

// SETTINGS /////////////////////////////////////////////////////////////
// This value is used to determine how long the animation runs, as well
// as how long the state variable 'foregroundAnimate' is reset to 'false'
// after being set to 'true'.
const animationDuration = 5;

// CONTEXT ////////////////////////////////////////////////////////
const SiteForegroundContext = createContext();

function SiteForegroundContextProvider({children}) {

    const [foregroundAnimate, setForegroundAnimate] = useState(false);

    useEffect(()=> {
        if (foregroundAnimate) {
            setTimeout(()=> {
                setForegroundAnimate(false);
            }, animationDuration * 1000);
        };
    },[foregroundAnimate]);

    function triggerForegroundAnimate() {
        setForegroundAnimate(true);
    };

    return (
        <SiteForegroundContext.Provider 
            value={{
                foregroundAnimate,
                triggerForegroundAnimate,
            }}
        >
            {children}
        </SiteForegroundContext.Provider>
    );
};


// STYLE ////////////////////////////////////////////////////////////////
const animationSequence = keyframes`
    0% {
        opacity: 0;
    }

    40% {
        opacity: 1;
    }

    60% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

function animate(foregroundAnimate) {
    if (foregroundAnimate === false) {
        return `
            opacity: 0;
            pointer-events: none;
        `;
    }
    else {
        return css`
            animation: 
                ${animationSequence} 
                ${animationDuration}s 
                linear 
                forwards;
        `;
    };
};

const SiteForegroundDiv = styled("div")`${({foregroundAnimate})=>css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;

    border: 10px solid red;
    background-image: linear-gradient(black, red);
    ${animate(foregroundAnimate)}
`}`;

// COMPONENT ///////////////////////////////////////////////////////////
function SiteForeground(props) {

    // STATE /////////////////////////////////////////////////////
    // Context --------------------------------------------------
    const {foregroundAnimate} = useContext(SiteForegroundContext);

    // RENDER ////////////////////////////////////////////////////
    return (
        <SiteForegroundDiv foregroundAnimate={foregroundAnimate} />
    );
};

// EXPORTS ///////////////////////////////////////////////////////////
export default SiteForegroundContext;
export {SiteForeground, SiteForegroundContextProvider};