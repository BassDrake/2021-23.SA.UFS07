import React from 'react';

import { Input } from '../src/atoms/input/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const InputText = Template.bind({});
InputText.args = {
  placeholder: 'A placeholder text',
  onData: undefined,
  isValid: undefined,
  type: 'text',
  id: 'iText'
};

export const InputRadio = Template.bind({});
InputRadio.args = {
  placeholder: undefined,
  onData: undefined,
  isValid: undefined,
  type: 'radio',
  id: 'iRadio',
  label: 'Button'
};
