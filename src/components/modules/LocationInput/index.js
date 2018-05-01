import React, { Component } from 'react';
import { func, string } from 'prop-types';

import styles from './styles.less';
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
    }, (error) => {
      onGetCoords({
        error,
      });
    });
  }

  handleSearch = (e) => {
    const { onSearch } = this.props;
    e.preventDefault();

    onSearch(this.state.location);
  }

  render() {
    const { location } = this.state;

    return (
      <form className={styles.container} onSubmit={this.handleSearch}>
        <div className={styles.row}>
          <input className={styles.input} type="text" onChange={this.handleInput} value={location} placeholder="Ex: Rio de Janeiro" />
        </div>
        {this.props.error && (
          <div className={styles.row}>
            <p className={styles.error}>{this.props.error}</p>
          </div>
        )}
        <div className={styles.row}>
          <Button type="button" onClick={this.handleGetCoords} data-test="LocationInput_GetCoords">
            <span className={styles.icon}><Icon.Compass /></span>
            get location
          </Button>
        </div>
        <div className={styles.row}>
          <Button type="submit">Search</Button>
        </div>
      </form>
    );
  }
}

LocationInput.defaultProps = {
  error: null,
};

LocationInput.propTypes = {
  error: string,
  onSearch: func.isRequired,
  onGetCoords: func.isRequired,
};

export default LocationInput;
