export default function NavbarLink({ name, link }) {
  return (
    <li className="hover:scale-105 transition-transform">
      <a href={`/${link}`} className="font-semibold">
        {name}
      </a>
    </li>
  );
}
