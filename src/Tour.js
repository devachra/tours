import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, deletetour }) => {
  const [readMore, setReadMore] = useState(false);

  const removeTour = () => {
    return deletetour(id);
  };
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name} </h4>
          <h4 className="tour-price">${price} </h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 150)}...`}{" "}
          <button onClick={() => setReadMore((prev) => !prev)}>
            {readMore ? "show less" : "read more"}{" "}
          </button>{" "}
        </p>
        <button className="delete-btn" onClick={removeTour}>
          Not Inerested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
