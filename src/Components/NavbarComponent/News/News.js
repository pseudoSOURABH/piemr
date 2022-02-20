import React from 'react';
import { Newsitem } from './Newsitem';
import {Spinner} from './Spinner';
import { useState } from 'react';
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
    }&category=${this.props.category}&apiKey=f512c567cfe342c1b6471700ea865ffd&page=${
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
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      setstate({
      
        page: state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    
  };

  
   const componentDidMount=async() =>{
    //anything inside this function executes atlast.

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f512c567cfe342c1b6471700ea865ffd&page=1&pageSize=${props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      TotalArticles: parsedData.totalResults,
      loading: false,
    });
  }
  return (
    <div>
        
    </div>
  )
}
