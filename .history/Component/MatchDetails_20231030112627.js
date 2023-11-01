import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function MatchDetails() {
  return (
    <View>
      <View>
        <Image
          style={styles.tinyLogo}
          source={require("..assets/ChampionsLeague.png")}
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
