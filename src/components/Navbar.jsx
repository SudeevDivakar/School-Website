import NavbarLink from "./NavbarLink";

export default function Navbar() {
  const links = [
    ["About Us", "about-us"],
    ["Academics", "academics"],
    ["Admissions", ""],
    ["Faculty", ""],
    ["Students", ""],
    ["Gallery", ""],
    ["Contact Us", ""],
  ];
  return (
    <>
      <div className="flex h-14 justify-between border-b">
        <a href="/" className="w-1/3">
          <img src="./logo.avif" alt="" className="h-14 border-b ml-10" />
        </a>

        <ul className="flex w-2/3 justify-around items-center">
          {links.map((link, index) => {
            return <NavbarLink name={link[0]} link={link[1]} key={index} />;
          })}
        </ul>
      </div>
    </>
  );
}
