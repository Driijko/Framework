// IMPORTS //////////////////////////////////////////////////
// Import components ---------------------------------------
import Image from "../Image";

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
function SlideShow0({width, spatial, currentImageIndex}) {
    return (
        <Image
            width={width}
            spatial={spatial}
            src={images[currentImageIndex]}
            alt={alts[currentImageIndex]}
        />
    );
};

export default SlideShow0;