// IMPORTS ///////////////////////////////////////////////////////////////
// Import libraries -----------------------------------------------------
import {useContext, createContext, useState, useEffect} from "react";
import styled, {css, keyframes} from "styled-components";

// SETTINGS /////////////////////////////////////////////////////////////
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
    },[foregroundAnimate])

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
        `;
    }
    else {
        return css`
            animation: ${animationSequence} ${animationDuration}s linear forwards;
        `;
    };
};

const SiteForegroundDiv = styled("div")`${({foregroundAnimate})=>css`
    position: absolute;
    width: 100vw;
    height: 100vh;
    pointer-events: none;

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