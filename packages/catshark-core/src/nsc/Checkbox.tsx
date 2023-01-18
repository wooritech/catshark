import { css } from '@emotion/react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CheckboxProps {}

export const Checkbox: React.FC<CheckboxProps> = () => {
  return (
    <div
      // @ts-ignore
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
      `}
    >
      <div className="nsc-checkbox-state-layer">
        <div className="nsc-checkbox-container">
          asdf
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.59625 11.9062L3.46875 8.77869L2.40375 9.83619L6.59625 14.0287L15.5962 5.02869L14.5387 3.97119L6.59625 11.9062Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
