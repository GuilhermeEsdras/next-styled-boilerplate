import { Story, Meta } from '@storybook/react/types-6-0';

import Example from './Example';

const meta: Meta = {
  title: 'Example',
  component: Example,
  args: {
    title: 'Default title',
    description: 'Default description',
  },
};

export const Basic: Story = (args) => <Example {...args} />;
Basic.args = {
  title: 'Basic title',
  description: 'Basic description',
};

export const Default: Story = (args) => <Example {...args} />;

export default meta;
