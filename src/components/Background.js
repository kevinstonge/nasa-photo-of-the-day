import { memo } from "react";
import { css, jsx, keyframes } from "@emotion/core";
/** @jsx jsx */

const Background = memo(() => {
  const colors = new Array(200)
    .fill(0)
    .map((e) => `hsl(${Math.floor(Math.random() * 360)},80%,90%)`);
  const pulse = (color) => keyframes`0% {
        box-shadow: 0 0 0.01px 0.01px ${color};
      }
      50% {
        box-shadow: 0 0 7px 3px ${color};
      }
      100% {
        box-shadow: 0 0 0.01px 0.01px ${color};
      }`;
  return (
    <div>
      {colors.map((e, i) => (
        <div
          css={css`
            position: fixed;
            top: ${Math.random() * 100}vh;
            left: ${Math.random() * 100}vw;
            background-color: ${e};
            border-radius: 50%;
            width: 1px;
            height: 1px;
            z-index: -10;
            box-shadow: 0 0 0.1rem 0.1rem ${e};
            animation-name: ${pulse(e)};
            animation-duration: 30s;
            animation-delay: -${Math.floor(Math.random() * 30)}s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          `}
          key={`star${i}`}
        ></div>
      ))}
    </div>
  );
});
export default Background;
