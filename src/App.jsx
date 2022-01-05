import React, { useState } from "react";
import Tours from "./components/Tours";
import "./styles.css";
import { data } from "./data";

//const url = "https://course-api.com/react-tours-project";

export default function App() {
  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return (
      <main className="my-5 ms-5">
        <div className="mb-4 ps-5ß">
          <h2 className="fw-bold mb-3">No Tours left</h2>
          <button className="btn btn-primary" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}
