import { render, screen } from '@testing-library/react';

import Example from './Example';

describe('<Example /> Tests', () => {
  it('should render the heading', () => {
    render(<Example />);

    expect(
      screen.getByRole('heading', { name: /Example/i })
    ).toBeInTheDocument();
  });
});
