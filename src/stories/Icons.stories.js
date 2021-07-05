import React from 'react';
import * as Icons from '../components/Icons';

export default {
    component: Icons,
    title: 'Components/Icons',
  }

export const AllIcons = () => {
    const icons = Object.values(Icons);
    return (icons.map(IconComponent => <IconComponent />))
}