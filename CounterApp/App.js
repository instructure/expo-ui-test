import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    count: 0,
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Increment" testID={"button.increment"} onPress={() => this.setState({ count: this.state.count + 1})} />
        <Button title="Decrement" testID={"button.decrement"} onPress={() => this.setState({ count: this.state.count - 1})} />
        <Text testID={"text.count"}>{this.state.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
