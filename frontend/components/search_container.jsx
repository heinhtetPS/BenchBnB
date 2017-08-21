import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';
import BenchIndex from './bench_index.jsx';
import { asArray } from '../reducers/selectors';
import Search from './search';

const mapStateToProps = (state) => ({
  //benches: selectAllBenches(state.benches)
  benches: state.benches,
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBenches: () => dispatch(fetchBenches()),
});



// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Search);
