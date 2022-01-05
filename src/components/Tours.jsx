import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="mt-5">
        <h2 className="text-center">Ours Tours</h2>
        <div className="rounded under"></div>
      </div>
      <div className="text-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
