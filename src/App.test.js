import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StartPage from './Pages/StartPage'
import { MemoryRouter } from 'react-router-dom';


test('renders StartPage component', () => {
  render(
    <MemoryRouter>
      <StartPage />
    </MemoryRouter>
  );
  const startButton = screen.getByRole('button', { name: /start/i });
  expect(startButton).toBeInTheDocument();
});

test('input field updates the name state', () => {
  render(
    <MemoryRouter>
      <StartPage />
    </MemoryRouter>
  );
  const nameInput = screen.getByPlaceholderText('Enter your name');
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  expect(nameInput.value).toBe('John Doe');
});

