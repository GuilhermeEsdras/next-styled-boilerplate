import { render } from '@testing-library/react';

import Main from './Main';

describe('<Main /> Snapshot Matches', () => {
  it('renders Main unchanged', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
