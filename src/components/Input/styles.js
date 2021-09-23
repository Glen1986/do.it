import styled from 'styled-components';
 
export const Container = styled.div`
text-align:left;
`;

export const InputContainer = styled.div`
background:var(--white);
border-radius:10px;
border: solid 2px var(--grey);
color:var(--grey);
padding: 1rem;
width:100%;
display:flex;
transition:0.4s;

input{
  background:transparent;
  align-items:center;
  flex:1;
  border:0;
  color:var(--black)
    &::placeholder{
      color:var(--grey)
    }
}
`
