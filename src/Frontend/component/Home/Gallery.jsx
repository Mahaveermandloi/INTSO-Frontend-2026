

import { useState } from "react";
import Masonry from "react-masonry-css";
import ImageModal from "./ImageModal";
import useFetchData from "../utils/hooks/useFetchData";
import { PROD_BACKEND } from "../../../URLPath";
import { Link } from "react-router-dom";

export const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data7: galleryData = [], loading } = useFetchData();

  console.log("Gallery Data:", galleryData); // Debugging log


  // ✅ Clean URL helper (prevents double slash bugs)
  const getImageUrl = (path) =>
    `${PROD_BACKEND}/${path.replace(/^\/+/, "")}`;

  const openModal = (index) => {
    setCurrentImage(getImageUrl(galleryData[index].gallery_img));
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const showPreviousImage = () => {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : galleryData.length - 1;

    setCurrentIndex(newIndex);
    setCurrentImage(getImageUrl(galleryData[newIndex].gallery_img));
  };

  const showNextImage = () => {
    const newIndex =
      currentIndex < galleryData.length - 1 ? currentIndex + 1 : 0;

    setCurrentIndex(newIndex);
    setCurrentImage(getImageUrl(galleryData[newIndex].gallery_img));
  };

  // ✅ Responsive masonry columns
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
  };

  if (loading) {
    return (
      <div className="flex justify-center py-10 text-lg font-semibold">
        Loading Gallery...
      </div>
    );
  }

  return (
    <>
      <div>
        {/* Title */}
        <div
          className="flex flex-col py-6 justify-center items-center"
          data-aos="fade-up"
        >
          <h1 className="text-[#ED1450] font-bold text-2xl">
            Our Gallery
          </h1>
          <p className="w-16 border-b-2 border-[#ED1450]" />
        </div>

        {/* ✅ Masonry Layout */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-3 px-2"
          columnClassName="space-y-3"
        >
          {galleryData.map((item, index) => (
            <img
              key={index}
              src={getImageUrl(item.gallery_img)}
              alt="gallery"
              className="
                w-full 
                cursor-pointer 
                hover:scale-105 
                hover:shadow-xl
                transition 
                duration-300
              "
              data-aos="zoom-in"
              onClick={() => openModal(index)}
            />
          ))}
        </Masonry>

        {/* View More */}
        <Link to="/gallery">
          <div className="flex justify-center p-5">
            <button className="bg-[#ED1450] text-white p-3  w-40 hover:scale-105 transition">
              View More
            </button>
          </div>
        </Link>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          imageSrc={currentImage}
          showPreviousImage={showPreviousImage}
          showNextImage={showNextImage}
        />
      )}
    </>
  );
};
