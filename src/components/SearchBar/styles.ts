import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

export const ResultList = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
`;

export const ResultCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ContactName = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

export const ContactDetail = styled.p`
  margin: 5px 0;
  font-size: 20px;
  color: #555;
`;

export const ContainerBotoes = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const BotaoRemover = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: red;
  border-radius: 8px;
  margin-right: 8px;
`;

export const BotaoEditar = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 10px;
  cursor: pointer;

  img {
    height: 40px;
    width: 40px;
  }
`;

export const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EditInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

export const EditButton = styled.button<{ cancel?: boolean }>`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ cancel }) => (cancel ? 'gray' : '	#7FFF00')};
`;
