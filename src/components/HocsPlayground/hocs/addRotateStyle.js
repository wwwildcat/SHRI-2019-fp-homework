import {compose, withState, withHandlers} from 'recompose';

export default compose(
	withState('style', 'setStyle', {
		display: 'inline-block',
		transform: 'rotate()'
	}),
	withHandlers({
		rotate: ({setStyle, counter}) => () => setStyle({
			display: 'inline-block',
			transform: 'rotate(' + counter * (-30) + 'deg)'
		})
	})
);