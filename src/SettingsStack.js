import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

function SettingsMenuScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title='Account Settings'
        onPress={() => navigation.navigate('AccountSettings')}
      />
    </View>
  )
}

function AccountSettingsScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Account Settings</Text>
    </View>
  )
}


export default StackNavigator({
  SettingsMenu: {
    screen: SettingsMenuScreen,
    navigationOptions: {
      title: 'Settings'
    }
  },
  AccountSettings: {
    screen: AccountSettingsScreen,
    navigationOptions: {
      title: 'Account Settings'
    }
  }
})
