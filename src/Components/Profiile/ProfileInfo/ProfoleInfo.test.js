// ProfileInfo.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileInfo from './ProfileInfo';

test('renders profile image from props', () => {
    const fakeProfile = {
        photos: {
            large: 'https://example.com/profile.jpg'
        }
    };

    render(<ProfileInfo profile={fakeProfile} status="Busy" updateStatus={() => {}} />);
    const profileImg = screen.getByRole('img', { name: '' }); // если есть alt, можно указать его
    expect(profileImg).toHaveAttribute('src', 'https://example.com/profile.jpg');
});
