// eslint-disable-next-line
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Product from './Product';

test('It should render Product with the right props', () => {
	const { container, getByText } = render(<Product />);
	expect(getByText(/Submitted by:/i)).toBeInTheDocument();
	expect(container).toMatchInlineSnapshot(`
		<div>
		  <div
		    class="item"
		  >
		    <div
		      class="image"
		    >
		      <img />
		    </div>
		    <div
		      class="middle aligned content"
		    >
		      <div
		        class="header"
		      >
		        <a
		          class="link"
		          href=""
		        >
		          <i
		            class="large caret up icon"
		          />
		        </a>
		      </div>
		      <div
		        class="description"
		      >
		        <a />
		        <p />
		      </div>
		      <div
		        class="extra"
		      >
		        <span>
		          Submitted by:
		        </span>
		        <img
		          class="ui avatar image"
		        />
		      </div>
		    </div>
		  </div>
		</div>
	`);
});
