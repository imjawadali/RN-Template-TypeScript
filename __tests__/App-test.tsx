/**
 * @format
 */

jest.useFakeTimers();
import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-gesture-handler', () => {});

it('renders correctly', () => {
  renderer.create(<App />);
});
