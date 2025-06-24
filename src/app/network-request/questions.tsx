'use client';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Alert, Box, Button, CircularProgress } from '@mui/material';
import { useState } from 'react';

interface IResponse {
  response_code: number;
  results: IQuestion[];
}

interface IQuestion {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface ISlimQuestion {
  question: string;
  answer: string;
}

const decodeBase64 = (input: string) =>
  Buffer.from(input, 'base64').toString('utf-8');

const handleGetQuestionClick = async (): Promise<ISlimQuestion | void> => {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 6) + 7 * 1000),
  );

  const response = await fetch(
    'https://opentdb.com/api.php?amount=1&type=multiple&encode=base64',
  );

  if (!response.ok) {
    return;
  }

  const body: IResponse = await response.json();

  if (!body.results.length) {
    return;
  }

  const [{ question, correct_answer }] = body.results;

  return {
    question: decodeBase64(question),
    answer: decodeBase64(correct_answer),
  };
};

export const Questions = () => {
  const [question, setQuestion] = useState<ISlimQuestion | undefined>();
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Button
        variant="contained"
        fullWidth
        onClick={async () => {
          setQuestion(undefined);
          setShowAnswer(false);
          setLoading(true);
          setError(false);

          const question = await handleGetQuestionClick();

          if (!question) {
            setLoading(false);
            setError(true);
            return;
          }

          setQuestion(question);
          setLoading(false);
        }}
      >
        {loading ? (
          <CircularProgress size="1.5rem" sx={{ color: '#FFFFFF' }} />
        ) : (
          'Get a question'
        )}
      </Button>
      {question && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Alert
            severity="info"
            sx={{ flexGrow: 1 }}
            onClose={() => {
              setQuestion(undefined);
              setShowAnswer(false);
            }}
            icon={<HelpOutlineIcon />}
          >
            {question.question}
          </Alert>
          {showAnswer ? (
            <Alert severity="success" sx={{ flexGrow: 1 }}>
              {question.answer}
            </Alert>
          ) : (
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                setShowAnswer(true);
              }}
            >
              Reveal answer
            </Button>
          )}
        </Box>
      )}
      {error && (
        <Alert
          severity="error"
          sx={{ flexGrow: 1 }}
          onClose={() => {
            setError(false);
          }}
        >
          Failed to fetch a question, please try again
        </Alert>
      )}
    </Box>
  );
};
