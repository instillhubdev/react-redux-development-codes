import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
const ListItem = ({ placeName }) => (
    // TouchableWithoutFeedback allows us to register touch events 
    // on the element it wraps
    // TouchableHighlight will at least give some feedback 
    // TouchableNativeFeedback is for the native feedback for applications 
    // that are deployed on Android Platform

  <TouchableHighlight onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text>{placeName}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee"
  }
});

export default ListItem;
