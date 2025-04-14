import React from 'react';
import FormatePrice from '../component/Layout/FormatePrice';
import { NavLink } from 'react-router-dom';
import "../component/Style/listview.css";

const ListView = ({ products }) => {
  return (
    <div className="listview-section">
      <div className="listview-container">
        {
          products.map((curElem) => {
            const { id, name, image, price, description } = curElem;
            return (
              <div className="listview-card" key={id}>
                <figure className="listview-card-image">
                  <img src={image} alt={name} className="listview-card-img" />
                </figure>
                <div className="listview-card-data">
                  <h3 className="listview-card-title">{name}</h3>
                  <p className="listview-card-data--price">
                    <FormatePrice price={price} />
                  </p>
                  <p className="listview-card-description">{description.slice(0, 90)}.....</p>
                  <NavLink to={`/singleproduct/${id}`} className="listview-card-btn">
                    <button className="listview-btn"> Read More </button>
                  </NavLink>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default ListView;



