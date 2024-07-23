export default function CurriculumInfo() {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Curriculum
        </h2>
        <p className="mt-4 text-lg text-gray-500 leading-loose lg:text-xl">
          Our curriculum is designed to provide a comprehensive and balanced
          education from primary through senior secondary levels. We focus on
          holistic development, academic excellence, and personal growth.
        </p>

        {/* Primary Curriculum */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">
            Primary (Grades 1-5)
          </h3>
          <div className="mt-6 flex flex-wrap lg:flex-nowrap lg:items-center">
            <div className="w-full lg:w-1/2 p-4">
              <img
                loading="lazy"
                src="./curriculum1.jpg"
                alt="Primary Curriculum"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <p className="text-gray-600 leading-loose text-lg lg:text-xl">
                English, Mathematics, Science, Social Studies, Art, Physical
                Education
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Curriculum */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">
            Secondary (Grades 6-10)
          </h3>
          <div className="mt-6 flex flex-wrap lg:flex-nowrap lg:items-center">
            <div className="w-full lg:w-1/2 p-4">
              <img
                loading="lazy"
                src="./curriculum2.webp"
                alt="Secondary Curriculum"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <p className="text-gray-600 leading-loose text-lg lg:text-xl">
                English, Mathematics, Science (Physics, Chemistry, Biology),
                Social Studies, Computer Science, Physical Education, Art
              </p>
            </div>
          </div>
        </div>

        {/* Senior Secondary Curriculum */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">
            Senior Secondary (Grades 11-12)
          </h3>
          <div className="mt-6 flex flex-wrap lg:flex-nowrap lg:items-center">
            <div className="w-full lg:w-1/2 p-4">
              <img
                loading="lazy"
                src="./curriculum3.jpg"
                alt="Senior Secondary Curriculum"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <ul className="text-gray-600 leading-loose text-lg lg:text-xl">
                <li className="mb-5">
                  <b>Science Stream:</b> Physics, Chemistry, Biology,
                  Mathematics, Computer Science, English
                </li>
                <li>
                  <b>Commerce Stream:</b> Accountancy, Business Studies,
                  Economics, Mathematics, English
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Teaching Methodologies */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">
            Teaching Methodologies
          </h3>
          <div className="mt-6 flex flex-wrap lg:flex-nowrap lg:items-center">
            <div className="w-full lg:w-1/2 p-4">
              <img
                src="./teaching.avif"
                loading="lazy"
                alt="Teaching Methodologies"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <p className="text-gray-600 leading-loose text-lg lg:text-xl">
                We use a blend of traditional and modern teaching techniques to
                cater to different learning styles.
              </p>
            </div>
          </div>
        </div>

        {/* Educational Resources */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">
            Educational Resources
          </h3>
          <div className="mt-6 flex flex-wrap lg:flex-nowrap lg:items-center">
            <div className="w-full lg:w-1/2 p-4">
              <img
                src="./books.webp"
                loading="lazy"
                alt="Educational Resources"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <p className="text-gray-600 leading-loose text-lg lg:text-xl">
                Digital classrooms, interactive learning modules, and access to
                online educational platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
