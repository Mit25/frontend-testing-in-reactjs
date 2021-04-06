import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Counter from '../src/Components/Counter';

describe('Counter component', () => {

    it('snapshot testing for Counter component', () => {
        const tree = renderer.create(<Counter />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render Counter component with initial counter', () => {
        const wrapper = shallow(<Counter />);

        expect(wrapper.find('#spn-count').text()).toBe('0');
    });

    describe('testing button functionality', () => {

        it('should increment counter on Increment button click asssert via state', () => {
            const wrapper = shallow(<Counter />);
            wrapper.find('#btn-increment').simulate('click');

            /*
             * This is not good way to test.
             *
             * Since we only assert internal state value that does not guarantee that it will display correct thing
             * on webpage.
             */
            expect(wrapper.state('count')).toBe(1);
        });

        it('should increment counter on Increment button click', () => {
            const wrapper = shallow(<Counter />);
            wrapper.find('#btn-increment').simulate('click');

            expect(wrapper.find('#spn-count').text()).toBe('1');
        });

        it('should decrement counter on Decrement button click', () => {
            const wrapper = shallow(<Counter />);
            wrapper.find('#btn-decrement').simulate('click');

            expect(wrapper.find('#spn-count').text()).toBe('-1');
        });

        it('should reset counter on Reset button click', () => {
            const wrapper = shallow(<Counter />);

            wrapper.find('#btn-increment').simulate('click');
            expect(wrapper.find('#spn-count').text()).toBe('1');

            wrapper.find('#btn-reset').simulate('click');
            expect(wrapper.find('#spn-count').text()).toBe('0');
        });
    });
});