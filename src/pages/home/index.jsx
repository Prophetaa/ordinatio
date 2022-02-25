import { useNavigate } from 'solid-app-router';
import { createStore } from 'solid-js/store';
import { useStore } from '../../store';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Label, Header, NavLink } from '../../styles/typography';
import { FlexColumn } from '../../styles/layout';
import { Container, Form } from './styles';

export default (props) => {
  const navigate = useNavigate(),
    [store, { register, login }] = useStore()

  return (
    <Container>
     <p>test</p>
    </Container>
  );
};
