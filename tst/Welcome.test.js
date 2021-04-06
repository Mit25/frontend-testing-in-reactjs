import $ from 'jquery';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Welcome from '../src/Components/Welcome';

describe('Counter component', () => {

    it('snapshot testing for Welcome component', () => {
        const tree = renderer.create(<Welcome />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render Welcome component with shallow', () => {
        const wrapper = shallow(<Welcome />);

        expect(wrapper.find('h2').text()).toBe('Hi, Guest!!!');
    });

    it('should render Welcome component getUsername success', () => {
        const wrapper = shallow(<Welcome />);
        const uname = "MyName";
        $.when.mockImplementation(() => {
            return $.Deferred().resolve(uname);
        });
        wrapper.instance().forceUpdate();

        expect(wrapper.find('h2').text()).toBe('Hi, ' + uname + '!!!');
    });

    it('should render Welcome component with shallow', () => {
        const wrapper = shallow(<Welcome />);
        $.when.mockImplementation(() => {
            return $.Deferred().reject();
        });
        wrapper.instance().forceUpdate();

        expect(wrapper.find('h2').text()).toBe('Hi, Stranger!!!');
    });
});