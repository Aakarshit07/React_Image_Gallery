import { useEffect, useState } from "react";
import Gallery from "../Gallery/Gallery";
import './Imagegallery.css'

function ImageGallery() {
    const [imageList, setImageList] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    const downloadGallery = async() => {

        const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20");
        // console.log(response.data)
        const {photos}  = await response.json();
        setImageList(photos)
        console.log(photos);
        setIsLoading(false);
    }

    useEffect(() => {
       downloadGallery();
    }, []);



    return (
        <div className="gallery-wrapper">
            {(isloading) ? "Loading.." : 
                imageList.map( (e, i) => <Gallery key={i} imageUrl={e.url} />)
            }
        </div>
    )
}

export default ImageGallery;