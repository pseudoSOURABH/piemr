import React from "react";

export const Newsitem = (props) => {
  return (
    <div>
      <div className="card">
        <img
          src={
            props.imageurl
              ? props.imageurl
              : "https://www.kitco.com/news/2019-03-15/images/empire_state-NYSE.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.description}...</p>
          <a
            rel="noreferrer"
            href={props.newsurl}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
