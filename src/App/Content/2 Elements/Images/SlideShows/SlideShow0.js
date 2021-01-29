// IMPORTS //////////////////////////////////////////////////
// Import components ---------------------------------------
import Image from "../Image";
import SlideShowImage from "../SlideShowImage";
import Caption0 from "../../Text/Captions/Caption0";

// Import images --------------------------------------------
import image from "../../../3 Assets/visual/images/image.jpg";
import image1 from "../../../3 Assets/visual/images/image1.jpg";
import image2 from "../../../3 Assets/visual/images/image2.jpg";
const images = [image, image1, image2];

const alts = [
    "Piet Mondrian painting",
    "Agnes Martin painting",
    "Frank Stella painting",
];

// COMPONENT /////////////////////////////////////////////////////////
function SlideShow0({
    width, spatial, currentImageIndex, captionSpatial, imageFadePhase
}) {
    return (
        <figure>
            {/* <Image
                spatial={spatial}
                src={images[currentImageIndex]}
                alt={alts[currentImageIndex]}
            /> */}
            <SlideShowImage
                spatial={spatial}
                src={images[currentImageIndex]}
                alt={alts[currentImageIndex]}
                imageFadePhase={imageFadePhase}
            />
            <Caption0
                width={width}
                spatial={captionSpatial}
            >
                {alts[currentImageIndex]}
            </Caption0>
        </figure>
    );
};

export default SlideShow0;