import React from "react";

export default function StudentProfiles() {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 p-2 border-2 border-slate-600 rounded-lg mb-6 inline-block sm:text-4xl">
          Life at Springdale
        </h2>

        {/* Extracurricular Activities */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-gray-900">
            Extracurricular Activities
          </h3>
          <div className="flex flex-wrap mt-6">
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <img
                src="./student_music.jpg"
                alt="Music"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-lg text-gray-500 text-center">Music</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <img
                src="./students_dancing.webp"
                alt="Dance"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-lg text-gray-500 text-center">Dance</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <img
                src="./students_drama.webp"
                alt="Drama"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-lg text-gray-500 text-center">Drama</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <img
                src="./students_art.jpg"
                alt="Art"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-lg text-gray-500 text-center">Art</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <img
                src="./students_sport.jpg"
                alt="Sports"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-lg text-gray-500 text-center">Sports</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <img
                src="./students_robotics.jpg"
                alt="Robotics"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-lg text-gray-500 text-center">Robotics</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <img
                src="./students_debate.webp"
                alt="Debate Club"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-lg text-gray-500 text-center">
                Debate Club
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <img
                src="./students_science.jpg"
                alt="Science Club"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-lg text-gray-500 text-center">
                Science Club
              </p>
            </div>
          </div>
        </div>

        {/* Clubs and Societies */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-gray-900">
            Clubs and Societies
          </h3>
          <div className="flex flex-wrap mt-6">
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <img
                src="./literary_club.jpg"
                alt="Literary Society"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-lg text-gray-500 text-center">
                Literary Society
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <img
                src="./environmental_club.jpeg"
                alt="Environmental Club"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-lg text-gray-500 text-center">
                Environmental Club
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <img
                src="./astronomy_club.jpeg"
                alt="Astronomy Club"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-lg text-gray-500 text-center">
                Astronomy Club
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <img
                src="./coding_club.jpg"
                alt="Coding Club"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-lg text-gray-500 text-center">
                Coding Club
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-gray-900 mb-8">
            Achievements
          </h3>
          <ul className="mt-4 text-lg text-gray-500 leading-loose text-xl list-disc list-inside">
            <li className="flex items-center mt-4">
              <img
                src="./johnsmith.jpg"
                alt="John Smith"
                className="w-16 h-16 object-cover rounded-full shadow-md mr-4"
              />
              <b>John Smith</b> - National Level Math Olympiad Winner
            </li>
            <li className="flex items-center mt-4">
              <img
                src="./sarahlee.jpeg"
                alt="Sarah Lee"
                className="w-16 h-16 object-cover rounded-full shadow-md mr-4"
              />
              <b>Sarah Lee</b> - Gold Medalist in State Swimming Championship
            </li>
            <li className="flex items-center mt-4">
              <img
                src="./tech_innovators.webp"
                alt="Tech Innovators Club"
                className="w-16 h-16 object-cover rounded-full shadow-md mr-4"
              />
              <b>Tech Innovators Club</b> - Winners of Inter-School Robotics
              Competition
            </li>
          </ul>
        </div>

        {/* Student Council */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-900">
            Student Council
          </h3>
          <div className="flex flex-wrap mt-6">
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white">
              <img
                src="./amyparker.jpeg"
                alt="Amy Parker"
                className="w-24 h-24 object-cover rounded-full shadow-md mx-auto"
              />
              <p className="mt-4 text-lg text-gray-500 text-center">
                <b>President</b> <br /> Amy Parker <br /> Grade 12
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white">
              <img
                src="./rajhivmehta.webp"
                alt="Rajiv Mehta"
                className="w-24 h-24 object-cover rounded-full shadow-md mx-auto"
              />
              <p className="mt-4 text-lg text-gray-500 text-center">
                <b>Vice President</b> <br /> Rajiv Mehta <br /> Grade 11
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white">
              <img
                src="./lisawong.jpeg"
                alt="Lisa Wong"
                className="w-24 h-24 object-cover rounded-full shadow-md mx-auto"
              />
              <p className="mt-4 text-lg text-gray-500 text-center">
                <b>Secretary</b> <br /> Lisa Wong <br /> Grade 10
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
