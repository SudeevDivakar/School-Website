import Carousel from "./Carousel";

export default function HomePageContent() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <header className="w-full bg-blue-400 p-4 flex justify-center items-center shadow-md pt-10">
        <img
          loading="lazy"
          src="https://i.pinimg.com/736x/48/a3/54/48a354314bb3517dabc705eb3ee8b968.jpg"
          alt="Springdale Public School Logo"
          className="h-16 w-16 mr-4"
        />
        <h1 className="text-white text-3xl font-bold">
          Springdale Public School
        </h1>
      </header>

      <section className="w-full p-6 text-center ot-8 bg-blue-400">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-white">
          Inspiring Excellence Every Day
        </h2>
        <p className="text-lg text-gray-700 mb-5 text-white">
          Welcome to Springdale Public School, where we nurture young minds for
          a brighter future.
        </p>
      </section>

      <Carousel />

      <section className="w-full bg-orange-400 py-12 px-6 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Empowering Minds, Shaping Futures
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img
              loading="lazy"
              src="https://www.canterbury.ac.nz/content/dam/uoc-main-site/images/3-people-images/f-students/state-of-the-art-facilities-uc.jpg"
              alt="Excellence 1"
              className="w-full h-60 object-cover rounded-lg shadow-md mb-4"
            />
            <p className="text-lg font-semibold">State-of-the-art Facilities</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img
              loading="lazy"
              src="https://ahduni.edu.in/site/assets/files/7325/760_x_540_amsom_faculty.1400x0.webp"
              alt="Excellence 2"
              className="w-full h-60 object-cover rounded-lg shadow-md mb-4"
            />
            <p className="text-lg font-semibold">Experienced Faculty</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img
              loading="lazy"
              src="./books.webp"
              alt="Excellence 3"
              className="w-full h-60 object-cover rounded-lg shadow-md mb-4"
            />
            <p className="text-lg font-semibold">Comprehensive Curriculum</p>
          </div>
        </div>
      </section>
    </div>
  );
}
