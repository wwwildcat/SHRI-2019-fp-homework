import {compose, withState, withHandlers} from 'recompose';


export default compose(
	withState('counter', 'setCounter', 1),
	withHandlers({
		increment: ({setCounter}) => () => setCounter(n => n + 1)
	})
);
