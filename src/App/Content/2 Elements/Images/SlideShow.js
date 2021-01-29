// IMPORTS ////////////////////////////////////////////////////////////
// Import libraries ---------------------------------------------------
import {useState, useEffect, Children, cloneElement} from "react";

// Import Slide shows -----------------------------------------------
import SlideShow0 from "./SlideShows/SlideShow0";

const slideShows = [
    <SlideShow0 />,
];

// COMPONENT /////////////////////////////////////////////////////////
function SlideShow({
    width, spatial, duration, numOfImages, number, captionSpatial
}) {

    // CURRENT IMAGE INDEX //////////////////////////////////////////
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageFadePhase, setImageFadePhase] = useState(null);

    useEffect(()=> {
        const timerId = setTimeout(()=> {

            // We either update the index by one or set it back to zero.
            if (currentImageIndex + 1 === numOfImages) {
                setCurrentImageIndex(0);
            }
            else {
                setCurrentImageIndex(currentImageIndex + 1);
            }

            // We want to trigger the fade-in of the image with this:
            setImageFadePhase("enter");

            // Then we set a self-clearing timer to give the image some
            // notice before it needs to fade out.
            const timerId2 = setTimeout(()=> {
                setImageFadePhase("exit");
                clearTimeout(timerId2);
            }, (duration - 2) * 1000);

        }, duration * 1000);
        return ()=> clearTimeout(timerId);
    },[currentImageIndex]);

    // RETURN MODIFIED COMPONENT ///////////////////////////////////////
    console.log(imageFadePhase);

    return cloneElement(slideShows[number], {
        width: width,
        spatial: spatial,
        currentImageIndex: currentImageIndex,
        captionSpatial: captionSpatial,
        imageFadePhase: imageFadePhase,
    });
};

// EXPORTS /////////////////////////////////////////////////////////
export default SlideShow;