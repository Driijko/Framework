// IMPORTS /////////////////////////////////////////////////////////
// Import libraries -----------------------------------------------
import styled, {css} from "styled-components";

// STYLE ////////////////////////////////////////////////////////////
// Layout function ---------------------------------------------------
function layerSectionType(type) {
    if (type === "column") {
        return `
            width: 100%;
            height: 100vh;
        `;
    }
};

// COMPONENT ////////////////////////////////////////////////////////////
const LayerSection = styled("div")`${({type})=>css`
    background-color: hsla(0, 100%, 50%, 0.5);
    box-sizing: border-box;
    ${layerSectionType(type)}
`}`;

// EXPORTS //////////////////////////////////////////////////
export default LayerSection;

