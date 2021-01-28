// IMPORTS //////////////////////////////////////////////////////////
// Import components ------------------------------------------------
import Layer from "../Layer";

import TextHeader from "../../2 Elements/Text/TextHeader";
import Image from "../../2 Elements/Images/Image";

// Import assets ----------------------------------------------------
import image from "../../3 Assets/visual/images/image.jpg";

// COMPONENT /////////////////////////////////////////////////////////
function Page0Layer1({width}) {
    return (
        <Layer>
            <TextHeader 
                width={width}
                level={1}
                spatial={[0, 0, 20, 4]}
            >
                <h1>HEADER 1</h1>
            </TextHeader>
            <TextHeader 
                width={width}
                level={2}
                spatial={[0, 4, 20, 4]}
            >
                <h2>HEADER 2</h2>
            </TextHeader>
            <TextHeader 
                width={width}
                level={3}
                spatial={[0, 8, 20, 3]}
            >
                <h3>HEADER 3</h3>
            </TextHeader>
            <TextHeader 
                width={width}
                level={4}
                spatial={[0, 11, 20, 3]}
            >
                <h4>HEADER 4</h4>
            </TextHeader>
            <TextHeader 
                width={width}
                level={5}
                spatial={[0, 14, 20, 3]}
            >
                <h5>HEADER 5</h5>
            </TextHeader>
            <TextHeader 
                width={width}
                level={6}
                spatial={[0, 17, 20, 2]}
            >
                <h6>HEADER 6</h6>
            </TextHeader >
            <Image 
                src={image}
                spatial={[0, 20, 20, 9]}
                width={width}
            /> 
        </Layer>
    );
};

// EXPORTS //////////////////////////////////////////////////////////////
export default Page0Layer1;