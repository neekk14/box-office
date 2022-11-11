import React from 'react';
import { Link } from 'react-router-dom';

const nave = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/starred"> Go to starred</Link>
        </li>
      </ul>
    </div>
  );
};

export default nave;
