import styled, {css} from "styled-components";

import positioning from "../../../Tools/Styling Functions/positioning";

const Image = styled("img")`${({spatial})=>css`
    ${positioning(spatial)}
    object-fit: contain;
`}`;

export default Image;