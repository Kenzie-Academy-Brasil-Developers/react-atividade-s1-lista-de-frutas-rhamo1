import "./styles.css";

const Button = ({ filterRedFruits }) => {
  return (
    <button onClick={filterRedFruits} class="button-54">
      Filtrar
    </button>
  );
};

export default Button;
