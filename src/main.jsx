import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pertama import dulu ini nih, from react-router-dom
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import ProductsPage from "./pages/products.jsx";

// terus kan ini definisikan router, yang isinya array, isi array nya object untuk memasukan path, dan element yg mau di render apa
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    // jika masuk ke path / (home), makan akan menampilkan elemen Hello world

    errorElement: <ErrorPage />,
    // jika salah nulis path, maka tidak akan merender apapun dan terjadi halaman error lalu menampilkan error element, pake page yang sudah kita buat
  },
  {
    path: "/login",
    element: <LoginPage />,
    // kalo masuk ke path /login , makan akan menampilkan element LoginPage. dst ke bawahnya bikin routing ke page lain seperti register dan product.
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/product",
    element: <ProductsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* nah di sini baru di isi RouterProvider nya. dibuat self closing tag aja.
    nah ini pake props router, yang diambil dari router yang sudah di definisikan di atas */}
  </React.StrictMode>
);
