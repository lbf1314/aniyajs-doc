import React from 'react';
import { Switch } from 'antd';
import type { SwitchProps } from 'antd/lib/switch';

export interface ASwitchNormalPropsType {
  value?: boolean;
  onChange?: (value: any) => void;
  widgetProps?: SwitchProps
}

const ASwitchItem: React.FC<ASwitchNormalPropsType> = (props) => {
  const { value, onChange, widgetProps } = props;

  const onSwitchChange = (checked: boolean) => {
    if (onChange) {
      onChange(checked);
    }
  };

  return (
    <Switch checked={value} onChange={onSwitchChange} {...widgetProps} />
  );
};

export default ASwitchItem;
