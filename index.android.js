'use strict'

var React = require('react-native')
var Mapbox = require('react-native-mapbox-gl')
var secrets = require('./secrets')
var mapRef = 'mapRef'

var {
  AppRegistry,
  StyleSheet,
  View
} = React

var Couve = React.createClass({
  mixins: [Mapbox.Mixin],

  getInitialState () {
    return {
      center: {
        latitude: -26.4537736,
        longitude: -49.1179425
      }
    }
  },

  onRegionChange (location) {
    this.setState({ currentZoom: location.zoom })
  },

  onUserLocationChange (location) {
    console.log(location)
  },

  render: function () {
    StatusBarIOS.setHidden(true)
    return (
      <View style={styles.container}>
        <Mapbox
          accessToken={secrets.development.mapboxToken}
          centerCoordinate={this.state.center}
          debugActive={false}
          direction={10}
          ref={mapRef}
          onRegionChange={this.onRegionChange}
          rotateEnabled={true}
          scrollEnabled={true}
          style={styles.map}
          showsUserLocation={true}
          styleURL={this.mapStyles.emerald}
          userTrackingMode={this.userTrackingMode.none}
          zoomEnabled={true}
          zoomLevel={10}
          compassIsHidden={true}
          onUserLocationChange={this.onUserLocationChange}
        />
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
})

AppRegistry.registerComponent('Couve', () => Couve)
