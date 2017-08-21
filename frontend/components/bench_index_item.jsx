import React from 'react';


class BenchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let description;
    // if (this.props.bench) {
      description = this.props.bench.description;
      // thisid = this.props.bench.id;
    // } else if (this.props.bench ) {
    //   bench = null;
    // }
    debugger
    return (<li>Bench description:{description}</li>);
  }
}

export default BenchIndexItem;
