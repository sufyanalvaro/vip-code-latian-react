import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      {/* nah ini si props title yang dari AuthLayout, di declare sbagai Login */}
      {/* props si type="login" , adalah untuk kondisional rendering */}
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
