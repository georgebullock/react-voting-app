// eslint-disable-next-line
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductList from './ProductList';

// Describe Interactions
describe('Interactions', () => {
	test('It should increment the vote count by one', () => {
		// Arrange - Setup your test
		const { getAllByTestId } = render(<ProductList />);
		const products = getAllByTestId(`product`);
		const firstItem = products[0];
		const votesBeforeClick = parseInt(firstItem.textContent);
		const button = firstItem.querySelector('.link[role]');
		expect(votesBeforeClick).toBeGreaterThan(0);
		expect(votesBeforeClick).toBeLessThan(66);

		// Act - Take some action
		fireEvent.click(button);
		const votesAfterClick = parseInt(firstItem.textContent);

		// Assert - Determine if something is as expected
		expect(votesAfterClick).toEqual(votesBeforeClick + 1);
	});
});
