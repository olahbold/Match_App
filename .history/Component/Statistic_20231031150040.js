import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { data } from "./Data";
import StatisticTable from "./StatisticTable";

const Statistic = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const currentStats = data[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.StatisticContainer}>
      <StatisticTable
        Home={currentStats.PH}
        Away={currentStats.PA}
        Title={"Possesssion"}
        HomeWidth={currentStats.PH}
        AwayWidth={currentStats.PA}
      />
      <StatisticTable
        Home={currentStats.TAH}
        Away={currentStats.TAW}
        Title={"TOTAL ATTACKS"}
        HomeWidth={currentStats.PH}
        AwayWidth={currentStats.PA}
      />{" "}
      <StatisticTable
        Home={currentStats.SH}
        Away={currentStats.SW}
        Title={"SHOT"}
        HomeWidth={currentStats.PH}
        AwayWidth={currentStats.PA}
      />{" "}
      <StatisticTable
        Home={currentStats.SOGH}
        Away={currentStats.SOGW}
        Title={"SHOT ON "}
        HomeWidth={currentStats.CH}
        AwayWidth={currentStats.CW}
      />{" "}
      <StatisticTable
        Home={currentStats.CH}
        Away={currentStats.CW}
        Title={"Possesssion"}
        HomeWidth={currentStats.OFFH}
        AwayWidth={currentStats.OFFA}
      />{" "}
      <StatisticTable
        Home={currentStats.YCH}
        Away={currentStats.YCA}
        Title={"Possesssion"}
        HomeWidth={currentStats.PH}
        AwayWidth={currentStats.PA}
      />{" "}
      <StatisticTable
        Home={currentStats.RCH}
        Away={currentStats.RCA}
        Title={"Possesssion"}
        HomeWidth={currentStats.PH}
        AwayWidth={currentStats.PA}
      />
    </View>
  );
};

export default Statistic;

const styles = StyleSheet.create({
  StatisticContainer: {
    flexDirection: "column",
    marginTop: 40,
    gap: 20,
    paddingHorizontal: 20,
  },
});
