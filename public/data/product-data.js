// @flow

import { generateVoteCount } from '../../src/helpers/generate-vote-count/generate-vote-count';

export const ProductData: Array<Object> = [
	{
		id: 1,
		title: 'Yellow Pail',
		description: 'On-demand sand castle construction expertise.',
		url: '#',
		votes: generateVoteCount(),
		submitterAvatarUrl: 'public/images/avatars/daniel.jpg',
		productImageUrl: 'public/images/products/image-aqua.png'
	},
	{
		id: 2,
		title: 'Supermajority: The Fantasy Congress League',
		description: 'Earn points when your favorite politicians pass legislation.',
		url: '#',
		votes: generateVoteCount(),
		submitterAvatarUrl: 'public/images/avatars/kristy.png',
		productImageUrl: 'public/images/products/image-rose.png'
	},
	{
		id: 3,
		title: 'Tinfoild: Tailored tinfoil hats',
		description: 'We already have your measurements and shipping address.',
		url: '#',
		votes: generateVoteCount(),
		submitterAvatarUrl: 'public/images/avatars/veronika.jpg',
		productImageUrl: 'public/images/products/image-steel.png'
	},
	{
		id: 4,
		title: 'Haught or Naught',
		description: 'High-minded or absent-minded? You decide.',
		url: '#',
		votes: generateVoteCount(),
		submitterAvatarUrl: 'public/images/avatars/molly.png',
		productImageUrl: 'public/images/products/image-yellow.png'
	}
];
