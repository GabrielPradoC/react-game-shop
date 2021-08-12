import React from 'react';
import styles from './Sorter.module.css';

const Sorter = ({ setSortOption, sortOption }) => {
  const selectChangeHandler = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className={styles['sorter-body']}>
      <label className={styles['sorter-label']} htmlFor="select-sort">
        Ordenar por:
        <span style={{ marginLeft: '5px' }} />
        <select
          id="select-sort"
          onChange={selectChangeHandler}
          value={sortOption}
        >
          <option value="price">preço</option>
          <option value="score">popularidade</option>
          <option value="title">ordem alfabética</option>
        </select>
      </label>

    </div>
  );
};

export default Sorter;
