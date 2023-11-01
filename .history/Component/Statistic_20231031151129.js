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
