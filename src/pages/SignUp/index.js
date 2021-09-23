import { AnimationContainer, Container, Background, Content } from './styles'
import Button from '../../components/Button';
import Input  from '../../components/Input';
import {Link} from 'react-router-dom';
import {FiUser, FiMail, FiLock } from 'react-icons/fi';

const SignUp =()=>{
  return(
      <Container>
        <Background />
          <Content>
            <AnimationContainer>
              <form >
                <h1>Cadastro</h1>
                <Input
                  icon={FiUser}
                label = "Nome" 
                placeholder= "seu nome"
                />
                <Input 
                  icon={FiMail}
                label = "Emai" 
                placeholder= "seu email"
                />
                <Input 
                  icon={FiLock}
                label = "Password" 
                placeholder= "password"
                />
                <Input 
                  icon={FiLock}
                label = "confirmar Password" 
                placeholder= "confirmar password"
                />
              </form>
              <Button>Enviar</Button>
                <p>Ja tem una conta? faza seu <Link to="/link">login</Link></p>
           </AnimationContainer>
          </Content>
        
      </Container>
  )
};
export default SignUp;
