import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      {/* nah ini sama persis dengan page login, cuma di duplikat dan disesuaikan saja */}
      {/* props si type="retister" , adalah untuk kondisional rendering */}
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
