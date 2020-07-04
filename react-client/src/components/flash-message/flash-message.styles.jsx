import styled, {css} from 'styled-components';

const errorBackground = css`
  background: lightcoral;
`;

const successBackground = css`
  background: lightgreen;
`;

const setBackground = props => {
  if (props.type === 'success') {
    return successBackground;
  } else {
    return errorBackground;
  }
}

export const FlashMessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 75px;
  top: 0;
  padding: 20px;
  color: white;
  z-index: 1111;
  ${setBackground}
`;

export const CloseIconContainer = styled.span`
  color: white;
  cursor: pointer;
  margin-right: 10px;
`;

export const MessageContainer = styled.p`
  margin: 0;
`;