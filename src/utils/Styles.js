import { StyleSheet } from 'react-native';

import Colors from './Colors';

const baseStyles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: Colors.WHITE0,
  },
  text: {
    fontSize: 24,
    color: Colors.BLACK1,
  },
  header: {
    paddingTop: 40,
    height: 80,
    width: '100%',
    backgroundColor: Colors.WHITE1,
    alignItems: 'center',
  }
});

export default baseStyles;