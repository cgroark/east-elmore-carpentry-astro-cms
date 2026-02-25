import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const image = images[index];

  return (
    <div className="carousel">
    <div className="carousel-image">
      <a
        href={image.full_image || image.thumbnail_image}
        target="_blank"
        rel="noopener noreferrer"
        style={{ cursor: "pointer" }}
      >
        <img
          src={image.thumbnail_image || image.full_image}
          alt={image.caption || ""}
        />
      </a>
      {image.caption && (
        <p className="image-caption">{image.caption}</p>
      )}
    </div>

    {images.length > 1 && (
      <>
        <button
          className="carousel-control prev"
          onClick={prev}
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          className="carousel-control next"
          onClick={next}
          aria-label="Next image"
        >
          ›
        </button>
      </>
    )}
  </div>

  );
}
