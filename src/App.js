import React,{Component} from "react";
import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar.js';
import NewsFeed from './Components/NewsFeed/NewsFeed';
import Affected from './Components/Affected/Affected';
// import SubscriptionLink from '';
// import Spreading from '';


class App extends Component {
  constructor(){
    super();
    this.state={
      route:'home'
    }
  }

  onRouteChange=(route)=>{
    this.setState({route:route})
  }
  render() {
    const {route}=this.state;
    return(
      <div>
        <NavigationBar onRouteChange={this.onRouteChange} />
        { route==='home'?
          <div>
              <Affected /> 
              {/* <SubscribeLink /> */}
          </div>
          :( route==='spreads'?
            <div>
              {/* <Spreading /> */}
              {/* <Precautions /> */}
            </div>
            :( route==='news'?
              <div>
                  <h3 className="ma4"> Some headlines to keep you Updated &#128516;</h3>
                  <NewsFeed/>
              </div>
            :( route==='contact'?
              <div>
                {/* <Contact /> */}
              </div>
            :<p>There is nothing here &#128533;</p>//Change to blog afterwards
            )
            )
          )
          }
          <p>Powered by NewsAPI.org</p>
        {/* <footer /> */}
        
        
      </div>
    )
  }
}

export default App;
