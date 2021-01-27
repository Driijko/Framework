// IMPORTS ///////////////////////////////////////////////////////
// Import libraries ----------------------------------------------
import {useContext} from "react";
import styled from "styled-components";

// Import context / providers ----------------------------------
import SiteForegroundContext from "../Content/0 Site/SiteForeground";

// STYLE /////////////////////////////////////////////////////////
const SiteForegroundAnimationTriggerButton = styled("button")`
    position: absolute;
    font-size: 50px;
`;

// COMPONENT /////////////////////////////////////////////////////////
function SiteForegroundAnimationTrigger(props) {

    // State -----------------------------------------------------------
    const {triggerForegroundAnimate} = useContext(SiteForegroundContext);

    // Render ----------------------------------------------------------
    return (
        <SiteForegroundAnimationTriggerButton 
            onClick={triggerForegroundAnimate}
        >
            TEST
        </SiteForegroundAnimationTriggerButton>
    );  
};

// EXPORTS ////////////////////////////////////////////////////////////
export default SiteForegroundAnimationTrigger;