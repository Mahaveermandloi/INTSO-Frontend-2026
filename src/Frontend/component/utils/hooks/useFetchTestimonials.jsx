import { useState, useEffect } from "react";
import { API_KEY,  } from "../constants";

import { PROD_BACKEND } from "../../../../URLPath";
const useFetchTestimonials = (page, limit) => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${PROD_BACKEND}/api/v1/testiMonial/get-testimonial-by-page?page=${page}&limit=${limit}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              api_key: API_KEY,
            },
          }
        );
        const jsonData = await response.json();

        if (page === 1) {
          setTestimonialData(jsonData.data);
        } else {
          setTestimonialData((prevData) => [...prevData, ...jsonData.data]);
        }
      } catch (e) {
        //console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, limit]);
  return { testimonialData, loading };
};
export default useFetchTestimonials;
