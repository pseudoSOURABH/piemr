import React from "react";
import './News.css';

const NewsItem=(props)=>{
  
    let { title, description, imageurl, newsurl } = props;
    return (
      <div>
        <div className="card" style={{ width: "18rem"}}>
          <img
            src={
              imageurl
                ? imageurl
                : "https://www.kitco.com/news/2019-03-15/images/empire_state-NYSE.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text" >{description}...</p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
