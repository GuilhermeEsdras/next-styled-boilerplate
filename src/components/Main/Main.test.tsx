import { screen } from '@testing-library/react';

import { renderWithTheme } from '@src/utils/tests/helpers';

import Main from './Main';

describe('<Main /> Tests', () => {
  it('should render the heading', () => {
    renderWithTheme(<Main />);

    expect(
      screen.getByRole('heading', { name: /esdras proj initialzer/i })
    ).toBeInTheDocument();
  });

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
