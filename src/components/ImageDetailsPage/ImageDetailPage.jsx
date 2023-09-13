import React, { useEffect, useState } from "react"
import "./ImageDetailPage.css"
import { useParams } from "react-router-dom"

const ImageDetailPage = () => {
    const [image, setImage] = useState({});
    const {id} = useParams();
    
        const getImage = async() =>{
            const resp= await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
            const {photo} = await resp.json();
            setImage(photo);
        }
    
    

    useEffect(()=>{
        getImage();
    }, [])

    return (
        <div className="image-page">
            <img src= {image?.url} alt=""/>
            <div>
                <h1>{image?.title}</h1>
                <p>
                    {image?.description}
                </p>
            </div>
        </div>
    )
}

export default ImageDetailPage;