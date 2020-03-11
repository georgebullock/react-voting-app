import React from 'react';
import ReactDOM from 'react-dom';
import './../src/app.scss';
import { ProductData } from './../public/data/product-data';

class ProductList extends React.Component {
	state = {
		products: []
	};

	componentDidMount() {
		const products = ProductData.sort((a, b) => {
			return b.votes - a.votes;
		});

		this.setState({ products: [...products] });
	}

	handleUpVote = productId => {
		const state = Object.assign({}, this.state);

		state.products.map(product => {
			if (product.id === productId) {
				product.votes += 1;
			}
		});

		state.products.sort((a, b) => {
			return b.votes - a.votes;
		});

		this.setState(state);
	};

	render() {
		const products = this.state.products;

		const productComps = products.map(product => (
			<Product
				key={`product-${product.id}`}
				id={product.id}
				productTitle={product.title}
				productDescription={product.description}
				url={product.url}
				votes={product.votes}
				userAvatarUrl={product.submitterAvatarUrl}
				productImageUrl={product.productImageUrl}
				onVoteClick={this.handleUpVote}
			/>
		));

		return <div className="ui unstackable items">{productComps}</div>;
	}
}

class Product extends React.Component {
	handleVoteClick = e => {
		e.preventDefault();
		this.props.onVoteClick(this.props.id);
	};

	render() {
		return (
			<div className="item">
				<div className="image">
					<img src={this.props.productImageUrl} />
				</div>
				<div className="middle aligned content">
					<div className="header">
						<a onClick={this.handleVoteClick} href="" className="link">
							<i className="large caret up icon"></i>
						</a>
						{this.props.votes}
					</div>
					<div className="description">
						<a>{this.props.productTitle}</a>
						<p>{this.props.productDescription}</p>
					</div>
					<div className="extra">
						<span>Submitted by:</span>
						<img className="ui avatar image" src={this.props.userAvatarUrl} />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<ProductList />, document.querySelector('#react-entry'));
