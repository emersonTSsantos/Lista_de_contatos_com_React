import styled from 'styled-components';

export const Button = styled.button`
  --background: red;
  --background-hover: #1E2235;
  --text: #fff;
  --shadow: rgba(0, 9, 61, .2);
  --paper: #00FF00;
  --trash: #E1E6F9;
  --check: #fff;

  position: relative;
  border: none;
  outline: none;
  background: var(--background);
  padding: 18px 24px;
  border-radius: 7px;
  height: 40px;
  width: 150px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  box-shadow: 0 4px 8px var(--shadow);
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
`;

export const Icon = styled.i`
  font-size: 20px;
  color: var(--trash);
  position: absolute;
  transition: opacity 0.3s ease, transform 0.3s ease;

  &.fa-trash-can {
    left: 18px;
  }

  &.fa-rotate-left, &.fa-check {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  &.fa-check {
    color: var(--paper);
  }
`;

export const ButtonText = styled.span`
  margin-left: 50px;
  transition: opacity 0.3s ease;
`;
