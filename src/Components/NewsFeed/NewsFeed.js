import React from 'react';
import Card from '../Card/Card';
import './NewsFeed.css';


const newsletter={
    source: {
    id: "cnbc",
    name: "CNBC"
    },
    author: "Dan Mangan",
    title: "New York Gov. Cuomo says 'I believe the worst is over if we continue to be smart' about coronavirus - CNBC",
    description: "New York Gov. Andrew Cuomo said that the state is \"controlling the spread\" of the coronavirus, and it appears that \"the worst is over ... if we continue to be smart going forward.\" Cuomo revealed that the death toll from Covid-19 in New York had topped 10,000…",
    url: "https://www.cnbc.com/2020/04/13/coronavirus-death-toll-in-new-york-state-tops-10000-cuomo-says.html",
    urlToImage: "https://image.cnbcfm.com/api/v1/image/106482275-1586443707136gettyimages-1209380102.jpeg?v=1586443756",
    publishedAt: "2020-04-13T16:37:01Z",
    content: "New York Gov. Andrew Cuomo said Monday that the state is \"controlling the spread\" of the coronavirus, and it appears that \"the worst is over ... if we continue to be smart going forward.\"\r\nAt the same time, Cuomo revealed that the death toll from Covid-19 in … [+3692 chars]"
    }

class NewsFeed extends React.Component{
    constructor(props){
        super(props)
        this.state={
            news:[newsletter]
        }
        
    }
    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9719d1d6233044539ea5b55e33fb94cb')
        .then(response=>response.json())
        .then(data=>{
            this.setState({news:data.articles})
        })
    }
    render(){
        return (
            <div className="newscumber">  
                {this.state.news.map((newsletter,i)=>{
                       return <Card Newsletter={newsletter} />
                    })
                }
            
            </div>
            );
        }
    
    
}

export default NewsFeed;