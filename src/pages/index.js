import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <div>
    <h1>Home</h1>
    <p>Hello Minnesota!</p>
    <Link to="/about">Learn about me &rarr;</Link>
  </div>
);
