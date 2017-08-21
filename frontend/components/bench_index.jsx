import React from 'react';
import BenchIndexItem from './bench_index_item';


class BenchIndex extends React.Component {
  componentWillMount() {

    this.props.fetchBenches();

  }

  render() {
    debugger
    const benches = this.props.benches[0];
    // this.props.benches.map((bench, idx) => {
    //   return <BenchIndexItem key={idx} bench={bench}  />;
    // });
    return (
      <ul>
        <BenchIndexItem bench={benches}  />
      </ul>

    );
  }
}

export default BenchIndex;
