
import {AnimationContainer, Container, Background, Content} from './styles'
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Link, useHistory} from 'react-router-dom';
import {Redirect} from 'react-router';
import {FiMail, FiLock} from 'react-icons/fi';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import api from '../../services/api'
import {toast} from 'react-toastify';


const Login = ({authenticated, setAuthenticated}) => {
  const schema = yup.object().shape({
    email: yup.string().email("email invalido").required("campo Obrigatorio!!!"),
    password: yup
      .string()
      .min(8, "minimo 8 caracteres")
      .required("campo Obrigatorio!!!"),
  })


  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  })

  const history = useHistory()

  const onSubmitFunction = (data) => {
    api.post("/user/login", data).then((response) => {
      const {token, user} = response.data;

      localStorage.setItem("@Doit:token", JSON.stringify(token));
      localStorage.setItem("@Doit:user", JSON.stringify(user));

      setAuthenticated(true)
      return history.push("/dashboard");
    })
      .catch((err) => toast.error(err))
  };
  if (authenticated) {
    return <Redirect to="/dashboard" />
  }



  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>
            <Input
              register={register}
              icon={FiMail}
              label="Emai"
              placeholder="seu email"
              name="email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              icon={FiLock}
              label="Password"
              type="password"
              placeholder="password"
              name="password"
              error={errors.password?.message}
            />
            <Button type="submit">Logar</Button>
            <p>Ja tem una conta? faza seu <Link to="/signup">SignUp</Link></p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  )
};
export default Login;
