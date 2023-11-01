import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChampionsLeague = () => {
  return (
    <View style={styles.championsLeagueContainer}>
    <Image
      style={styles.tinyLogo}
      source={require("./Images/ChampionsLeague.png")}
    />
    <Text style={{ textAlign: "center", fontSize: 20 }}>
      Champions League
    </Text>
  </View>
  
  
  )
}

export default ChampionsLeague

const styles = StyleSheet.create({})