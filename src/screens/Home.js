import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Actions} from 'react-native-router-flux';
import {fetchProducts, getListBreweryItems} from '../actionCreators';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweryList: [],
      loading: true,
    };
  }

  async componentDidMount() {
    //Have a try and catch block for catching errors.
    try {
      //Assign the promise unresolved first then get the data using the json method.
      const breweryAPICall = await fetch(
        `https://api.openbrewerydb.org/breweries`,
      );
      const brewery = await breweryAPICall.json();
      this.setState({breweryList: brewery, loading: false});
    } catch (err) {
      console.log('Error fetching data-----------', err);
    }
    // this.props.handletoGetBrewerylist();
    //  this.setState({
    //      breweryList:this.props.breweries
    //  })
    // console.log("Home ", this.props.breweries);
  }
  //Define your renderItem method the callback for the FlatList for rendering each item, and pass data as a argument.
  renderItem(data) {
    return (
      <TouchableOpacity
        style={{backgroundColor: '#E37861'}}
        onPress={() => {
          Actions.listScreen({selectedId: data.item.id});
        }}>
        <View style={styles.listItemContainer}>
          <Text style={styles.breweryItemHeader}>{data.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    //Destruct breweryList and Loading from state.
    const {breweryList, loading} = this.state;
    //const {breweries} = this.props;
    //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
    //Data contains the data being  mapped over.
    //RenderItem a callback return UI for each item.
    //keyExtractor used for giving a unique identifier for each item.
    if (!loading) {
      return (
        <FlatList
          data={breweryList}
          renderItem={this.renderItem}
          keyExtractor={item => item.name}
        />
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}

const styles = StyleSheet.create({
  listItemContainer: {
    elevation: 1,
    borderRadius: 2,
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'row', // main axis
    justifyContent: 'flex-start', // main axis
    alignItems: 'center', // cross axis
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    marginBottom: 6,
  },
  breweryItemHeader: {
    color: '#581845',
    fontSize: 24,
  },
});

const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({
//   callbreweryProducts: () => dispatch(fetchProducts()),
// });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // callbreweryProducts: fetchProducts,
    },
    dispatch,
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
