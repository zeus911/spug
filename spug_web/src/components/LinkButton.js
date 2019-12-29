import React from 'react';
import { Button } from 'antd';
import { hasPermission } from 'libs';


export default function LinkButton(props) {
  let disabled = props.disabled;
  if (props.auth && !hasPermission(props.auth)) {
    disabled = true;
  }
  return <Button {...props} type="link" style={{padding: 0}} disabled={disabled}>
    {props.children}
  </Button>
}