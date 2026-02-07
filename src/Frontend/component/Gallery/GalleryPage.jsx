// import { useEffect, useState } from "react";
// import ImageModal from "../Home/ImageModal";
// import { useLocation } from "react-router-dom";
// import { PROD_BACKEND } from "../../../URLPath";
// import useFetchGalleryData from "../utils/hooks/useFetchGalleryData";
// import img from "../../../assets/Image_not_available.png";
// export const GalleryPage = () => {
//   const [page, setPage] = useState(1);
//   const limit = 9; // Number of items per page
//   const { data, loading } = useFetchGalleryData(page, limit);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [displayedData, setDisplayedData] = useState([]);
//   const location = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   // useEffect(() => {
//   //   //console.log("Fetched data:", data);
//   //   setDisplayedData(data);
//   // }, [data]);

//   useEffect(() => {
//     if (page === 1) {
//       setDisplayedData(data); // first load
//     } else {
//       setDisplayedData((prev) => [...prev, ...data]); // append
//     }
//   }, [data]);

//   const openModal = (index) => {
//     setCurrentImage(`${PROD_BACKEND}${data[index].gallery_img}`);
//     // setCurrentImage(`${PROD_BACKEND}${data[index].gallery_img}`);
//     setCurrentIndex(index);
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };
//   const showPreviousImage = () => {
//     const newIndex = currentIndex > 0 ? currentIndex - 1 : data.length - 1;
//     setCurrentIndex(newIndex);
//     setCurrentImage(`${PROD_BACKEND}${data[newIndex].gallery_img}`);
//   };
//   const showNextImage = () => {
//     const newIndex = currentIndex < data.length - 1 ? currentIndex + 1 : 0;
//     setCurrentIndex(newIndex);
//     setCurrentImage(`${PROD_BACKEND}${data[newIndex].gallery_img}`);
//   };

//   const handleLoadMore = () => {
//     setPage((prev) => prev + 1);
//   };

//   return (
//     <>
//       <div className=" mb-10">
//         <div
//           className="flex flex-col py-6 justify-center items-center"
//           data-aos="fade-up"
//         >
//           <h1 className="text-[#ED1450] font-bold text-2xl">Our Gallery</h1>
//           <p className="w-16 border-b-2 border-[#ED1450]"></p>
//         </div>
//         <div className="grid lg:grid-cols-4 gap-2 md:grid-cols-2 grid-cols-1 ">
//           {displayedData.map((item, index) => {
//             let colSpanClass = "col-span-1";
//             if (
//               index === 0 ||
//               index === 4 ||
//               index === displayedData.length - 1
//             ) {
//               colSpanClass = "lg:col-span-2 col-span-1";
//             }
//             return (
//               <div key={index} className={`${colSpanClass} relative w-full`}>
//                 <img
//                   src={`${PROD_BACKEND}${item.gallery_img}`}
//                   onError={(e) => (e.target.src = img)}
//                   alt=""
//                   className="w-full h-48 object-cover cursor-pointer"
//                   style={{ height: "200px", width: "100%", objectFit: "cover" }}
//                   data-aos="zoom-in"
//                   onClick={() => openModal(index)}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         {data.length >= page * limit && (
//           <div className="flex justify-center p-5 mt-5">
//             <button
//               className="bg-[#ED1450] text-white p-3 rounded-full w-40"
//               onClick={handleLoadMore}
//               disabled={loading}
//             >
//               {loading ? "Loading..." : "Load More"}
//             </button>
//           </div>
//         )}
//       </div>
//       {isModalOpen && (
//         <ImageModal
//           isOpen={isModalOpen}
//           closeModal={closeModal}
//           imageSrc={currentImage}
//           showPreviousImage={showPreviousImage}
//           showNextImage={showNextImage}
//         />
//       )}
//     </>
//   );
// };


import { useEffect, useState } from "react";
import ImageModal from "../Home/ImageModal";
import { useLocation } from "react-router-dom";
import { PROD_BACKEND } from "../../../URLPath";
import useFetchGalleryData from "../utils/hooks/useFetchGalleryData";
import img from "../../../assets/Image_not_available.png";

export const GalleryPage = () => {

  const limit = 10; // ✅ Show 10 first
  const [page, setPage] = useState(1);
  const { data = [], loading } = useFetchGalleryData(page, limit);

  const [displayedData, setDisplayedData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const location = useLocation();

  /* ✅ Scroll to top when page changes */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  /* ✅ Append data instead of replacing */
  useEffect(() => {

    if (page === 1) {
      setDisplayedData(data);
    } else {
      setDisplayedData(prev => [...prev, ...data]);
    }

  }, [data]);

  /* ✅ Clean image URL helper */
  const getImageUrl = (path) =>
    `${PROD_BACKEND}/${path.replace(/^\/+/, "")}`;

  /* ================= MODAL ================= */

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const showPreviousImage = () => {
    const newIndex =
      currentIndex > 0
        ? currentIndex - 1
        : displayedData.length - 1;

    setCurrentIndex(newIndex);
  };

  const showNextImage = () => {
    const newIndex =
      currentIndex < displayedData.length - 1
        ? currentIndex + 1
        : 0;

    setCurrentIndex(newIndex);
  };

  /* ================= LOAD MORE ================= */

  const handleLoadMore = () => {
    if (!loading) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <>
      <div className="mb-10">

        {/* Title */}
        <div className="flex flex-col py-6 justify-center items-center">
          <h1 className="text-[#ED1450] font-bold text-2xl">
            Our Gallery
          </h1>
          <p className="w-16 border-b-2 border-[#ED1450]" />
        </div>

        {/* ================= GRID ================= */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 px-2">

          {displayedData.map((item, index) => (

            <div key={item.id} className="relative w-full">

              <img
                src={getImageUrl(item.gallery_img)}
                alt="gallery"
                onError={(e) => (e.target.src = img)}
                className="
                  w-full 
                  h-52 
                  object-cover 
                  cursor-pointer
                  rounded-xl
                  hover:scale-105
                  hover:shadow-lg
                  transition
                  duration-300
                "
                onClick={() => openModal(index)}
              />

            </div>

          ))}

        </div>

        {/* ================= LOAD MORE BUTTON ================= */}

        {data.length === limit && (

          <div className="flex justify-center p-5 mt-5">

            <button
              className="
                bg-[#ED1450] 
                text-white 
                p-3 
                rounded-full 
                w-40
                hover:scale-105
                transition
              "
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading ? "Loading..." : "Load More"}
            </button>

          </div>

        )}

      </div>

      {/* ================= MODAL ================= */}

      {isModalOpen && displayedData.length > 0 && (

        <ImageModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          imageSrc={getImageUrl(
            displayedData[currentIndex].gallery_img
          )}
          showPreviousImage={showPreviousImage}
          showNextImage={showNextImage}
        />

      )}

    </>
  );
};
