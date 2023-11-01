import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MatchDetails() {
  return (
    <View>
      <View>
        <Image
          style={styles.tinyLogo}
          source={require("@expo/snack-static/react-native-logo.png")}
        />
        <Text>ChampionLeague</Text>
      </View>
      <View>
        <Text>2</Text>
      </View>
      <View>
        <Text>3</Text>
      </View>
      <View>
        <Text>4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
