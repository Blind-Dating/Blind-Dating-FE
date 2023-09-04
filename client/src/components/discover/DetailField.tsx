import { QUESTIONS } from 'assets/config';
import React from 'react';
type Question = {
  id: number;
  status: boolean;
};

type Props = {
  answer: Question[];
};
export const DetailField = ({ answer }: Props) => {
  return (
    <div className="overflow-auto">
      {QUESTIONS.map((question, index) => {
        return (
          <div key={index}>
            <div className="text-s">{question}</div>
            <div>
              <button className={`${answer ? 'btn-YesOrNo-selected' : 'btn-YesOrNo'}`}>Yes</button>
              <button className={`${answer ? 'btn-YesOrNo' : 'btn-YesOrNo-selected'}`}>No</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
