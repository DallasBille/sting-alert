import React from 'react';
import MapContainer from './Containers/MapContainer'
import './App.css';

class App extends React.Component {
    render(){
      return (
        <div className="App">
          <h1>Sting Alert!!!</h1>
          <MapContainer/>
        </div>
      );
    }
}

export default App;
