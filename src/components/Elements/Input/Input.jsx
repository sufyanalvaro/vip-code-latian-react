const Input = (props) => {
  const { type, placeholder, name } = props;
  // inputannya pake props, biar bisa dipake berulang sesuai kebutuhan. karena nanti akan dipake lagi buat login dan register.
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
      name={name}
      // karena menggunakan htmlFor maka si input harus menggunakan props name
      id={name}
      // fungi nya jika kita klik labelnya,, maka kursor akan masuk ke inputan nya
    />
  );
};

export default Input;
