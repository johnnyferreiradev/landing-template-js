import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: #0005;
  padding-top: 80px;
  top: 0px;
  left: 0px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ModalContent = styled.div`
  opacity: 0;
  width: 100%;
  max-width: 700px;
  transition: all .5s;
`;

const ModalHeader = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ModalBody = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

export {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
};
