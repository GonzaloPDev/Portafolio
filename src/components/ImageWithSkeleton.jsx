import React, { useState } from "react";

export default function ImageWithSkeleton({ src, alt, className, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`image-skeleton-wrapper ${className || ""}`} onClick={onClick}>
      {!loaded && <div className="image-skeleton" />}
      <img
        src={src}
        alt={alt}
        className={`image-skeleton-img ${loaded ? "loaded" : ""}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  );
}