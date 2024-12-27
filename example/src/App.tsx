import { Text, View, StyleSheet } from 'react-native';
import { multiply, TpButton } from 'react-native-lib-yarn';

const result = multiply(3, 7);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TpButton>Default</TpButton>
      <TpButton fill="clear">dsfgdafsg</TpButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
