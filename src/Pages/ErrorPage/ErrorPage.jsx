import Navbar from "../../components/Navbar";

export default function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center flex-col items-center h-screen">
        <img
          src="https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1599716993.jpg?im=FitAndFill=(826,465)"
          alt="PageNotFound"
        />
        <a
          href="/"
          className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-10"
        >
          Back To HomePage
        </a>
      </div>
    </>
  );
}
