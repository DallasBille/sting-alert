import React from 'react'
import ReactMapGL from 'react-map-gl'

class MapContainer extends React.Component {
    state = {
    viewport: {
      width: "100vw",
      height: "85vh",
      latitude: 41.724715,
      longitude: -74.954948,
      zoom: 5
    }
  };

componentDidMount(){
    this.getLocation()
}


  getLocation = () => {
       navigator.geolocation.getCurrentPosition(position => {
           console.log(position)
           const viewportCopy = {
                   width: this.state.viewport.width,
                   height: this.state.viewport.height,
                   latitude: position.coords.latitude,
                   longitude: position.coords.longitude,
                   zoom: 12
               }
           this.setState({
               viewport: viewportCopy
           })
      })
  }

    render(){
        return(
            <div>
            <ReactMapGL
        {...this.state.viewport}  mapStyle='mapbox://styles/mapbox/streets-v11'
        onViewportChange={(viewport) => this.setState({viewport})} mapboxApiAccessToken={process.env.REACT_APP_STINGALERT_TOKEN}
      >Markers Here</ReactMapGL>
            </div>
        )
    }
}

export default MapContainer
