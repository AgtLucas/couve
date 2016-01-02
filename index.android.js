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
      },
      zoom: 15
    }
  },

  onRegionChange (location) {
    this.setState({ currentZoom: location.zoom })
  },

  onRegionWillChange (location) {
    console.log(location)
  },

  onUpdateUserLocation (location) {
    console.log(location)
  },

  onLongPress (location) {
    console.log('Long pressed', location)
  },

  render: function () {
    StatusBarIOS.setHidden(true)
    return (
      <View style={styles.container}>
        <Mapbox
          style={styles.map}
          direction={0}
          rotateEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showsUserLocation={true}
          ref={mapRef}
          accessToken={secrets.development.mapboxToken}
          styleURL={this.mapStyles.emerald}
          userTrackingMode={this.userTrackingMode.none}
          centerCoordinate={this.state.center}
          zoomLevel={this.state.zoom}
          onRegionChange={this.onRegionChange}
          onRegionWillChange={this.onRegionWillChange}
          onUpdateUserLocation={this.onUpdateUserLocation}
          onLongPress={this.onLongPress}
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
