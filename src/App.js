// import { connect } from 'react-redux';
import './App.css';
import {useDispatch , useSelector} from "react-redux"
import { increment } from './JS/actions/counteractions';

function App() {
// function App({count , increment}) {

  const dispatch = useDispatch()
  const count = useSelector(state => state.counterReducer.count)
  return (
    <div className="App">

      {/* <button onClick={()=>increment()}>+</button> */}
      <button onClick={()=>dispatch(increment())}>+</button>
      <span>{count}</span>
      <button>-</button>
  
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   count : state.count
// })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // dispatching plain actions
//     increment: () => dispatch({ type: 'INCREMENT' }),
//   }
// }

// export default connect(mapStateToProps , mapDispatchToProps(increment))(App);
export default (App);
