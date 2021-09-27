/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";

import { Select } from "antd";
const { Option } = Select;
export default function Sort({ onSortChange, value }) {
  return (
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={onSortChange}
      value={value}
      style={{   width: 180}}
    >
      <Option value={10}>Up</Option>
      <Option value={20}>Down</Option>
    </Select>
  );
}
