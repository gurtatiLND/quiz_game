import React from 'react';
import {
    render,
    waitFor,
} from '@testing-library/react';
import Questions from '../Components/Questions';
import fetchQuestions from '../api/fetchQuestions';

jest.mock('../api/fetchQuestions');

// mocked data
const difficultyTest = 'easy';
const categoryTest = 'books';

describe('Questions', () => {
    beforeEach(() => {
        fetchQuestions.mockResolvedValue(require('./mockedQuestions.json'));
    });
  
    test("presence of the class 'questions'", () => {
        const {container} = render(<Questions difficulty={difficultyTest}  category={categoryTest}/>);
        //  screen.getByText(/Question 1/i)
        expect(container.querySelector('.questions')).toBeInTheDocument();
    });
    

    test("showing loaded questions", async () => {
        const {container} = render(<Questions difficulty={difficultyTest}  category={categoryTest}/>);
        await waitFor(() => {
            expect(container.querySelector('.question')).toBeInTheDocument();
        });
    });
});



