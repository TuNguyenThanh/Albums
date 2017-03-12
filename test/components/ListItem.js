import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text>{this.props.library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    console.log(this.props.theme);
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={styles.title}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'red',
    marginLeft: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.Selected === ownProps.library.id;
  return {
    expanded,
    theme: state.Theme
  };
};

export default connect(mapStateToProps, actions)(ListItem);
