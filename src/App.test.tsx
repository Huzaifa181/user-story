import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout'
import App from './App';
test('renders the component', () => {
  const component = shallow(<App/>);
  expect(component.find(Layout));
});