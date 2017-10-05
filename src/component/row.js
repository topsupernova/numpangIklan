import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ListView, Keyboard, TouchableHighlight, ActivityIndicator } from 'react-native';

import Icons from '../api/FontAwesomeIcons';
import fetchIklan from '../api/api';

export default class Row extends Component {
  constructor() {
    super();

    const ds = new ListView.DataSource({rowHasChanged: this._rowHasChanged});
    this.state = {
      loading: true,
      pageSize: 500,
      data: [],
      dataSource: ds,
      loads: false,
    };

    this._getNextPage();
  }

  _getNextPage() {
    const self = this;

    fetchIklan(self.state.pageSize)
      .then(function(iklans) {
        const data = self.state.data.concat(iklans);

        self.setState({
          loading: false,
          data: data,
          dataSource: self.state.dataSource.cloneWithRows(data),
          loads: false,
        });
      });

  }

  _renderFooter(){
    if(!this.state.loads){
      return (
        <View style={styles.loads}><Text style={{textAlign: 'center', fontWeight: 'bold'}}>Loading ...</Text></View>
      )
    }
  }

  render() {
    if(this.state.loading){
      return (
        <View style={styles.loading}>
          <ActivityIndicator
            style={{opacity: this.state.loading ? 1.0 : 0.0}}
            animating={true}
            size='large'
          />
        </View>
      )
    } else {
      return (
        <View style={styles.viewList}>
          <ListView
            contentContainerStyle={styles.rowWrapper}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            renderFooter={this._renderFooter.bind(this)}
            removeClippedSubviews={true}
            pagingEnabled={true}
            enableEmptySections={true}
            onEndReached={this._getNextPage.bind(this)}
            onEndReachedThreshold={10}
            pageSize={1}
          />
        </View>
      )
    }
  }

  _renderRow(row, sectionId, rowId, highlightRow) {
    const self = this;
    const gambar = row.image + '?random_number=' + row.pid + new Date().getTime();

    return (
      <TouchableHighlight
        activeOpacity={80}
        underlayColor={"#FFFFFF"}
        onPress={function() {
          highlightRow(sectionId, rowId)
          self.props.onIklanSelected(row)
        }}
        style={{margin: 5, width: 165}}>
        <View style={{padding: 10}}>
          <Image source={{uri: gambar, cache: 'only-if-cached'}}
                 style={{width:160, height:160, backgroundColor: '#DDDDDD'}}/>
          <Text style={styles.textRow}>
            {row.judul.replace(/&quot;/g, " ").replace(/&ndash;/g, " ").replace(/&amp;/g, "&").replace(/&gt;/g, "").replace(/\//g, "").replace(/&lt/g, "")}
            {"\n"}{Icons.mapMarker}  {row.kota}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

  _rowHasChanged(r1, r2) {
    return r1 !== r2
  }
}

const styles = StyleSheet.create({
  viewList: {
    position: 'absolute',
    top: 108,
    bottom: 50,
    left: 0,
    right: 0,
  },
  loads: {
    width: 360,
    marginTop: 10,
    marginBottom: 0,
    paddingVertical: 10,
    backgroundColor: '#CCCCCC',
  },
  rowWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  imageWrapper: {
    paddingRight: 10,
  },
  textRow: {
    paddingTop: 5,
    fontSize: 15,
    color: '#666',
    height: 84,
    fontFamily: 'FontAwesome',
    lineHeight:18,
  },
  list: {
    paddingVertical: 5,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
  },
  rowList: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  separator: {
    borderWidth: 1,
    borderColor: '#F5F5F5',
  },
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
});