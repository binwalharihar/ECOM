import { FaCaretDown, FaSearch, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const MenuLinks = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Shop", link: "/#shop" },
    { id: 3, name: "About", link: "/#about" },
    { id: 4, name: "Blogs", link: "/blog" },
  ];
  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];
  return (
    <nav
      className="bg-white dark:bg-gray-900 dark:text-white 
      duration-200 relative z-40"
      aria-label="Main Navigation">
      <div className="py-4">
        <div className="container flex justify-between items-center mx-auto px-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold 
              tracking-widest text-2xl 
              uppercase sm:text-3xl">
              Eshop
            </a>
          </div>
          {/* Menu Items */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {MenuLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block px-4 font-semibold
                    text-gray-500 hover:text-primary dark:hover:text-white 
                    duration-200">
                    {item.name}
                  </a>
                </li>
              ))}
              {/* {drop down} */}
              <li className="relative cursor-pointer group">
                <a
                  href="#"
                  className="flex items-center gap-[2px]
                font-semibold text-gray-500 
                dark:hover:text-white py-2">
                  Quick Links
                  <span>
                    <FaCaretDown
                      className="group-hover:rotate-180
                  duration-300"
                    />
                  </span>
                </a>
                {/* {dropdown links} */}
                <div
                  className="absolute z-[9999]  group-hover:block w-[200px] rounded-md bg-white
                    hidden  shadow-md dark:bg-gray-900 p-2 dark:text-white">
                  <ul>
                    {DropdownLinks.map((item) => (
                      <li key={item.id}>
                        <a
                          className="block px-4 py-2 text-gray-500 hover:text-black dark:hover:text-white
                          hover:bg-primary/20 dark:hover:bg-gray-700 duration-200"
                          href={item.link}>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          {/* Navbar Right Section */}
          <div className="flex items-center gap-6">
            {/* Search Bar Section */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="search-bar px-4 py-2 w-64 border border-gray-300 rounded-full 
                focus:outline-none focus:ring-2 focus:ring-primary 
                dark:bg-gray-800 dark:border-gray-600 
                dark:focus:ring-gray-400"
                aria-label="Search"
              />
              <FaSearch
                className="absolute right-3 top-1/2 transform -translate-y-1/2 
                text-xl text-gray-600 dark:text-gray-400"
              />
            </div>
            {/* Cart Icon with Badge */}
            <div className="relative">
              <button className="relative">
                <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
                {/* Badge */}
                <div
                  className="absolute top-[-5px] right-[-10px] w-5 h-5 bg-red-500 text-white 
                  rounded-full flex items-center justify-center text-xs font-bold">
                  3 {/* Replace with dynamic count */}
                </div>
              </button>
            </div>
            {/* {dark mode} */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
