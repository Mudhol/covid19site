import React from 'react';
import './GlobalCard.css';

const GlobalCard=({New,Total,name,sign})=>{
    return (
        <div>
             <article className="center w-20 mw6 mw6-ns br3 hidden ba b--black-10 mv4">
                    <div className={sign}></div>
                    <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 center">
                    {name}</h1>
                    <div className="pa3 bt b--black-10">
                        <div className="notes">
                            <div className="confirmed">
                                <p className="adj" title="Total Confirmed"> {Total}</p>
                                <p className="adj1" title="New Confirmed">{New} Today</p>
                            </div>
                        </div>
                    </div>
            </article>
        </div>
    );
}


export default GlobalCard;