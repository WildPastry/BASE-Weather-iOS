// imports
import React from "react";

// default component functions
import { Text, View } from "react-native";

// stylesheet
var styles = require("../styles.js");

// START user input
class UserInput extends React.Component {
  // default class user input constructor
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: this.props.errorMessage,
      currentLocation: this.props.currentLocation,
      currentLat: this.props.currentLat,
      currentLng: this.props.currentLng
    };
  }

  // START render user input
  render() {
    let text = "Loading...";
    if (this.state.errorMessage) {
      // display error text
      text = this.state.errorMessage;
    } else if (this.state.currentLocation) {
      // display success text (users current location)
      text = this.state.currentLocation;
      console.log(text);
    }

    return (
      // START user input display
      <View style={styles.locationWrap}>
        <Text style={styles.locationText}>{text}</Text>
      </View>
      // END user input display
    );
  }
  // END render user input
}
// END user input

export default UserInput;
