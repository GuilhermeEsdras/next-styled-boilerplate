import { render } from '@testing-library/react';

import Example from './Example';

describe('<Example /> Snapshot Matches', () => {
  it('renders Example unchanged', () => {
    const { container } = render(<Example />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
