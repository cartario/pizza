import React, { memo, useMemo } from 'react';
import Pizza from '../components/pizza';
import Categories from '../components/categories';
import Sort from '../components/sort';
import { useSelector } from 'react-redux';

const Home = () => {
  const items = useSelector((state) => state.pizzas.items);

  return (
    <div className="container">
      <div className="filter-group">
        <Categories />
        <Sort />
      </div>
      <section className="content-group">
        <h2>Все пиццы</h2>
        <ul className="pizzas">
          {items && items.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
        </ul>
      </section>
    </div>
  );
};

export default React.memo(Home);