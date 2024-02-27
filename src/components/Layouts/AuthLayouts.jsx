import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  // props type itu adalah untuk menangkap props yang ada di halaman login & register untuk melakukan kondisional renderring
  return (
    // ini si style dari form login kalo selain input dan label, pindahin lah ke AuthLayout. fungsinya apa, agar nanti si Form login ini bisa digunakan berulang untuk dipake formRegister
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        {/* ini si {title} tuh, dibikin props buat dilempar ke login.jsx lah gitu deh dulu */}
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        {/*ini chlidren tu komponen FormLogin sebenarnya tapi dipindahin ke pages/login , jadi dibuat children. gw juga belum paham kenapa begitu*/}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  // membuat pengkondisian jika punya akun dan tidak punya akun. caranya jika type bertipe login,
  if (type === "login") {
    return (
      // membuat routing pake Link to dari react-router-dom. fungsinya agar ketika kita masuk ke url lain (disini jika dont have an account, maka mengarah ke path register), si halaman itu bisa me render halamannya tanpa melakukan loading terlebih dahulu. jadi perpindahan nya smooth
      <p className="text-sm mt-5 text-center">
        Dont't have an account ?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      // nah ini juga sama kaya di atas routing juga pake Link to, cuma buat yang have an accoutn, diarahkan ke path Login. tks
      <p className="text-sm mt-5 text-center">
        Already have an account ?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
