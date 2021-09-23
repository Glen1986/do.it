import { useHistory } from 'react-router';
import Button from "../../components/Button";
import { Container, Content } from './styles';

function Home(){

  const history = useHistory();
  const handleNavigation = (path)=>{
   return history.push(path)
  }
  return ( 
    <Container>
      <Content>
        <h1>do<span>.</span>it
        </h1>
        <span>Organize-se de forma facil e efetiva</span>
        <div>
          <Button whiteSchema onClick={()=>handleNavigation("/singup")}>Cadastre-se</Button>
          <Button onClick={()=>handleNavigation("/login")}>Logar</Button>
        </div>
     </Content>
    </Container>
  );
};

export default Home;
