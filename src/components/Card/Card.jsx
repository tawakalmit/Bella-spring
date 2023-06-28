import React from "react";

const Card = (props) => {
  const { image, title, description } = props;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="w-full h-60 object-contain" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.substring(0, 60)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
