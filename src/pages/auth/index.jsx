import { useNavigate } from 'solid-app-router';
import { createStore } from 'solid-js/store';
import { useStore } from '../../store';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { BodyText, Header, NavLink } from '../../styles/typography';
import { FlexColumn } from '../../styles/layout';
import { Container, Form } from './styles';

export default (props) => {
  const navigate = useNavigate(),
    [state, setState] = createStore({
      email: '',
      password: '',
      inProgress: false,
    }),
    [store, { register, login }] = useStore(),
    title = props.isLogin ? 'Login' : 'Register',
    buttonText = props.isLogin ? 'Sign in' : 'Sign up',
    link = props.isLogin ? (
      <NavLink href="/register">Need an account?</NavLink>
    ) : (
      <NavLink href="/login">Already a member?</NavLink>
    ),
    handleSubmit = (e) => {
      e?.preventDefault();
      setState({ inProgress: true });
      const f = props.isLogin
        ? login(state.email, state.password)
        : register(state.email, state.password);
      f.then(() => {
        navigate('/', { replace: true });
      })
        .catch((error) => setState('errorMessage', error))
        .finally(() => setState({ inProgress: false }));
    };

  return store.token ? (
    navigate('/')
  ) : (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FlexColumn>
          <Header>{title}</Header>
          <Input
            error={!!state.errorMessage}
            value={state.email}
            onInput={(e) => setState('email', e.target.value)}
            disabled={state.inProgress}
            placeholder="Email"
            type="email"
          />
          <Input
            error={!!state.errorMessage}
            value={state.password}
            onInput={(e) => setState('password', e.target.value)}
            disabled={state.inProgress}
            placeholder="Password"
            type="password"
          />
          {state.errorMessage && (
            <BodyText variant="error">{state.errorMessage}</BodyText>
          )}
        </FlexColumn>
        <FlexColumn>
          {link}
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={state.email === '' || state.password === ''}
            loading={state.inProgress}
          >
            {buttonText}
          </Button>
        </FlexColumn>
      </Form>
    </Container>
  );
};
