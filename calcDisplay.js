import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class calcDisplay extends React.Component {
  static defaultprops = {
    display: "",
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.props.display}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  display: { fontSize: 70, color: "white", textAlign: "right" },
});
