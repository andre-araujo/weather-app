function fahrenheitToCelcius(temperature) {
  if (typeof temperature === 'string' || typeof temperature === 'number') {
    return Math.round((parseFloat(temperature) - 32) / 1.8);
  }

  return temperature;
}

export default fahrenheitToCelcius;
