'use client';

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      Error - {error.message} <br />
      Name - {error.name} <br />
      Stack - {error.stack} <br />
      <button onClick={reset}>Try again!</button>
    </div>
  );
};

export default error;
