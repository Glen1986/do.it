import { Container } from './styles'
const Button = ({children, whiteSchema = false, ...rest}) => {
  <Container whiteSchema = {whiteSchema} type="button" {...rest}>
    {children}
  </Container>;
};
 export default Button;
