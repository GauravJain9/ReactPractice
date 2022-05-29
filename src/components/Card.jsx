import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="top">
        {/* Here we can't use {props.key} since try and see it gives warning and doesn't displays also because key is a special property which is not even a part of the propos (console.log(prop)) or u can check in react dev tools als. So therefore if we want to display keys we should use our custom prop  */}
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
