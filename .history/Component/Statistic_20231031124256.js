import { StyleSheet, Text, View } from "react-native";
import React, {useEffect,useState} from "react",
import { data } from "./Data";

const Statistic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStats = footballStats[currentIndex];


  useEffect(() => {
    return () => {
  setCurrentIndex((prevIndex)=)
    };
  }, [input])
  return (
    <View style={styles.StatisticContainer}>
      <View style={styles.StatDetails}>
        <Text>{}</Text>
        <Text>{}</Text>
        <Text>{}</Text>
      </View>
      <View style={styles.barContainer}>
        <View style={{ height:10,width: '60%', backgroundColor: "#0099FF",borderRadius: 5 }}/>
        <View style={{ height:10,width: '40%', backgroundColor: "#FC5555",borderRadius: 5 }}/>
      </View>
    </View>
  );
};

export default Statistic;

const styles = StyleSheet.create({
  StatisticContainer: {
    flexDirection: "column",
    marginTop: 40,
    gap: 20,
    paddingHorizontal:20
  },
  StatDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  barContainer: {
    width: "80%",
    flexDirection: 'row',
    gap: 5,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal: 40
  }
});
