import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";



const News=(props)=> {
  
  //   articles = [
  //     {
  //         "source": {
  //             "id": "espn-cric-info",
  //             "name": "ESPN Cric Info"
  //         },
  //         "author": null,
  //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //         "publishedAt": "2020-04-27T11:41:47Z",
  //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "espn-cric-info",
  //             "name": "ESPN Cric Info"
  //         },
  //         "author": null,
  //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //         "publishedAt": "2020-03-30T15:26:05Z",
  //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //     }
  // ]
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  const updateNews = async () => {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)

    let data = await fetch(url)
    props.setProgress(30)
    let parsedData = await data.json()
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }
  useEffect(() => {
    document.title = capitalizeFirstLetter(props.category) + "- NewsMania"

    updateNews();
    // eslint-disable-next-line
  }, [])

 
  
  
  // async componentDidMount() {
  //   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`
  //   // setState({loading: true})

  //   // let data= await fetch(url)
  //   // let parsedData= await data.json()
  //   // console.log(parsedData)
  //   // setState({articles : parsedData.articles ,
  //   //   totalResults:parsedData.totalResults,
  //   //   loading: false,
  //   //   date: parsedData.publishedAt})
  //   updateNews();
  // }
  // const handleNextClick = async () => {
  //   setPage(page+1)
  //   updateNews();
  // }
  // const handlePrevClick = async () => {
  //   setPage(page+1)
  //   updateNews();

  // }
  const fetchMoreData = async () => {
  
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1)
  //  setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    // setLoading(false)
  };
    return (
      <>
        <div className='container my-3'>
          <h2 className='text-center' style={{ margin: '40px 0px',marginTop:'80px' }}>NewsMania - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
          {loading && <Spinner />}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length < totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row" >
                {articles.map((element) => {
                  return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2lx1aVPAY36VWq2TX8NRdtg0GUg63tfFkA&s"}
                      author={element.author} date={new Date(element.publishedAt)} source={element.source.name} newsUrl={element.url} />
                  </div>
                })}

              </div>
            </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between ">
            <button disabled={state.page <= 1} type="button" onClick={handlePrevClick} className="btn btn-dark">&larr; Previous</button>
            <button disabled={state.page + 1 > Math.ceil(state.totalResults / 20)} type="button" onClick={handleNextClick} className="btn btn-dark">Next &rarr;</button>
          </div> */}

        </div>
      </>
    )
}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',

}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
