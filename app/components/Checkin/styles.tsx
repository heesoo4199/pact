import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR } from '../../config/theme';

const circleSize = 110;

export default StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  circle: {
    margin: 0,
    backgroundColor: BACKGROUND_COLOR,
    width: '100%',
    height: circleSize,
    borderRadius: circleSize / 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: '8%',
  },
  innerView: {
    justifyContent: 'center',
  },
  checkinMeta: {
    fontSize: 14,
    marginTop: '3%',
    color: 'gray',
  },
  checkinText: {
    marginTop: '5%',
    fontSize: 18,
  },
});
