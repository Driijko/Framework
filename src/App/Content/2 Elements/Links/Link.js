// IMPORTS ///////////////////////////////////////////////////////
// Import components ----------------------------------------------
import InteractiveElement from "../InteractiveElement";

// Link Types ----------------------------------------------------
import SectionLink from "./LinkTypes/SectionLink";

// Link Styles ----------------------------------------------------
import LinkStyle0 from "./LinkStyles/LinkStyle0";

// COMPONENT //////////////////////////////////////////////////////
function Link({
    linkType, linkStyle, spatial, width, focus, enterSelect, children
}) {

    // STYLE //////////////////////////////////////////////////////////
    let linkStyleElement;

    if (linkStyle.number === 0) {
        linkStyleElement = (
            <LinkStyle0
                width={width}
                spatial={spatial}
                colors={linkStyle.colors}
            >{children}</LinkStyle0>
        );
    }

    // TYPE ////////////////////////////////////////////////////
    let linkTypeElement;

    if (linkType.type === "section") {
        linkTypeElement = (
            <SectionLink 
                triggerExit={linkType.triggerExit}
                linkTo={linkType.linkTo}
            />
        );
    };

    // RENDER //////////////////////////////////////////////////////////
    return (
        <InteractiveElement
            focus={focus}
            enterSelect={enterSelect}
        >
            {linkStyleElement}
            {linkTypeElement}
        </InteractiveElement>
    );
};

// EXPORTS ////////////////////////////////////////////////////////
export default Link;