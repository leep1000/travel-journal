import React from "react";
import mapsIcon from "../images/google-maps-icon.png";

function Card(props) {
  const isLastCard = props.item.id === props.data.length;
  return (
    <section className="card--container">
      <div className="card--content">
        <img
          className="card--image"
          src={props.item.imageUrl}
          alt={`${props.item.location}`}
        />
        <div className="card--items">
          <div className="card--location--items">
            <img src={mapsIcon} />
            <h4 className="card--location--name">
              {props.item.location.toUpperCase()}
            </h4>
            <h4 className="card--google--maps">
              <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            </h4>
          </div>
          <h2 className="card--title">{props.item.title}</h2>
          <h3 className="card--dates">{`${props.item.startDate} - ${props.item.endDate}`}</h3>
          <p className="card--description">{props.item.description}</p>
        </div>
      </div>
      {!isLastCard && <hr className="card--divider" />}
    </section>
  );
}

export default Card;
