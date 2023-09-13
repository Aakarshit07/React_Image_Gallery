import { Route, Routes } from "react-router-dom";
import ImageGallery from "../components/Image-gallery.jsx/Imagegallery";
import ImageDetailPage from "../components/ImageDetailsPage/ImageDetailPage.jsx";

function CustomRoute() {
    return (
        <Routes>
            <Route path="/" element={<ImageGallery />} />
            <Route path="/:id" element={<ImageDetailPage />} />
            {/* <Route path="/image/:id" element={<ImageDetailPage />} /> */}

        </Routes>
    )
}

export default CustomRoute; 