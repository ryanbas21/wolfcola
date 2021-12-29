import React from 'react';
import { render } from '@testing-library/react';
// leave this here so it gets bundled
import { run } from 'cypress';

import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index allPosts={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
