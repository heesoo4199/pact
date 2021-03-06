import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { withNavigationFocus } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BACKGROUND_COLOR } from '../config/theme';
import { Pact } from '../lib/types';
import PactCard from '../components/PactCard';
import auth from '../lib/auth';

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  headerRight: {
    marginRight: 20,
  },
});

type Props = {
  navigation: NavigationStackProp<{}>;
  isFocused: boolean;
}

type State = {
  pacts: Pact[];
}

class Home extends Component<Props, State> {
  static navigationOptions = ({ navigation }: Props): {
    headerRight: () => JSX.Element;
    title: string;
  } => ({
    title: 'Your Pacts',
    headerRight: (): JSX.Element => (
      <TouchableOpacity
        onPress={navigation.getParam('addPressed')}
        style={styles.headerRight}>
        <Icon name="add" type="material" color="#7E7E7E" />
      </TouchableOpacity>
    ),
  });

  state: State = {
    pacts: [],
  };

  async pactsFetch(): Promise<void> {
    const pacts = await auth.getUserPacts();

    if (!pacts) {
      return;
    }

    this.setState({ pacts });
  }

  componentDidMount(): void {
    this.props.navigation.setParams({ addPressed: this.addPressed });
    this.pactsFetch();
  }

  componentDidUpdate(prevProps: Props): void {
    if (!prevProps.isFocused && this.props.isFocused) {
      this.pactsFetch();
    }
  }


  pactPressed = (index: number): void => {
    this.props.navigation.navigate('Pact', { pact: this.state.pacts[index] });
  };

  addPressed = (): void => {
    this.props.navigation.navigate('EditPact');
  };

  renderItem = ({ item, index }: {item: Pact; index: number}): JSX.Element => (
    <PactCard
      onPress={(): void => this.pactPressed(index)}
      title={item.title}
      subtitle={item.description}
    />
  );

  render(): JSX.Element {
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={this.state.pacts}
        renderItem={this.renderItem}
        keyExtractor={(item: Pact): string => item.pactId}
      />
    );
  }
}

export default withNavigationFocus(Home);
