import styled from "styled-components";
import handCursor from "../../../src/hand.png";

const colors = {
  bg1: "#000",
  bg2: "#222",
  fg1: "#eee",
  fg2: "#aea",
  fg3: "#eae",
};

const glowBox = (glowColor) => {
  return `box-shadow: -0.1rem -0.1rem 0.8rem 0 ${glowColor}, inset -0.1rem -0.1rem 0.1rem 0 ${glowColor}, inset 0.1rem 0.1rem 0.1rem 0 ${glowColor};`;
};
const glowBoxHover = (glowColor) => {
  return `box-shadow: -0.1rem -0.1rem 1.5rem ${glowColor},
        inset -0.1rem -0.1rem 0.1rem ${glowColor},
        inset 0.1rem 0.1rem 0.1rem ${glowColor},
        -0.1rem -0.1rem 0.5rem rgba(255,255,255,0.5)`;
};

export const StyledButton = styled.p`
  background-color: #222;
  color: #aea;
  padding: 0.5rem 1rem;
  border-radius: 50%;
  ${glowBox(colors.fg3)}
  &.enabled {
    cursor: url(${handCursor}), pointer;
    &:hover {
      ${glowBoxHover(colors.fg3)}
    }
  }
  &:not(.enabled) {
    ${glowBox("rgba(0, 0, 0, 0)")}
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
`;
