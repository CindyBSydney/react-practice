//avoid contradictions in state
import React, { useState } from 'react';

export default function FeedbackForm(): JSX.Element {
  // The text state holds the message the user is typing.
  const [text, setText] = useState<string>('');
  // The isSending state indicates if the message is being sent.
  const [isSending, setIsSending] = useState<boolean>(false);
  // The isSent state indicates if the message has been sent.
  const [isSent, setIsSent] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault(); // Prevent the form from being submitted
    setIsSending(true); // Indicate that the message is being sent
    await sendMessage(text); // Send the message
    setIsSending(false); // Indicate that the message has been sent
    setIsSent(true); // Indicate that the message has been sent
  }

  if (isSent) {
    // If the message has been sent, show a thank you message.
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending} // Disable the textarea while the message is being sent
        value={text} // Bind the value of the textarea to the text state
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
      />
      <br />
      <button
        disabled={isSending || text.trim().length === 0} // Prevent sending empty messages
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Pretend to send a message.
function sendMessage(text: string): Promise<void> { //this function sends the message and returns a promise
  return new Promise((resolve) => { //a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
    setTimeout(resolve, 2000); // Simulates a network request
  });
}
