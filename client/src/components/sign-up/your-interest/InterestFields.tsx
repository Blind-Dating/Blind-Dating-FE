import React from 'react';

type Props = {
  label: string;
  interestings: string[];
};
export const InterestFields = ({ label, interestings }: Props) => {
  return (
    <section className="flex flex-wrap justify-center gap-1.5 mb-4">
      <label
        className="w-full mb-2 text-sm font-medium text-center font-Lora text-labelColor"
        htmlFor={label}
      >
        {label}
      </label>
      {interestings.map((interest) => {
        return (
          <button className="tag px-2.5 py-2" key={interest} type="button" value={interest}>
            {interest}
          </button>
        );
      })}
    </section>
  );
};
