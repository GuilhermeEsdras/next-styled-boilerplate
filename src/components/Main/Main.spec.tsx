import { render } from '@testing-library/react';
// import { create } from 'react-test-renderer';

import Main from './Main';

describe('<Main /> Snapshot Matches', () => {
  it('renders Main unchanged', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
