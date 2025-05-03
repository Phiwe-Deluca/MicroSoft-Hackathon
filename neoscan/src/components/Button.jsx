function Button({ text, color, onClick }) {
    return (
      <button onClick={onClick} className={`px-4 py-2 rounded-md ${color}`}>
        {text}
      </button>
    );
  }
  
  export default Button;
  