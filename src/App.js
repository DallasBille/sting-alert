import React from 'react';
import MapContainer from './Containers/MapContainer'
import './App.css';
import './style.css'

class App extends React.Component {
    render(){
      return (
        <div className="App">
            <div className="header">
                <p className="header-text">Mapbox Demo</p>
            </div>
          <MapContainer/>
        </div>
      );
    }
}

export default App;
