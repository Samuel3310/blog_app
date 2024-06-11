import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="bg-white text-gray-00 dark:ng-gray200 dark:bg-[rgb(16,23,42)] min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ThemeProvider;
