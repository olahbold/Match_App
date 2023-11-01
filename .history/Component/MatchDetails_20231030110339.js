import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Teamdetails from './Teamdetails'
import Statistic from './Statistic'

export default function MatchDetails() {
  return (
    <View>
      <TeamDetails/>
      <Statistic/>
    </View>
  )
}

const styles = StyleSheet.create({})