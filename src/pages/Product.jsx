
import { NavLink } from "react-router-dom";
import FormatePrice from "../component/Layout/FormatePrice";
export const Product = ({ id, name, image, price, category }) => {
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure className="card-img">
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
          <h3>{name}</h3>
          <p className="card-data--price">
            
            <FormatePrice price={price} />
          </p>
        </div>
      </div>
    </NavLink>
  );
};
