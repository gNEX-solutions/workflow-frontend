import styled from 'styled-components';
// import { Button } from 'reactstrap';

const ButtonContainer = styled.button`
  /* text-transform: capitalize; */
  font-size: 1.4rem;
  background: var(--lightBlue);
  border: 0.05rem solid var(--lightBlue);
  border-color: var(--lightBlue);
  /* color: ${props =>
    props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'}; */
  color: var(--mainBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  curser: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  /* transition: all 0.5s ease-in-out; */
  /* &:hover {
    background: ${props =>
    props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
    color: var(--mainBlue);
  } */
  /* &:focus {
    outline: none;
  } */
`;

const test = styled.div``;

export { ButtonContainer, test };
