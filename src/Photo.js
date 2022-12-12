import React from "react";
import { saveAs } from "file-saver";
import { HiDownload } from "react-icons/hi";

const Photo = ({
  urls: { regular, full },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  const downloadImage = (url, name) => {
    saveAs(url, name.replace(/ /, "_"));
  };

  return (
    <article className="photo">
      <img src={regular} alt={alt_description} />
      <div className="photo-info">
        <div>
          <h4>{name}</h4>
          <p>{likes} ❤️</p>
        </div>
        <button
          className="btn-download"
          onClick={() => downloadImage(full, name)}
        >
          <HiDownload />
        </button>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className="user-img" />
        </a>
      </div>
    </article>
  );
};

export default Photo;
