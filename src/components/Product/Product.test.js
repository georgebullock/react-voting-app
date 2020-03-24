// eslint-disable-next-line
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Product from './Product';

const createTestProps = props => {
	return {
		// common props
		id: `SKU-1000`,
		productTitle: `Lightsaber`,
		productDescription: 'A sword made of light.',
		productImageUrl: `/productImageUrl`,
		votes: 999,
		userAvatarUrl: `/avatarImageUrl`,
		onVoteClick: jest.fn(),

		// override common props if necessary
		...props
	};
};

// Describe Rendering
describe('Rendering', () => {
	test('It should render the right props', () => {
		// Arrange - Setup your test
		const props = createTestProps();
		const productID = props.id;

		// Act - Take some action
		const { getByText, getByAltText } = render(<Product {...props} />);

		// Assert - Determine if something is as expected
		expect(productID).toBe(`SKU-1000`);
		expect(getByText(/Lightsaber/i)).toBeInTheDocument();
		expect(getByText(/A sword made of light./i)).toBeInTheDocument();
		expect(getByAltText(`product image`)).toHaveAttribute(
			'src',
			expect.stringMatching(`/productImageUrl`)
		);
		expect(getByText(`999`)).toBeInTheDocument();
		expect(getByAltText(`user image`)).toHaveAttribute(
			'src',
			expect.stringMatching(`/avatarImageUrl`)
		);
	});
});

// Describe Events
describe('Events', () => {
	test('It should have been called 1 time', () => {
		// Arrange - Setup your test
		const props = createTestProps();
		const { getByRole } = render(<Product {...props} />);

		// Act - Take some action
		fireEvent.click(getByRole('button'));

		// Assert - Determine if something specific is as expected
		expect(props.onVoteClick).toHaveBeenCalledTimes(1);
	});
});
