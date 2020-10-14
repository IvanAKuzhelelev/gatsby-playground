import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello Memphis</p>
    <Link to="/about">&rarr; Learn about me</Link>
  </Layout>
);
