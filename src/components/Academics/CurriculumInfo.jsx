export default function CurriculumInfo() {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Curriculum
        </h2>
        <p className="mt-4 text-lg text-gray-500 leading-loose text-xl">
          Our curriculum is designed to provide a comprehensive and balanced
          education from primary through senior secondary levels. We focus on
          holistic development, academic excellence, and personal growth.
        </p>

        {/* Primary Curriculum */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">
            Primary Curriculum
          </h3>
          <div className="flex flex-wrap mt-6">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <img
                src="./curriculum2.jpg"
                alt="Primary Curriculum"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/3 p-4">
              <p className="text-gray-600 leading-loose text-xl">
                Our primary curriculum focuses on foundational skills in
                literacy, numeracy, and social studies. We aim to build a strong
                base in core subjects while fostering curiosity and creativity
                through interactive and engaging activities.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Curriculum */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">
            Secondary Curriculum
          </h3>
          <div className="flex flex-wrap mt-6">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <img
                src="./curriculum.jpg"
                alt="Secondary Curriculum"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/3 p-4">
              <p className="text-gray-600 leading-loose text-xl">
                In secondary education, we offer a more structured curriculum
                with specialized subjects in science, mathematics, language
                arts, and social sciences. Our goal is to prepare students for
                higher education and future careers by providing in-depth
                knowledge and critical thinking skills.
              </p>
            </div>
          </div>
        </div>

        {/* Senior Secondary Curriculum */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">
            Senior Secondary Curriculum
          </h3>
          <div className="flex flex-wrap mt-6">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <img
                src="./senior_secondary_curriculum.jpg"
                alt="Senior Secondary Curriculum"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/3 p-4">
              <p className="text-gray-600 leading-loose text-xl">
                Our senior secondary curriculum offers advanced courses in
                various fields, including science, technology, humanities, and
                arts. We prepare students for college and university by offering
                elective courses and specialized programs that align with their
                interests and career goals.
              </p>
            </div>
          </div>
        </div>

        {/* Teaching Methodologies */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">
            Teaching Methodologies
          </h3>
          <div className="flex flex-wrap mt-6">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <img
                src="./teaching.avif"
                alt="Teaching Methodologies"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/3 p-4">
              <p className="text-gray-600 leading-loose text-xl">
                Our teaching methodologies include a mix of traditional and
                innovative approaches. We emphasize interactive learning,
                project-based assignments, and technology integration to enhance
                student engagement and understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Educational Resources */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">
            Educational Resources
          </h3>
          <div className="flex flex-wrap mt-6">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <img
                src="./books.webp"
                alt="Educational Resources"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/3 p-4">
              <p className="text-gray-600 leading-loose text-xl">
                We provide a range of educational resources including textbooks,
                digital learning tools, and hands-on materials. Our
                well-equipped libraries and science labs support comprehensive
                learning and exploration in all subjects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
