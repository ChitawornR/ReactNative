import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from './styles'

const DefineStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title,styles.warning]}>Hello Word</Text>
    </View>
  )
}

export default DefineStyles

