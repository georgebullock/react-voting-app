import React from 'react';
import ReactDOM from 'react-dom';
import './../src/app.scss';

class Product extends React.Component {
	render() {
		return <div>Hello, World</div>;
	}
}

ReactDOM.render(<Product />, document.querySelector('#react-entry'));
