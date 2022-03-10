import React, { Component } from "react";
import NewsItem from "./NewsItem";
import './News.css';
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {


  static defaultProps = {
    country: 'in',
    // pageSize:9,
    category:"general",
   

  }

  static propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
    
  }
  // let {pageSize}=this.props;
  constructor() {
    super();
    // console.log("constructor of news-headline");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  handleprevClick = async () => {
    console.log("prev");

    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=f512c567cfe342c1b6471700ea865ffd&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
     
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handlenextClick = async () => {
    console.log("next");
   
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=f512c567cfe342c1b6471700ea865ffd&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
      
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    
  };

  async componentDidMount() {
    //anything inside this function executes atlast.

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f512c567cfe342c1b6471700ea865ffd&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      TotalArticles: parsedData.totalResults,
      loading: false,
    });
  }

  render() {
    return (
      <div className="container my-3 ">
        <h2
          className="text-center my-4"
          style={{ border: "2px solid black", padding: "8px", margin: "3px" }}
        >
          <b>SPREAD-NEWS: Top Headlines</b>
        </h2>
        <div style={{ top: "100px" }}>{this.state.loading && <Spinner />}</div>

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div
                  className="col-md-4 my-3"
                  style={{ height: "500px" }}
                  key={element.url}
                >
                  <NewsItem
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
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleprevClick}
          >
            &laquo; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.TotalArticles / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handlenextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
