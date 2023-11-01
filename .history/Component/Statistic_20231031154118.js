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
        Title="Possession"
        HomeWidth={currentStats.PH}
        AwayWidth={currentStats.PA}
      />
      <StatisticTable
        Home={currentStats.TAH}
        Away={currentStats.TAW}
        Title={"Total Attacks"}
        HomeWidth={currentStats.TAH}
        AwayWidth={currentStats.TAW}
      />
      <StatisticTable
        Home={currentStats.SH}
        Away={currentStats.SW}
        Title={"Shot"}
        HomeWidth={currentStats.SH}
        AwayWidth={currentStats.SW}
      />
      <StatisticTable
        Home={currentStats.SOGH}
        Away={currentStats.SOGW}
        Title={"Shot On Goal"}
        HomeWidth={currentStats.SOGH}
        AwayWidth={currentStats.SOGW}
      />
      <StatisticTable
        Home={currentStats.CH}
        Away={currentStats.CW}
        Title={"Corners"}
        HomeWidth={currentStats.CH}
        AwayWidth={currentStats.CA}
      />
      <StatisticTable
        Home={currentStats.OFFH}
        Away={currentStats.OFFA}
        Title={"Offsides"}
        HomeWidth={currentStats.OFFH}
        AwayWidth={currentStats.OFFA}
      />
      <StatisticTable
        Home={currentStats.YCH}
        Away={currentStats.YCA}
        Title={"Possesssion"}
        HomeWidth={currentStats.YCH}
        AwayWidth={currentStats.YCA}
      />
      <StatisticTable
        Home={currentStats.RCH}
        Away={currentStats.RCA}
        Title={"Possesssion"}
        HomeWidth={currentStats.RCH}
        AwayWidth={currentStats.RCA}
      />
    </View>
  );
};

export default Statistic;

const styles = StyleSheet.create({
  StatisticContainer: {
    flexDirection: "column",
    marginTop: 30,
    gap: 10,
    paddingHorizontal: 20,
  },
});
