import React from 'react';


class BenchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return (<li>description:{this.props.bench.description}</li>);
  }
}

export default BenchIndexItem;
