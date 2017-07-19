import React from 'react'
import { Button, View } from 'react-native'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title='Go to Account Settings'
        onPress={() => navigation.navigate('AccountSettings')}
      />
    </View>
  )
}
