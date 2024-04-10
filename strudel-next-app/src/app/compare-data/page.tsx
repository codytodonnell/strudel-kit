'use client'

import React, { PropsWithChildren } from 'react';
import { ScenarioList } from './ScenarioList';

/**
 * 
 */
const ListPage: React.FC<PropsWithChildren> = ({ children }) => {
  /**
   * Content to render on the page for this component
   */
  return (
    <ScenarioList />
  )
}

export default ListPage;