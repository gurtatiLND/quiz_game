const fetchQuestions = async ({
    category,
    difficulty,
}) => {
    const TRIVIA_API_URL = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`;
    const response = await fetch(TRIVIA_API_URL);
    const data = await response.json();

    return data;
};

export default fetchQuestions;
