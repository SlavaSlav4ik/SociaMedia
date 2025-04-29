import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './Profile';
import '@testing-library/jest-dom';

// 1. Проверка, что отображается Preloader, если нет props.profile
test('renders Preloader if profile is null', () => {
    render(<Profile profile={null} />);
    expect(screen.getByAltText(/loading/i)).toBeInTheDocument();
});

// 2. Проверка, что отображается ProfileInfo, если есть profile
test('renders ProfileInfo and MyPostContainer if profile exists', () => {
    const mockProfile = {
        photos: { large: 'https://example.com/image.jpg' },
        fullName: 'Test User',
    };

    render(
        <Profile
            profile={mockProfile}
            status="Hello"
            updateStatus={() => {}}
        />
    );

    expect(screen.getByText(/ava\+description/i)).toBeInTheDocument();
});
