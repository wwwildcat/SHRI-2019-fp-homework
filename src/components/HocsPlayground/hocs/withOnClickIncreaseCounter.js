import {withHandlers} from 'recompose';


export default withHandlers({
	onClick: ({setOuterColor, setInnerColor, counter, increment}) => () => {
		increment();
		const color = counter % 2 ? 'green' : 'gray';
		setOuterColor(color);
		setInnerColor(color);
	},
});