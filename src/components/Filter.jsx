import React, { useContext } from 'react';
import { FilterContext } from '../services/FilterContext';

const Filter = () => {
  const [, setFilter] = useContext(FilterContext);

  return (
    <ul style={{ listStyle: 'none' }}>
      <li onClick={() => setFilter('all')} style={{ display: 'inline', padding: '5px' }}>All</li>
      <li onClick={() => setFilter('inProgress')} style={{ display: 'inline', padding: '5px' }}>In Progreess</li>
      <li onClick={() => setFilter('done')} style={{ display: 'inline', padding: '5px' }}>Done</li>
    </ul>
  );
}

export default Filter;