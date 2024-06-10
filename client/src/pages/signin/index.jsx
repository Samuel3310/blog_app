import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();
  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.password || !formData.email) {
      return setError("All fields are required");
    }
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setError(data.message);
      }
      if (res.ok) {
        navigate("/");
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link
            to="/"
            className=" sm:text-xl font-bold dark:text-white text-4xl"
          >
            <span className="px-2 py-1 rounded-lg text-white bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
              Sam&apos;s
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Welcome to Sam&apos;s Blog. You can sign in with your email and
            password or with Google.
          </p>
        </div>

        <div className="flex-1">
          <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <Label value="Your Email" />
              <TextInput
                placeholder="Sammabbyl@gmail.com"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label value="Your Password" />
              <TextInput
                placeholder="******************"
                type="password"
                id="password"
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              gradientDuoTone="purpleToPink"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />{" "}
                  <span className="pl-3"> Loading ....</span>{" "}
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="flex gap-5 mt-5">
            <span>Don&apos;t have an account?</span>
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {error && (
            <Alert className="mt-5 " color="failure">
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
