import React from 'react';
import AffectedCard from '../AffectedCard/AffectedCard';
import GlobalCard from '../GlobalCard/GlobalCard';
import "./Affected.css";

class Affected extends React.Component {
    constructor(){
        super();
        this.state={
            status:{
                Countries:[ 
                {
                Country: "ALA Aland Islands",
                CountryCode: "AX",
                Slug: "ala-aland-islands",
                NewConfirmed: 22211,
                TotalConfirmed: 2211,
                NewDeaths: 2211,
                TotalDeaths: 22111,
                NewRecovered: 22111,
                TotalRecovered: 22111,
                Date: "2020-04-15T12:13:49Z"
                }
                ],
                Global:{
                    NewConfirmed: 62833,
                    TotalConfirmed: 1837869,
                    NewDeaths: 5665,
                    TotalDeaths: 110071,
                    NewRecovered: 24489,
                    TotalRecovered: 444024
                    }
            }
        }
    }
    componentDidMount(){
        fetch('https://api.covid19api.com/summary')
        .then(response=>response.json())
        .then(data=>this.setState({status:data}))
    }
    render(){
        const {Global,Countries}=this.state.status;
        return (
            <div>
                <p className="pushit">On a Global Scale</p>
                <div className="global">
                    <GlobalCard New={Global.NewConfirmed} Total={Global.TotalConfirmed} name="Total Confirmed" sign="yellow" />
                    <GlobalCard New={Global.NewDeaths} Total={Global.TotalDeaths} name="Total Deaths" sign="red" />
                    <GlobalCard New={Global.NewRecovered} Total={Global.TotalRecovered} name="Total Recovered" sign="green" />
                </div>
                <p className="pushit">List of Affected Countries</p>
                {/* <AffectedCard country={Countries[0]} /> */}
                <div className="flex flex-wrap">
                    {Countries.map((country,i)=>{
                    if (country.TotalConfirmed!==0){
                        return <AffectedCard country={country} />
                    }     
                })}
            </div>
            </div>
            
            
        );
    }
    
}

export default Affected;