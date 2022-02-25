import { StyledButton } from './styles';

const Button = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <StyledButton
      onClick={handleClick}
      disabled={props.disabled || props.loading}
      type={props.type}
      variant={props.variant}
      loading={props.loading}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
