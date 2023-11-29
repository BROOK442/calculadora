import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    flex: .12
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32CD32',
    padding: 20,
    margin: 5,
    borderRadius: 50,
  },
  operationButton: {
    backgroundColor: 'green',
  },
  operationColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10, // Ajuste conforme necessário
  },
  buttonText: {
    color: 'black',
    fontSize: 30,
  }
});
