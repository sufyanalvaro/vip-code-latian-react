const Label = (props) => {
  const { htmlFor, children } = props;
  // inputannya pake props, biar bisa dipake berulang sesuai kebutuhan. karena nanti akan dipake lagi buat login dan register.
  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-700 text-sm font-bold mb-2"
    >
      {children}
    </label>
  );
};

export default Label;
