import { renderWithTheme } from '@utils/tests/helpers';

import Example from './Example';

describe('<Example /> Snapshot Matches', () => {
  it('renders Example unchanged', () => {
    const { container } = renderWithTheme(<Example />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
