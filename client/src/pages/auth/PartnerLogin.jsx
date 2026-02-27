import { useState } from "react";
import AuthInput from "../../components/auth/AuthInput";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const PartnerLogin = () => {
  const [form, setForm] = useState({
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


    const payload = {
      email: form.email,
      password: form.password,
    };

    dispatch(loginPartner(form));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <h1 className="text-3xl font-bold text-center">
          Partner Login
        </h1>

        <p className="text-center text-gray-500 text-sm">
          Login to manage orders
        </p>

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
          Login
        </button>

        <p className="text-center text-sm text-gray-600">
          New partner?{" "}
          <Link to="/partner/register" className="font-semibold text-black">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default PartnerLogin;
