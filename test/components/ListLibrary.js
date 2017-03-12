import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class ListLibrary extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.library);
  }

  renderRow(library) {
    return (
      <ListItem library={library} />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    library: state.Librarys
  };
};

export default connect(mapStateToProps)(ListLibrary);
