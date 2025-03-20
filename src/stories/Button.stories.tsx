import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

type ButtonProps = {
  label: string;
  primary?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, primary }) => {
  return (
    <button
      className={`px-4 py-2 rounded ${
        primary ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
      }`}
    >
      {label}
    </button>
  );
};

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Click me",
    primary: true,
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    primary: false,
  },
};
