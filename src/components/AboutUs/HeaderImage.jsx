export default function HeaderImage() {
  return (
    <div className="relative w-full h-72">
      <div
        className="bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: "url('./aboutus.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <h1 className="text-white font-bold text-3xl mt-52 ml-24">About Us</h1>
      </div>
    </div>
  );
}
