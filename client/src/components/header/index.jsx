import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/theme/themeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  return (
    <Navbar className="border-b-2 p-2 flex justify-between items-center">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 rounded-lg text-white bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
          Sam&apos;s
        </span>
        Blog
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      <Button className="w-12 h- lg:hidden shadow-md" color="grey" pill="true">
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline shadow-md"
          color="gray"
          pill="true"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="user Image" img={currentUser.photo} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block font-medium text-sm truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>

            <Link to="/dashboard?tab=profile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Link to="/signout">
              <Dropdown.Item>Sign Out</Dropdown.Item>
            </Link>
          </Dropdown>
        ) : (
          <Link to="/signin" color="gray" pill>
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={pathname === "/"} as={"div"}>
          <Link to="/" color="gray" className="w-full block">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={pathname === "/about"} as={"div"}>
          <Link to="/about" color="gray" className="w-full block">
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={pathname === "/project"} as={"div"}>
          <Link to="/project" color="gray" className="w-full block">
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
