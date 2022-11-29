import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});

Base.args = {
  label: "button",
  style: { backgroundColor: "red" },
} as ButtonProps;
