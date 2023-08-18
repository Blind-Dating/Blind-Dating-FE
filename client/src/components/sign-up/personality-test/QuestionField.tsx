import React from 'react';

type Props = {
  question: string;
  index: number;
};

export const QuestionField = ({ question, index }: Props) => {
  return (
    <section className="space-y-4">
      <p className="font-medium text-start text-s text-black/80 font-Lora">
        {index}. {question}
      </p>
      <div className="flex justify-center gap-2.5">
        <button type="button" className="btn-sm-YesOrNo">
          Yes
        </button>
        <button type="button" className="btn-sm-YesOrNo">
          No
        </button>
      </div>
    </section>
  );
};
