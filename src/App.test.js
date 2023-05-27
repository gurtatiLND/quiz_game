import React from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import StartPage from './Pages/StartPage'
import ChooseCategory from './Pages/ChooseCategory'
import { categories } from './Utils/categories'
import { MemoryRouter } from 'react-router-dom'

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedUsedNavigate
}));

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

test('start button takes user to the ChooseCategory page', () => {
  render(
    <MemoryRouter>
      <StartPage />
    </MemoryRouter>
  );
  const startButton = screen.getByRole('button', { name: /start/i });
  fireEvent.click(startButton);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("category", {"state": "Player"});
});

test('Choosing a category (General) takes user to the ChooseDifficulty page', () => {
  const mockedHandleChooseCategory = jest.fn()
  render(
    <MemoryRouter>
      <ChooseCategory handleChooseCategory={mockedHandleChooseCategory}/>
    </MemoryRouter>
  );
  const generalCategoryButton = screen.queryByTestId("generalCategoryButton");
  fireEvent.click(generalCategoryButton);
  //expect(categories["general"]).toBe(9);
  expect(mockedHandleChooseCategory).toHaveBeenCalled();
  expect(mockedUsedNavigate).toHaveBeenCalledWith('difficulty', { state: generalCategory });
});
