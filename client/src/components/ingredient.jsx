import React from 'react';
import { PropTypes } from 'prop-types';

const Ingredient = props => {
  const { name, amount } = props;

  return (
    <span>
      {name} - {amount}
    </span>
  );
};

export default Ingredient;

Ingredient.prototype = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
