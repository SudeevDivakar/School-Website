import Carousel from "../Homepage/Carousel";

export default function Content() {
  return (
    <div className="w-full mt-16 flex justify-center">
      <div className="flex flex-col w-5/6">
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900">
            About Sudeev Institutions
          </h3>
          <p className="mt-2 text-gray-500 leading-relaxed">
            Welcome to Sudeev Institutions, a place where we nurture and educate
            young minds to become the leaders of tomorrow. Established in 2024,
            our school has a rich history of academic excellence and a
            commitment to fostering a supportive and inclusive learning
            environment.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
          <p className="mt-2 text-gray-500 leading-relaxed">
            Our mission is to provide a holistic education that not only
            emphasizes academic achievements but also focuses on the overall
            development of our students. We aim to cultivate critical thinking,
            creativity, and a sense of social responsibility in every student.
          </p>
        </div>

        <div className="mt-10 mb-10">
          <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
          <p className="mt-2 text-gray-500 leading-relaxed">
            Our vision is to be a leading educational institution known for its
            innovative teaching methods and outstanding student outcomes. We
            strive to create an environment where students are encouraged to
            explore their passions and reach their full potential.
          </p>
        </div>

        <Carousel />

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900">Our Values</h3>
          <ul className="mt-2 text-gray-500 list-disc list-inside">
            <li className="mt-3">
              Excellence: We strive for the highest standards in everything we
              do.
            </li>
            <li className="mt-3">
              Integrity: We act with honesty and integrity in all our actions.
            </li>
            <li className="mt-3">
              Respect: We respect the diverse backgrounds and perspectives of
              our students, staff, and community.
            </li>
            <li className="mt-3">
              Collaboration: We believe in the power of working together to
              achieve common goals.
            </li>
            <li className="mt-3">
              Innovation: We encourage creativity and innovation in our teaching
              and learning practices.
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900">Our History</h3>
          <p className="mt-2 text-gray-500 leading-relaxed">
            Sudeev Institutions was founded in 2024 with the goal of providing
            quality education to the local community. Over the years, we have
            grown and evolved, adapting to the changing educational landscape
            while staying true to our core values. Today, we are proud to be a
            school that not only excels academically but also fosters a
            supportive and nurturing environment for all our students.
          </p>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900">
            Message from the Principal
          </h3>
          <p className="mt-2 text-gray-500 leading-relaxed">
            Welcome to Sudeev Institutions. As the Principal, I am proud to lead
            a team of dedicated educators committed to providing exceptional
            educational experiences. Our school is built on a foundation of
            excellence, integrity, and a deep commitment to our students' growth
            and development. We look forward to partnering with you in the
            journey of learning and achievement.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">
            Our Infrastructure and Facilities
          </h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="./modern_classrooms.jpg"
                alt="Classroom"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-900">
                Modern Classrooms
              </h4>
              <p className="mt-2 text-gray-600">
                Our modern classrooms are equipped with the latest technology to
                facilitate an interactive and engaging learning environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="./well_stocked_libraries.jpg"
                alt="Library"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-900">
                Well-Stocked Library
              </h4>
              <p className="mt-2 text-gray-600">
                Our library offers a wide range of books, digital resources, and
                comfortable study spaces for our students.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="./sports_facilities.jpg"
                alt="Sports Facilities"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-900">
                Sports Facilities
              </h4>
              <p className="mt-2 text-gray-600">
                We provide extensive sports facilities, including playgrounds
                and gymnasiums, to support the physical development of our
                students.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="./science_lab.avif"
                alt="Science Labs"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-900">
                State-of-the-Art Science Labs
              </h4>
              <p className="mt-2 text-gray-600">
                Our science labs are equipped with the latest equipment and
                resources to provide hands-on learning experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="./music_room.webp"
                alt="Art and Music Room"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-900">
                Art and Music Room
              </h4>
              <p className="mt-2 text-gray-600">
                Our dedicated art and music rooms provide students with the
                space and resources to explore their creative talents.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="./cafeteria.jpeg"
                alt="Cafeteria"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-900">
                Spacious Cafeteria
              </h4>
              <p className="mt-2 text-gray-600">
                Our cafeteria offers a variety of healthy meal options and
                provides a comfortable dining area for students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
