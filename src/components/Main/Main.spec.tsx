import { renderWithTheme } from '@src/utils/tests/helpers';

import Main from './Main';

describe('<Main /> Snapshot Matches', () => {
  it('renders Main unchanged', () => {
    const { container } = renderWithTheme(<Main />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
