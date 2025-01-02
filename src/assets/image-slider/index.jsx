import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [image, setImages] = useState([]);
  const [slider, setSlider] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages() {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setImages(data);
      } else {
        setErrorMessage("Failed to fetch images");
      }
    } catch (e) {
      setErrorMessage(e.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url) fetchImages();
  }, [url, limit, page]);

  if (loading) {
    return <div>Loading please wait....</div>;
  }
  if (errorMessage) {
    return <div>Error occurred:{errorMessage}</div>;
  }

  function handlePrevious() {
    setSlider((prev) => (prev === 0 ? image.length - 1 : prev - 1));
  }
  function handleNext() {
    setSlider((next) => (next === image.length - 1 ? 0 : next + 1));
  }

  return (
    <div className="relative items-center">
      {image.length > 0 && (
        <div>
          <BsArrowLeftCircleFill
            size={40}
            className="absolute top-1/2 left-2.5 fill-slate-100"
            onClick={handlePrevious}
          />
          <img
            src={image[slider]?.download_url}
            alt={`image- ${slider + 1}`}
            className="w-full top-1/2 left-2.5"
            color="white"
          />
          <BsArrowRightCircleFill
            size={40}
            className="absolute top-1/2 fill-slate-100 right-2.5"
            onClick={handleNext}
          />
          <div
            className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 -translate-y-1/2`}
          >
            {image && image.length
              ? image.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSlider(index)}
                    className="w-5 h-5 rounded-full m-1.5 border-none cursor-pointer drop-shadow-lg "
                    style={{
                      background: slider === index ? "grey" : "white",
                    }}
                  ></button>
                ))
              : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageSlider;
