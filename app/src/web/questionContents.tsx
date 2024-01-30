import { useState } from "react";

export function QuestionContents({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-2">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {question}
      </button>
      {isOpen ? (
        <div className="whitespace-pre-wrap text-sm p-4 mb-5">{answer}</div>
      ) : null}
    </div>
  );
}
