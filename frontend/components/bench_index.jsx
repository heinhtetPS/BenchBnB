import React from 'react';
import BenchIndexItem from './bench_index_item';
import { isEmpty } from 'lodash';


class BenchIndex extends React.Component {
  componentDidMount() {

    this.props.fetchBenches();
  }

  render() {
    let benches = null;

    //Benches initializes as {}
    // in order to avoid rendering before we have data, we need to do this conditional
    // if (_.isEmpty(this.props.benches)) {
    //   benches = null;
    // } else {
      benches = this.props.benches.map(bench => {
        return (<BenchIndexItem key={bench.id} bench={bench}  />);
      });
    // }
    return (
      <ul>
        {benches}
      </ul>

    );
  }
}

export default BenchIndex;
