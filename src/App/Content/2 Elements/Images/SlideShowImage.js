// IMPORTS //////////////////////////////////////////////////////
// Import libraries -----------------------------------------------
import styled, {css, keyframes} from "styled-components";

// Import Components --------------------------------------------------
import Image from "./Image";

// ANIMATION ///////////////////////////////////////////////////////
// Animation Sequence ---------------------------------------------
const animationSequence = {
    enter: keyframes`
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    `,
    exit: keyframes`
        0%: {opacity: 1}
        10%: {opacity: 0}
    `,
};

// COMPONENT //////////////////////////////////////////////////////
const SlideShowImage = styled(Image)`${({imageFadePhase})=>css`
    animation: ${animationSequence[imageFadePhase]} 1s linear forwards;
`}`;

export default SlideShowImage;


