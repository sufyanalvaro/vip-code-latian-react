import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    // ini si pembungkus label dan input. kita panggil2in (import)
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      {/* ini si label yang kita panggil, props nya juga kita panggil */}
      <Input name={name} type={type} placeholder={placeholder} />
      {/* ini si input yang kita panggil, props nya juga kita panggil sama kaya
      yang atas. bedanya dia di closing tag karena ga punya children. pelajari
      lagi dah ah konsep children */}
    </div>
    // btw si props name itu adalah 1 props yang digunakan pada 2 komponen berbeda. kenapa ? bingung blm paham
  );
};

export default InputForm;
