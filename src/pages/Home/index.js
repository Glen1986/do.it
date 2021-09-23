//import { useHistory } from 'reacr-router';
import Button from "../../components/Button";
import { Container, Content } from './styles';

function Home(){

//  const history = useHistory();
  const handleNavigation = (path)=>{
 //   return history.push(path)
  }
  return ( 
    <Container>
      <Content>
        <h1>do<span>.</span>it
        </h1>
        <span>Organize-se de forma facil e efetiva</span>
        <div>
          <Button onClick={()=>handleNavigation("/singup")}>Cadastre-se</Button>
          <button>Logar</button>
        </div>
     </Content>
    </Container>
  );
};

export default Home;
