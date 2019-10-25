import React from 'react';

const addButtonStyle = Component => class extends React.Component {
	render() {
		return <Component style={this.props.style} {...this.props}/>;
	}
};

export default addButtonStyle;