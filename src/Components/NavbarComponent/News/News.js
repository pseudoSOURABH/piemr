import React from 'react';
import { Newsitem } from './Newsitem';
import {Spinner} from './Spinner';
import { useState,useEffect } from 'react';
import PropTypes from 'prop-types';


export const News = (props) => {
  const defaultProps = {
    country: 'in',
    category:"general",
  }

  const  propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }

  const [state, setstate] = useState({ articles:[],loading:false,page:1,});

  const HandlePrevClick=async()=>{
    console.log("prev");

    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=f512c567cfe342c1b6471700ea865ffd&page=${
     state.page - 1
    }&pageSize=${props.pageSize}`;
    setstate({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
  
    setstate({
     
      page: state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  const HandlenextClick = async () => {
    console.log("next");
   
      let url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${props.category}&apiKey=f512c567cfe342c1b6471700ea865ffd&page=${
        state.page + 1
      }&pageSize=${props.pageSize}`;
      setstate({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      setstate({
      
        page: state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    
  };

  
   useEffect(() => {
     
    const fetchData=async() =>{
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f512c567cfe342c1b6471700ea865ffd&page=1&pageSize=${props.pageSize}`
      setstate({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      setstate({
        articles: parsedData.articles,
        
        TotalArticles: parsedData.totalResults,
        loading: false,
      });
    }
    fetchData().catch(console.error);
    
   },[1000])
   
  return (
    <div>
        <div className="container my-3 ">
        <h2
          className="text-center my-4"
          style={{ border: "2px solid black", padding: "8px", margin: "3px" }}
        >
          <b>SPREAD-NEWS: Top Headlines</b>
        </h2>
        <div style={{ top: "100px" }}>{state.loading && <Spinner />}</div>

        <div className="row">
          {!state.loading &&
            state.articles.map((element) => {
              return (
                <div
                  className="col-md-4 my-3"
                  style={{ height: "500px" }}
                  key={element.url}
                >
                  <Newsitem
                    //   key={element.url}
                    title={element ? element.title : ""}
                    description={element ? element.description : ""}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}

        </div>
        <div className=" container d-flex justify-content-between">
          <button
            disabled={state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={HandlePrevClick}
          >
            &laquo; Prev
          </button>
          <button
            disabled={
              state.page + 1 >
              Math.ceil(state.TotalArticles / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={HandlenextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </div>
  )
}
