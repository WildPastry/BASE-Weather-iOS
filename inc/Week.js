// imports
import React from "react";

// default component functions
import { Image, Text, View } from "react-native";

// weather icons
import IconCloudy from "./../assets/weather/cloudy.png";
import IconPartlyCloudy from "./../assets/weather/partlycloudy.png";
import IconFoggy from "./../assets/weather/foggy.png";
import IconRainy from "./../assets/weather/rainy.png";
import IconSnowy from "./../assets/weather/snowy.png";
import IconSunny from "./../assets/weather/sunny.png";
import IconWindy from "./../assets/weather/windy.png";

// stylesheet
var styles = require("../styles.js");

// START week
class Week extends React.Component {
  // default class week constructor
  constructor(props) {
    super(props);
    this.state = {
      weather: this.props.weather
    };
  }

  // START week render
  render() {
    // set current weather icon based on weather
    return (
      <View style={styles.weekWrap}>
        {/* START map */}
        {this.state.weather.map(dailyWeather => {
          // set up variable
          let dailyWeatherDisplay;

          // weather else if logic
          if (dailyWeather.icon === "cloudy") {
            dailyWeatherDisplay = IconCloudy;
          } else if (dailyWeather.icon === "partly-cloudy-day") {
            dailyWeatherDisplay = IconPartlyCloudy;
          } else if (dailyWeather.icon === "fog") {
            dailyWeatherDisplay = IconFoggy;
          } else if (dailyWeather.icon === "rain") {
            dailyWeatherDisplay = IconRainy;
          } else if (dailyWeather.icon === "snow") {
            dailyWeatherDisplay = IconSnowy;
          } else if (dailyWeather.icon === "clear-day") {
            dailyWeatherDisplay = IconSunny;
          } else if (dailyWeather.icon === "wind") {
            dailyWeatherDisplay = IconWindy;
          } else if (dailyWeather.icon === "sleet") {
            dailyWeatherDisplay = IconSnowy;
          } else if (dailyWeather.icon === "clear-night") {
            dailyWeatherDisplay = IconSunny;
          } else {
            dailyWeatherDisplay = IconPartlyCloudy;
          }
          return (
            // START week display
            <View style={styles.weekIconTempWrap} key={dailyWeather.time}>
              {/* daily icon */}
              <Image
                style={styles.weekIcon}
                source={dailyWeatherDisplay}
                resizeMode="contain"
              />
              {/* daily low temp */}
              <Text style={styles.weekLowTemp}>
                {Math.round(dailyWeather.temperatureLow)}°
              </Text>
              {/* daily high temp */}
              <Text style={styles.weekHighTemp}>
                {Math.round(dailyWeather.temperatureHigh)}°
              </Text>
            </View>
            // END week display
          );
        })}
        {/* END map */}
      </View>
    );
  }
  // END week render
}
// END week

export default Week;
