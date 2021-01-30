// IMPORTS /////////////////////////////////////////////////////////
// Import libraries -----------------------------------------------
import styled, {css} from "styled-components";

// STYLE ////////////////////////////////////////////////////////////
// Layout function ---------------------------------------------------
function layerSectionType(type, containerLength) {
    if (type === "column") {
        return `
            width: 100%;
            height: ${containerLength}px;
        `;
    }
    else if (type === "row" ) {
        return `
            height: 100%;
            width: ${containerLength}px;
        `;
    }
};

// COMPONENT ////////////////////////////////////////////////////////////
const LayerSection = styled("div")`${({type, containerLength})=>css`
    position: relative;
    box-sizing: border-box;
    ${layerSectionType(type, containerLength)}
`}`;

// EXPORTS //////////////////////////////////////////////////
export default LayerSection;

