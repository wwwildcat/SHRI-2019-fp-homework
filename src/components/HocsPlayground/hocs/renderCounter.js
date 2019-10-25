import React from 'react';

const renderCounter = Component => class extends React.Component {
	render() {
		let value = this.props.counter - 1;
		let counterStyle = {};
		const buttonStyle = {
			position: 'relative'
		};
		if (this.props.decrement) {
			value = this.props.counter;
			counterStyle = {
				color: 'black',
				position: 'absolute',
				left: 55,
				top: -30
			};
		}
		return (
			<Component style={buttonStyle} {...this.props}>
				<span style={counterStyle}>{value + ' '}</span>
				{this.props.children}
			</Component>
			
		);
	}
};
export default renderCounter;