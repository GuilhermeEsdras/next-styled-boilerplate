import renderer from 'react-test-renderer';

import Main from './Main';

it('renders Main unchanged', () => {
  const tree = renderer.create(<Main />).toJSON();
  expect(tree).toMatchSnapshot();
});
