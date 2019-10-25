import {compose, withState, withHandlers} from 'recompose';


export default compose(
	withState('counter', 'setCounter', 5),
	withHandlers({
		decrement: ({setCounter}) => () => setCounter(n => n - 1),
		reset: ({setCounter}) => () => setCounter(5)
	})
);