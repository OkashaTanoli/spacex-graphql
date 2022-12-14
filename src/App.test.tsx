import React from 'react';
import App from './App';
import { shallow, ShallowWrapper } from 'enzyme'

test('should run Main component', () => {
  let component:ShallowWrapper<{}, {}, React.Component<{}, {}, any>> = shallow(<App />)
  expect(component.find('Main').length).toBe(1)
});
