import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';

class ListDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brewerySelectedItem: this.props.selectedId,
      breweryID: null,
      loading: true,
      name: null,
      brewery_type: null,
      street: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      longitude: null,
      latitude: null,
      phone: null,
      website_url: null,
      updated_at: null,
    };
    console.log(this.state.brewerySelectedItem);
  }
  async componentDidMount() {
    //Have a try and catch block for catching errors.
    try {
      //Assign the promise unresolved first then get the data using the json method.
      const selecteedBreweryAPICall = await fetch(
        `https://api.openbrewerydb.org/breweries/${this.state.brewerySelectedItem}`,
      );
      const brewery = await selecteedBreweryAPICall.json();
      console.log('hi', brewery.id);
      this.setState({
        breweryID: brewery.id,
        name: brewery.name,
        brewery_type: brewery.brewery_type,
        street: brewery.street,
        city: brewery.city,
        state: brewery.state,
        postal_code: brewery.postal_code,
        country: brewery.country,
        longitude: brewery.longitude,
        latitude: brewery.latitude,
        phone: brewery.phone,
        website_url: brewery.website_url,
        updated_at: brewery.updated_at,
        loading: false,
      });
    } catch (err) {
      console.log('Error fetching data-----------', err);
    }
  }

  render() {
    //Destruct breweryDeails and Loading from state.
    const {breweryDetails, loading} = this.state;
    //const {breweries} = this.props;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Name: {this.state.name}</Text>
            <Text style={styles.name}>
              Brewery Type: {this.state.brewery_type}
            </Text>
            <Text style={styles.name}>Street: {this.state.street}</Text>
            <Text style={styles.name}>City: {this.state.city}</Text>
            <Text style={styles.name}>State: {this.state.state}</Text>
            <Text style={styles.name}>
              Postal_code: {this.state.postal_code}
            </Text>
            <Text style={styles.name}>Country: {this.state.country}</Text>
            <Text style={styles.info}>Lattitude: {this.state.latitude}</Text>
            <Text style={styles.info}>Longitude: {this.state.longitude}</Text>
            <Text style={styles.info}>Phone: {this.state.phone}</Text>
            <Text style={styles.info}>
              Website URL: {this.state.website_url}
            </Text>

            {/* <Text style={styles.description}>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
              electram expetendis, omittam deseruisse consequuntur ius an,
            </Text>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Opcion 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Opcion 2</Text>
    </TouchableOpacity>*/}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    padding: 30,
  },
  name: {
    fontSize: 18,
    color: '#696969',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListDetails);
