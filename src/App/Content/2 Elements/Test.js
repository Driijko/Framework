import styled, {css} from "styled-components";

import InteractiveElement from "./InteractiveElement";

function transitions(interactivity) {
    if (interactivity === "able") {
        return `color: blue;`;
    }
    else if (interactivity === "highlight") {
        return `color: purple;`;
    }
    else if (interactivity === "selected") {
        return `color: red;`;
    };
};

const TestDiv = styled("div")`${({interactivity})=>css`
    position: absolute;
    font-size: 50px;
    background-color: white;
    ${transitions(interactivity)}
`}`;

function Test() {
    return (
        <InteractiveElement>
            <TestDiv>TEST</TestDiv>
        </InteractiveElement>
    );
};

export default Test;