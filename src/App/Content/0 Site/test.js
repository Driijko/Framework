// IMPORTS ///////////////////////////////////////////////////////
// Import libraries ----------------------------------------------
import {useState} from "react";
import styled, {css} from "styled-components";

// Import context / providers ----------------------------------
import SiteForegroundContext from "./SiteForeground";

// STYLE /////////////////////////////////////////////////////////
const SiteForegroundAnimationTrigger = styled("button")`${({color})=>css`
    position: absolute;
    top: 100px;
    font-size: 50px;
    color: ${color};
`}`;

function Test(props) {
    const [color, setColor] = useState("purple");

    function changeColor() {
        if (color === "purple") {
            setColor("red");
        }
        else {
            setColor("purple");
        };
    };

    return (
        <SiteForegroundAnimationTrigger color={color} onClick={changeColor}>
            TEST2
        </SiteForegroundAnimationTrigger>
    );  
};

export default Test;