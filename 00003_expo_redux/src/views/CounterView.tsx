import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FAB } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../redux/action_types'
import { RootState } from '../redux/reducers'

const selectCounter = (state: RootState) => state.counter.counter
export function CounterView() {
  const [fabOpen, setFabOpen] = useState(false)

  const counter = useSelector(selectCounter)
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>Current Counter: {counter}</Text>
      <FAB.Group
        visible
        open={fabOpen}
        onStateChange={({ open }) => setFabOpen(open)}
        icon="counter"
        actions={[
          {
            icon: 'plus',
            onPress: () => dispatch({ type: INCREMENT_COUNTER }),
          },
          {
            icon: 'minus',
            onPress: () => dispatch({ type: DECREMENT_COUNTER }),
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
