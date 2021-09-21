import { Provider, LikeButton } from "@lyket/react";
import Media from "./Card/Media";
import Date from "./Card/Date";

const Card = props => {

  return (
    
    <div className="card">
      <h2>{props.nasa.title}</h2>
      <Date date={props.nasa.date} />
      <div className="media">
        <p>{props.nasa.explanation}</p>
        <Media
          url={props.nasa.url}
          title={props.nasa.title}
          type={props.nasa.media_type}
        />
      </div>
      <Provider 
      apiKey="acc0dbccce8e557db5ebbe6d605aaa"
      theme={{
          colors: {
            
            background: "#FFCC99",
            text: "#808080",
            primary: "#808080"
          }
        }}>
    <LikeButton
      
      namespace="nasa-like"
      id="nasa-like-button"
    />
  </Provider>
     
    </div>
  );
};

export default Card;