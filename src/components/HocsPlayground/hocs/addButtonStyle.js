import React from 'react';

const addButtonStyle = Component => class extends React.Component {
	render() {
		return (<div style={this.props.style}>
			<Component {...this.props}/>
		</div>);
	}
};

export default addButtonStyle;