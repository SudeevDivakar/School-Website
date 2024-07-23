export default function NavbarLink({ name, link }) {
  return (
    <li className="hover:scale-105 transition-transform">
      <a href={`http://localhost:5173/${link}`} className="font-semibold">
        {name}
      </a>
    </li>
  );
}
