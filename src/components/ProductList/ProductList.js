import React from 'react';
import { ProductData } from './../../../public/data/product-data';
import Product from './../Product/Product';

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

export default ProductList;
