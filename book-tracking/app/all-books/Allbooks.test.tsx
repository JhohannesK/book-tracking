import React from 'react';
import { describe, test, expect, it, vi } from 'vitest';
import AllBooks from './page';
import { render, screen } from '@testing-library/react';

describe('AllBooks component', () => {
	it('renders book cards', async () => {
		vi.stubGlobal('fetch', () =>
			Promise.resolve({
				json: () =>
					Promise.resolve([
						{ id: 1, title: 'Refactoring', status: 'to-read' },
						{ id: 2, title: 'Domain-driven design', status: 'completed' },
					]),
			})
		);

		render(<AllBooks />);
		await screen.findByText('Refactoring');
		await screen.findByText('Domain-driven design');
		expect(screen.getByText('Refactoring'));
	});
});
