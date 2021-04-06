import React from 'react';
import { mount, shallow, render } from 'enzyme';

import App from '../src/Components/App';

describe('App component', () => {

   it('should render App component with shallow', () => {
       const wrapper = shallow(<App />);
       console.log(wrapper.debug());
       expect(wrapper).not.toBeNull();
   });

    it('should render App component with mount', () => {
        const wrapper = mount(<App />);
        console.log(wrapper.debug());
        expect(wrapper).not.toBeNull();
    });

    it('should render App component with render', () => {
        const wrapper = render(<App />);
        console.log(wrapper.html());
        expect(wrapper).not.toBeNull();
    });

});