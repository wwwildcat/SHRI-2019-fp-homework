import {withHandlers} from 'recompose';


export default withHandlers({
	onClick: ({setOuterColor, setInnerColor, counter, decrement, reset}) => () => {
		decrement();
		if (counter === 1) {
			reset();
			setOuterColor('orange');
			setInnerColor('orange');
		}
	},
});