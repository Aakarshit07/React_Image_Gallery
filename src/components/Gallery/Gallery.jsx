import { useNavigate } from "react-router-dom";
import './Gallery.css'

function Gallery({imageUrl, id}) {
    const navigate = useNavigate()
    const redirectToPage = () => {
        navigate(`/${id}`)
    }
    
// Convert 'id' to an integer before passing it to the URL
// const redirectToPage = () => {
//     const idAsInteger = parseInt(id, 10);
//     navigate(`/image/${idAsInteger}`);
// }

    return (
        <div className="card-wrapper">
            <img src={imageUrl}  onClick={redirectToPage} alt="Image Broken" />
        </div>
    )

// function Gallery({ imageUrl, id }) {
//     const navigate = useNavigate();
        
//     const redirectToPage = () => {
//         const idAsInteger = parseInt(id, 10);
//         navigate(`/image/${idAsInteger}`);
//     }
    

        // return (
        //     <div className="card-wrapper">
        //         <img src={imageUrl} onClick={redirectToPage} alt="Image Broken" />
        //     </div>
        // );
    
}
export default Gallery;