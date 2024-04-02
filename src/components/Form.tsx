import React, { useState } from 'react';

type StatusType = 'typing' | 'submitting' | 'success';

export default function Form(): JSX.Element {
  const [answer, setAnswer] = useState<string>('');//this state should hold string data
  const [error, setError] = useState<Error | null>(null); // holds both an error object and null to accommodate for absence of an error
  const [status, setStatus] = useState<StatusType>('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      if (err instanceof Error) { //checks if the error is an instance of the Error object
        setStatus('typing'); //sets the status to typing
        setError(err); //sets the error state to the error object
      }
    }
  }

  function handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setAnswer(e.target.value); //sets the answer state to the value of the textarea
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
            answer.length === 0 || 
            status === 'submitting'
        }>
          Submit
        </button>
        {error !== null && 
            <p className="Error">   
                {error.message} 
            </p>
        }
      </form>
    </>
  );
}

function submitForm(answer: string): Promise<void> {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

