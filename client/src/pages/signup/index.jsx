import { Button, Label, TextInput } from "flowbite-react";

import { Link } from "react-router-dom";

const Signup = () => {
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
            Welcome to Sam&apos;s Blog. You can sign up with your email and
            password or with Google.
          </p>
        </div>

        <div className="flex-1">
          <form className="flex gap-4 flex-col">
            <div className="flex flex-col gap-1">
              <Label value="Your Username" />
              <TextInput placeholder="Username" type="text" id="username" />
            </div>
            <div className="flex flex-col gap-1">
              <Label value="Your Email" />
              <TextInput
                placeholder="Sammabbyl@gmail.com"
                type="text"
                id="Email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label value="Your Password" />
              <TextInput
                placeholder="******************"
                type="text"
                id="Email"
              />
            </div>

            <Button type="submit" gradientDuoTone="purpleToPink">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-5 mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
