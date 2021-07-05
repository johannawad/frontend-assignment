import React from 'react';
import DropdownMenu from '../components/DropdownMenu';


export default {
  component: DropdownMenu,
  title: 'Components/DropdownMenu',
}

export const Primary = () => <DropdownMenu items={[{title: 'Example 1', quantity: 6}, {title: 'Example 2', quantity: 7}]}/>;