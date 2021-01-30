// IMPORTS /////////////////////////////////////////////////
// Import libraries -----------------------------------------------
import styled, {css} from "styled-components";

// STYLE /////////////////////////////////////////////////////////////
// Style Type function --------------------------------------------
function layerType(type) {
    if (type === "basic") {
        return `
            width: 100%;
            height: 100%;
        `;
    }
    else if (type === "column") {
        return `
            width: 100%;
            display: flex;
            flex-direction: column;
        `;
    }
};

const Layer = styled("div")`${({type})=>css`
    position: absolute;
    ${layerType(type)}
`}`;

export default Layer;