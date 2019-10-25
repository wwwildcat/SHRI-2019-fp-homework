import {compose, withState, withHandlers} from 'recompose';

export default compose(
	withState('style', 'setStyle', {
		transform: 'rotate()'
	}),
	withHandlers({
		rotate: ({setStyle, counter}) => () => setStyle({
			transform: 'rotate(' + counter * (-30) + 'deg)'
		})
	})
);