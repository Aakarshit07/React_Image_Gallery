import { useNavigate } from "react-router-dom";
import './Gallery.css'
function Gallery({imageUrl, id}) {
    const navigate = useNavigate()
    const redirectToPage = () => {
        navigate(`/${id}`)
    }

    return (
        <div className="card-wrapper">
            <img src={imageUrl}  onClick={redirectToPage} alt="Image Broken" />
        </div>
    )
}
export default Gallery;