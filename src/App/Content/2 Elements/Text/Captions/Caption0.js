// IMPORTS ////////////////////////////////////////////////////////////
// Import libraries -------------------------------------------------
import styled, {css} from "styled-components";

// Import helpers ---------------------------------------------------
import positioning from "../../../../Tools/Styling Functions/positioning";

// COMPONENT ///////////////////////////////////////////////////////
const Caption0 = styled("figcaption")`${({width, spatial})=> css`
    ${positioning(spatial)}
    font-size: ${width/17}px;
    font-style: italic;
    text-align: center;
`}`;

// EXPORTS ///////////////////////////////////////////////////////////
export default Caption0;