import React from 'react'
import ReactMapGL from 'react-map-gl'

class MapContainer extends React.Component {
    state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

    render(){

        return(
            <div>
            <ReactMapGL
    {...this.state.viewport}
    
    onViewportChange={(viewport) => this.setState({viewport})}
  >Markers Here</ReactMapGL>

            </div>
        )
    }
}

export default MapContainer
