// IMPORTS ////////////////////////////////////////////////////////////
// Import libraries ---------------------------------------------------
import {useState} from "react";
import styled, {css, attrs} from "styled-components";

// Import custom hooks -------------------------------------------------
import useMousePosition from "../../Tools/useMousePosition";

// STYLE ////////////////////////////////////////////////////////
const SiteBackgroundDiv = styled("div")`${({mousePos})=>css`
    position: absolute;
    width: 100vw;
    height: 100vh;
    transition-timing-function: linear;
    transition-duration: 2s;
    background-color: rgb(${255 * (mousePos.x / window.innerWidth)}, 0, 0);

    box-sizing: border-box;
    border: 50px solid magenta;
`}`;

// COMPONENT ///////////////////////////////////////////////////////
function SiteBackground() {

    const mousePos = useMousePosition();

    // RENDER ////////////////////////////////////////////////////
    return (
        <SiteBackgroundDiv mousePos={mousePos} />
    );
};

export default SiteBackground;