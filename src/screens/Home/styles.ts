import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    fontFamily: 'Inter',
  },
  header: {
    position: 'relative',
    backgroundColor: '#0D0D0D',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    position: 'absolute',
    top: 145,
    flexDirection: 'row',
    marginHorizontal: 24,
    gap: 4,
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#0D0D0D',
    borderRadius: 6,
    paddingHorizontal: 16,
    color: '#F2F2F2',
    fontSize: 16,
  },
  inputOnFocus: {
    borderColor: '#5E60CE',
    flex: 1,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 16,
    color: '#F2F2F2',
    fontSize: 16,
  },
  plusButton: {
    height: 52,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },
  plusButtonOnPress: {
    height: 52,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4EA8DE',
    borderRadius: 6,
  },
  status: {
    flexDirection: 'row',
    marginTop: 68,
    marginHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  statusGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  createText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4EA8DE',
  },
  concludedText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8284FA',
  },
  statusNumber: {
    color: '#F2F2F2',
    backgroundColor: '#333333',
    borderRadius: 999,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
})
