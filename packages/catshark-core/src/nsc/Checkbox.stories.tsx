import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from './Checkbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'nsc/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Checked = Template.bind({});
Checked.args = {};
