export default function NavbarLink({ name, link }) {
  return (
    <li className="hover:scale-105 transition-transform">
      <a
        href={`/${link}`}
        className="font-semibold text-gray-700 hover:text-gray-900"
      >
        {name}
      </a>
    </li>
  );
}
