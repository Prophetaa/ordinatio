import { StyledInput } from './styles';

const Input = (props) => {
  return (
    <StyledInput
      value={props.value}
      placeholder={props.placeholder}
      onInput={props.onInput}
      disabled={props.disabled}
      type={props.type || 'text'}
      error={props.error}
    />
  );
};

export default Input;
