import { render, screen } from '@testing-library/react';

import Main from './Main';

describe('<Main /> Tests', () => {
  it('should render the heading', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /esdras proj initialzer/i })
    ).toBeInTheDocument();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
