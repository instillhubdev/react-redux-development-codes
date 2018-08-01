import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is our first app, it really works!</Text>
        <Text>The basics of React Native</Text>
        <Text>Redux Refresher</Text>
        <Text>Debugging of React Native applications</Text>
        <Text>Third party libraries</Text>
        <Text>Using Navigation</Text>
        <Text>Styling and animations</Text>
        <Text>Handling user inputs</Text>
        <Text>Camera and maps</Text>
        <Text>Using HTTP</Text>
        <Text>Authenticating Users</Text>
        <Text>Polish and Publish the Application</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

