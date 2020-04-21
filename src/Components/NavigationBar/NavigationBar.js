import React from 'react';
import './NavigationBar.css'
import corona from './corona.png'

const NavigationBar = ({onRouteChange})=>{
    return (
            <div className='Navbar'>
               <nav className="db dt-l w-100 border-box pa3 ph5-l">
  <p className="db dtc-l v-mid mid-gray link dim w-100 w-30-l tc tl-l mb2 mb0-l pointer" 
  onClick={()=>onRouteChange('home')}
  title="Home">
        <img src={corona} className="dib w2 h2 br-100" alt="CoronaPandemic" />   
  </p>
     <div className="db dtc-l v-mid w-100 w-75-l tc tr-l relatis">
        <p className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" onClick={()=>onRouteChange('home')} title="Home">Home</p>
        {/* <p className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" onClick={()=>onRouteChange('spreads')} title="How it Spreads">How it Spreads</p> */}
        {/* <p className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" onClick={()=>onRouteChange('blogs')} title="Blog">Blogs</p> */}
        <p className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" onClick={()=>onRouteChange('news')} title="News">News</p>
        {/* <p className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" onClick={()=>onRouteChange('contact')} title="Contact">Contact</p> */}
        
    </div>
        </nav>


            </div>
        )
    }


export default NavigationBar;