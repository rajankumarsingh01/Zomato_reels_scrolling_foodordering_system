import { useState } from "react";
import AuthInput from "../../components/auth/AuthInput";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const PartnerRegister = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerPartner(form));

    const payload = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    console.log("PARTNER REGISTER PAYLOAD 👉", payload);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <h1 className="text-3xl font-bold text-center">
          Partner Sign Up
        </h1>

        <p className="text-center text-gray-500 text-sm">
          Create your restaurant account
        </p>

        <AuthInput
          placeholder="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <AuthInput
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <AuthInput
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600">
          Already a partner?{" "}
          <Link to="/partner/login" className="font-semibold text-black">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default PartnerRegister;
