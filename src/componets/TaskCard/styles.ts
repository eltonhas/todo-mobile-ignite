import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  taskContainer: {
    marginBottom: 8,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 12,
    gap: 8,
    borderRadius: 8,
    backgroundColor: '#262626',
  },
  check: {
    width: 24,
    height: 24,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#4EA8DE',
  },
  checkDone: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5E60CE',
    borderRadius: 999,
  },
  checkDoneOnPress: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8284FA',
    opacity: 0.5,
    borderRadius: 999,
  },
  checkOnPress: {
    width: 24,
    height: 24,
    backgroundColor: '#1E6F9F',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#4EA8DE',
    opacity: 0.5,
  },
  textTask: {
    flex: 1,
    color: '#D9D9D9',
  },
  textTaskDone: {
    flex: 1,
    color: '#D9D9D9',
    textDecorationLine: 'line-through',
  },
  trashButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  trashButtonOnPress: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#333333',
    borderRadius: 4,
  },
})
