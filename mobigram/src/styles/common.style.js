import { css } from "styled-components";

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const FlexJustifyCenter = css`
  display: flex;
  justify-content: center;
`;

export const PositionCenter = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PositionXCenter = css`
  top: 50%;
  transform: translateX(-50%);
`;

export const PositionYCenter = css`
  left: 50%;
  transform: translateY(-50%);
`;
