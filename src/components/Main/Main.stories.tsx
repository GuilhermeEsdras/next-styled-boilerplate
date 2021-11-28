import { Story, Meta } from '@storybook/react/types-6-0';

import Main from './Main';

const meta: Meta = {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default title',
    description: 'Default description',
  },
};

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  title: 'Basic title',
  description: 'Basic description',
};

export const Default: Story = (args) => <Main {...args} />;

export default meta;
