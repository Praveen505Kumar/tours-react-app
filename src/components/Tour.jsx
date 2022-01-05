import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="mx-auto col-5 my-3 shadow bg-light">
      <img className="rounded mx-auto d-block w-100" src={image} alt={name} />
      <footer className="px-5 py-4">
        <div className="d-flex justify-content-between">
          <h4>{name}</h4>
          <h4 className="inline-block rounded-pill badge bg-dark text-light px-3 py-2">
            ${price}
          </h4>
        </div>
        <p className="lead fs-5">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => setReadMore(!readMore)}
            className="btn btn-light text-info fs-6 ms-2"
          >
            {readMore ? "Show Less" : "  Read More"}
          </button>
        </p>
        <button
          className="btn btn-outline-danger px-5 py-2"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};
export default Tour;
