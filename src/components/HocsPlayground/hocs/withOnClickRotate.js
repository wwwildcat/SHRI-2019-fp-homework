import {withHandlers} from 'recompose';

const colors = ['red', 'blue', 'green', 'gray', 'orange', 'yellow', 'pink', 'black', 'cyan'];

export default withHandlers({
	onClick: ({setOuterColor, setInnerColor, counter, increment, rotate}) => () => {
		increment();
		rotate();
		if (counter % 12 === 0) {
			const color1 = colors[Math.floor(Math.random()*colors.length)];
			const color2 = colors[Math.floor(Math.random()*colors.length)];
			setOuterColor(color1);
			setInnerColor(color2);
		}
	},
});