import React from 'react';
import './AffectedCard.css'
//center w-40 h-20 pa4-ns bg-blue br4 pa3 mw5
const AffectedCard=({country})=>{
    
    return (
            <article className="center w-30 mw6 mw6-ns br3 hidden ba b--black-10 mv4 DangerBack">
                    <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 center colored">
                    {country.Country}</h1>
                    <div className="pa3 bt b--black-10">
                        <div className="notes">
                            <div className="confirmed">
                                <p className="adj" title="Total Confirmed"> {country.TotalConfirmed}</p>
                                <p className="adj1" title="New Confirmed">{country.NewConfirmed} Today</p>
                            </div>
                            <img src={`https://www.countryflags.io/${country.CountryCode}/shiny/64.png`} alt="" className="flag" />
                           
                        </div>
                        <div className="lowerpart flex space-around">
                            {/* <p className="adjust newdeath" title="New Deaths"> {country.NewDeaths}</p> */}
                            <p className="adjust totaldeath" title="Total deaths"> {country.TotalDeaths}</p>
                            <p className="adjust recovered" title="Total Recovered"> {country.TotalRecovered}</p>
                        </div>
                    </div>
            </article>
    );
}

export default AffectedCard;