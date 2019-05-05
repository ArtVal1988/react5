import React, { Fragment } from 'react';
import ProductList from './ProductList';
// eslint-disable-next-line import/namespace
import Panel from './Panel';
import ProfileDetails from './ProfileDetails';
import Mailbox from './Mailbox';
import Dropdown from './Dropdown';
import TechList from './TechList';
import products from '../products.json';
import Button from './Button/Button';

const technologies = [
  { id: 'id-1', name: 'JS' },
  { id: 'id-2', name: 'React' },
  { id: 'id-3', name: 'React Router' },
  { id: 'id-4', name: 'Redux' },
];

const App = () => (
  <Fragment>
    <Button />

    <TechList items={technologies} />

    <Dropdown isOpen />

    <Mailbox
      unreadMessages={['Loldd', 'Wararara', 'Kissisisis', 'lovve lovevv']}
    />

    <Panel title="Some title">
      <ProfileDetails name="Mango" email="mango@mail.com" />
    </Panel>

    <Panel title="Top Products">
      <ProductList items={products} />
    </Panel>
  </Fragment>
);

export default App;
