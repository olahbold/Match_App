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
        Home={currentStats.PossessionHome}
        Away={currentStats.PossessionAway}
        Title={"Possession"}
        HomeWidth={currentStats.PossessionHome}
        AwayWidth={currentStats.PossessionAway}
      />
      <StatisticTable
        Home={currentStats.TotalAttacksHome}
        Away={currentStats.TotalAttacksAway}
        Title={"Total Attacks"}
        HomeWidth={currentStats.TotalAttacksHome}
        AwayWidth={currentStats.TotalAttacksAway}
      />
      <StatisticTable
        Home={currentStats.ShotHome}
        Away={currentStats.ShotAway}
        Title={"Shot"}
        HomeWidth={currentStats.ShotHome}
        AwayWidth={currentStats.ShotAway}
      />
      <StatisticTable
        Home={currentStats.ShotOnGoalHome}
        Away={currentStats.ShotOnGoalAway}
        Title={"Shot On Goal"}
        HomeWidth={currentStats.ShotOnGoalHome}
        AwayWidth={currentStats.ShotOnGoalAway}
      />
      <StatisticTable
        Home={currentStats.CornerHome}
        Away={currentStats.CornerAway}
        Title={"Corners"}
        HomeWidth={currentStats.CornerHome}
        AwayWidth={currentStats.CornerAway}
      />
      <StatisticTable
        Home={currentStats.OffsideHome}
        Away={currentStats.OffsideAway}
        Title={"Offsides"}
        HomeWidth={currentStats.OffsideHome}
        AwayWidth={currentStats.OffsideAway}
      />
      <StatisticTable
        Home={currentStats.YellowcardHome}
        Away={currentStats.Ye}
        Title={"Yellow Card"}
        HomeWidth={currentStats.YCH}
        AwayWidth={currentStats.YCA}
      />
      <StatisticTable
        Home={currentStats.RCH}
        Away={currentStats.RCA}
        Title={"Red Card"}
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
