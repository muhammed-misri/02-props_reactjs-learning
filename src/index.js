import React from "react";
import ReactDOM from "react-dom";

// we will create an card structure
// then we pass many data to this card
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

// we now already call the card component .. and after that we will pass our properties
// our cards data from here came... we have 3 cards data
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    {/* 
    <Card name = "Beyonce"/> 
    our card compoment have one proprietary .. (name) ... that sets to equall .. (Beyonce)
    And we can get hold of it by adding a name to the inputs to access those things that are sent over. 
    And it's customary to call this props.  ...
    in card structure we will pass props to access to data 
    from render method to the cards ... now from render ... then from another files
    like uppp ....... == > function Card(props) 
    */}

    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />

    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+987 654 321"
      email="jack@nowhere.com"
    />

    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+918 372 574"
      email="gmail@chucknorris.com"
    />
  </div>,
  document.getElementById("root")
);
