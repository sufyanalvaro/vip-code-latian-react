import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    window.location.href = "/product";
  };
  return (
    <form onSubmit={handleLogin}>
      {/* ini InputForm tuh buat nampung componen input & label yg udah di buat tadi ya,, jadilah sebuah fragmen berbentuk input form . halah belibet
      tapi ini baru InputForm untuk login,, nnti bikin lagi InputForm di component FormRegister ya */}
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="****"
        name="password"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
