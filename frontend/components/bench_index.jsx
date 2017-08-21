import React from 'react';
import BenchIndexItem from './bench_index_item';
import { isEmpty } from 'lodash';


class BenchIndex extends React.Component {
  componentDidMount() {

    this.props.fetchBenches();
  }

  render() {
    // let benches = null;
    debugger
    //Benches initializes as {}
    // in order to avoid rendering before we have data, we need to do this conditional
    // if (_.isEmpty(this.props.benches)) {
    //   benches = null;
    // } else {

    //Instead of messing with conditional, its better to convert to array as it is coming from the invisible world
    //Here it has already been converted by the selector, state is still obj
      const benches = this.props.benches.map(bench => {
        return (<BenchIndexItem key={bench.id} bench={bench}  />);
      });
    // }
    debugger
    return (
      <ul>
        {benches}
      </ul>

    );
  }
}

export default BenchIndex;
