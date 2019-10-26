import React from 'react';

const renderCounter = Component => class extends React.Component {
	render() {
		let value = this.props.counter - 1;
		let counterStyle = {};
		const buttonStyle = {
			display: 'inline-block',
			marginRight: 15,
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
			<div style={buttonStyle}>
				<Component {...this.props}>
					<span style={counterStyle}>{value + ' '}</span>
					{this.props.children}
				</Component>
			</div>
		);
	}
};
export default renderCounter;