import NavbarLink from "./NavbarLink";

export default function Navbar() {
  const links = [
    ["About Us", "about-us"],
    ["Academics", "academics"],
    ["Admissions", "admissions"],
    ["Faculty", "faculty"],
    ["Students", "students"],
    ["Gallery", "gallery"],
    ["Contact Us", "contact-us"],
  ];
  return (
    <div className="flex items-center justify-between h-16 px-6 bg-white shadow-md border-b">
      <div className="flex-shrink-0">
        <a href="/">
          <img
            loading="lazy"
            src="https://i.pinimg.com/736x/48/a3/54/48a354314bb3517dabc705eb3ee8b968.jpg"
            alt="Logo"
            className="h-16 w-auto border-b"
          />
        </a>
      </div>
      <ul className="hidden md:flex md:space-x-6 lg:space-x-8">
        {links.map((link, index) => (
          <NavbarLink name={link[0]} link={link[1]} key={index} />
        ))}
      </ul>
      <div className="md:hidden">
        {/* Mobile menu button */}
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
