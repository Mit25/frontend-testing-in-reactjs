import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import CounterList from '../src/Components/CounterList';

describe('Counter component', () => {

    it('snapshot testing for Counter component', () => {
        const tree = renderer.create(<CounterList />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render CounterList component with initial one counter', () => {
        const wrapper = shallow(<CounterList />);

        expect(wrapper.find('Counter').length).toBe(1);
    });

    it('should add Counter while clicking on Add button', () => {
        const wrapper = shallow(<CounterList />);

        wrapper.find('#btn-add').simulate('click');
        expect(wrapper.find('Counter').length).toBe(2);
    });

    it('should reset Counter while clicking on Reset button', () => {
        const wrapper = shallow(<CounterList />);

        wrapper.find('#btn-add').simulate('click');
        expect(wrapper.find('Counter').length).toBe(2);

        wrapper.find('#btn-reset').simulate('click');
        expect(wrapper.find('Counter').length).toBe(1);
    });
});