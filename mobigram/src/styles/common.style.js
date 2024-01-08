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

export const FlexLeft = css`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
`;

export const PositionCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PositionXCenter = css`
  position: absolute;
  top: 50%;
  transform: translateX(-50%);
`;

export const PositionYCenter = css`
  position: absolute;
  left: 50%;
  transform: translateY(-50%);
`;
