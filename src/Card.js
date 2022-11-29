const Card = ({ object }) => {
  return (
    <div className="cards">
      {/* {objects?.map((object) => ( */}
      <div className="card" key={object.id}>
        <h2>{object.brand}</h2>
        <h3>{object.title}</h3>
        <img src={object.images[1]} alt="" />
        <p>{object.description}</p>
        <div>{object.price} $</div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Card;
