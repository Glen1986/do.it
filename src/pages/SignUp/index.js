import {AnimationContainer, Container, Background, Content} from './styles'
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Link, useHistory} from 'react-router-dom';
import {Redirect} from 'react-router';
import {FiUser, FiMail, FiLock} from 'react-icons/fi';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import api from '../../services/api'
import {toast} from 'react-toastify';


const SignUp = ({authenticated}) => {


  const schema = yup.object().shape({
    name: yup.string().required("campo Obrigatorio!!!"),
    email: yup.string().email("email invalido").required("campo Obrigatorio!!!"),
    password: yup
      .string()
      .min(8, "minimo 8 caracteres")
      .required("campo Obrigatorio!!!"),
    confPassword: yup
      .string()
      .oneOf([yup.ref("password")], "senhas diferentes")
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

  const onSubmitFunction = ({name, email, password}) => {
    const user = {name, email, password};
    api.post("/user/register", user)
      .then((_) => {
        toast.success("sucesso ao criar a conta"); return history.push("/login")
      })
      .catch((err) => toast.error("error al crear cueta"))

  };

  if (authenticated) {
    return <Redirect to="/dashboard" />
  }


  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro</h1>
            <Input
              register={register}
              icon={FiUser}
              label="Nome"
              placeholder="seu nome"
              name="name"
            />

            <Input
              register={register}
              icon={FiMail}
              label="Emai"
              placeholder="seu email"
              name="email"
            />
            <Input
              register={register}
              icon={FiLock}
              label="Password"
              type="password"
              placeholder="password"
              name="password"
            />
            <Input
              register={register}
              icon={FiLock}
              type="password"
              label="confirmar Password"
              placeholder="confirmar password"
              name="confPassword"
            />
            <Button type="submit">Enviar</Button>
            <p>Ja tem una conta? faza seu <Link to="/login">login</Link></p>
          </form>
        </AnimationContainer>
      </Content>

    </Container>
  )
};
export default SignUp;
