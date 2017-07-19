import { TabNavigator } from 'react-navigation'

import HomeScreen from './HomeScreen'
import SettingsStack from './SettingsStack'

export default TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsStack
  }
})
