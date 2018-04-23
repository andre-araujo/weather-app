import React, { Component } from 'react';
import { func } from 'prop-types';

import styles from './styles.css';
import Icon from '../../elements/Icon';
import Button from '../../elements/Button';
import getLatLong from '../../../lib/getLatLong';

class LocationInput extends Component {
  state = {
    location: '',
  }

  handleInput = (e) => {
    this.setState({
      location: e.target.value,
    });
  }

  handleGetCoords = () => {
    const { onGetCoords } = this.props;

    getLatLong(({ coords }) => {
      onGetCoords({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    });
  }

  handleSearch = () => {
    const { onSearch } = this.props;

    onSearch(this.state.location);
  }

  render() {
    const { location } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <input className={styles.input} type="text" onChange={this.handleInput} value={location} placeholder="Ex: Rio de Janeiro" />
        </div>
        <div className={styles.row}>
          <Button onClick={this.handleGetCoords}>
            <span className={styles.icon}><Icon.Compass /></span>
            get location
          </Button>
        </div>
        <div className={styles.row}>
          <Button onClick={this.handleSearch}>Search</Button>
        </div>
      </div>
    );
  }
}

LocationInput.propTypes = {
  onSearch: func.isRequired,
  onGetCoords: func.isRequired,
};

export default LocationInput;
