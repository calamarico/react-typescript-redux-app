/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../src/components/Login';
import '@testing-library/jest-dom';

test('Render login component', async () => {
  const component = renderer.create(
    <Login />,
  );

  expect(component.root.findByProps({ className: 'login' }).type).toBe('div');
});
