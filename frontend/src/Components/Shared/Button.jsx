/* eslint-disable react/prop-types */
const Button = ({ text, bgcolor, textcolor, handler = () => {} }) => {
    return (
        <button
          type="button"
          onClick={handler}
          className={`${bgcolor} ${textcolor} 
          cursor-pointer hover:scale-105 
          transition-transform duration-300 
          py-2 px-8 rounded-full relative z-10`}
          aria-label={text}
        >
          {text}
        </button>
      );
    };
    

export default Button;
