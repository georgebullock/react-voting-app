// eslint-disable-next-line
import React from 'react';
import { render } from '@testing-library/react';
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

// Describe Interactions
describe('Interactions', () => {
	test('It should be something deterministic', () => {
		// Arrange - Setup your test
		// Act - Take some action
		// Assert - Determine if something specific is as expected
	});
});

// Describe Events
describe('Events', () => {
	test('It should be something deterministic', () => {
		// Arrange - Setup your test
		// Act - Take some action
		// Assert - Determine if something specific is as expected
	});
});

// Describe Async Events
describe('Async Events', () => {
	test('It should be something', () => {
		// Arrange - Setup your test
		// Act - Take some action
		// Assert - Determine if something specific is as expected
	});
});

// Network Request and Mocks
describe('Network Requests and Mocks', () => {
	test('It should be something', () => {
		// Arrange - Setup your test
		// Act - Take some action
		// Assert - Determine if something specific is as expected
	});
});
