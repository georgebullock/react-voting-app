//@flow
import React from 'react';

type Props = {
	id: number,
	productTitle: string,
	productDescription: string,
	productImageUrl: string,
	votes: Function,
	userAvatarUrl: string,
	onVoteClick: Function
};

type EventObject = {
	preventDefault: Function
};

class Product extends React.Component<Props> {
	handleVoteClick = (e: EventObject) => {
		e.preventDefault();
		this.props.onVoteClick(this.props.id);
	};

	render() {
		return (
			<div className="item">
				<div className="image">
					<img src={this.props.productImageUrl} alt="product image" />
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
						<img
							className="ui avatar image"
							src={this.props.userAvatarUrl}
							alt="user image"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Product;
