export default function StudentProfiles() {
  return (
    <div className="bg-gray-100 pb-16 pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 p-2 border-2 border-slate-600 rounded-lg mb-6 inline-block sm:text-4xl bg-white">
          Life at Springdale
        </h2>

        {/* Extracurricular Activities */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-gray-900">
            Extracurricular Activities
          </h3>
          <div className="flex flex-wrap mt-6">
            {[
              { src: "./student_music.jpg", alt: "Music", label: "Music" },
              { src: "./students_dancing.webp", alt: "Dance", label: "Dance" },
              { src: "./students_drama.webp", alt: "Drama", label: "Drama" },
              { src: "./students_art.jpg", alt: "Art", label: "Art" },
              { src: "./students_sport.jpg", alt: "Sports", label: "Sports" },
              {
                src: "./students_robotics.jpg",
                alt: "Robotics",
                label: "Robotics",
              },
              {
                src: "./students_debate.webp",
                alt: "Debate Club",
                label: "Debate Club",
              },
              {
                src: "./students_science.jpg",
                alt: "Science Club",
                label: "Science Club",
              },
            ].map((activity, index) => (
              <div
                className="w-full sm:w-1/2 lg:w-1/4 p-4 activity-card"
                key={index}
              >
                <img
                  loading="lazy"
                  src={activity.src}
                  alt={activity.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <p className="mt-2 text-lg text-gray-500 text-center">
                  {activity.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Clubs and Societies */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-gray-900">
            Clubs and Societies
          </h3>
          <div className="flex flex-wrap mt-6">
            {[
              {
                src: "./literary_club.jpg",
                alt: "Literary Society",
                label: "Literary Society",
              },
              {
                src: "./environmental_club.jpeg",
                alt: "Environmental Club",
                label: "Environmental Club",
              },
              {
                src: "./astronomy_club.jpeg",
                alt: "Astronomy Club",
                label: "Astronomy Club",
              },
              {
                src: "./coding_club.jpg",
                alt: "Coding Club",
                label: "Coding Club",
              },
            ].map((club, index) => (
              <div
                className="w-full sm:w-1/2 lg:w-1/4 p-4 activity-card"
                key={index}
              >
                <img
                  loading="lazy"
                  src={club.src}
                  alt={club.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <p className="mt-2 text-lg text-gray-500 text-center">
                  {club.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-gray-900 mb-8">
            Achievements
          </h3>
          <ul className="mt-4 text-lg text-gray-500 leading-loose text-xl list-disc list-inside">
            {[
              {
                src: "./johnsmith.jpg",
                alt: "John Smith",
                label: "John Smith",
                description: "National Level Math Olympiad Winner",
              },
              {
                src: "./sarahlee.jpeg",
                alt: "Sarah Lee",
                label: "Sarah Lee",
                description: "Gold Medalist in State Swimming Championship",
              },
              {
                src: "./tech_innovators.webp",
                alt: "Tech Innovators Club",
                label: "Tech Innovators Club",
                description: "Winners of Inter-School Robotics Competition",
              },
            ].map((achievement, index) => (
              <li
                className="flex flex-col items-start mt-4 sm:flex-row sm:items-center"
                key={index}
              >
                <img
                  loading="lazy"
                  src={achievement.src}
                  alt={achievement.alt}
                  className="w-16 h-16 object-cover rounded-full shadow-md mr-4"
                />
                <div>
                  <b className="block text-black sm:inline">
                    {achievement.label}
                  </b>{" "}
                  <span className="block sm:inline">
                    - {achievement.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Student Council */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-900">
            Student Council
          </h3>
          <div className="flex flex-wrap mt-6">
            {[
              {
                src: "./amyparker.jpeg",
                alt: "Amy Parker",
                label: "Amy Parker",
                title: "President",
                grade: "Grade 12",
              },
              {
                src: "./rajhivmehta.webp",
                alt: "Rajiv Mehta",
                label: "Rajiv Mehta",
                title: "Vice President",
                grade: "Grade 11",
              },
              {
                src: "./lisawong.jpeg",
                alt: "Lisa Wong",
                label: "Lisa Wong",
                title: "Secretary",
                grade: "Grade 10",
              },
            ].map((councilMember, index) => (
              <div
                className="w-full sm:w-1/2 lg:w-1/4 p-4 rounded-lg council-card"
                key={index}
              >
                <img
                  loading="lazy"
                  src={councilMember.src}
                  alt={councilMember.alt}
                  className="w-24 h-24 object-cover rounded-full shadow-md mx-auto"
                />
                <p className="mt-4 text-lg text-gray-500 text-center">
                  <b className="text-black">{councilMember.title}</b> <br />{" "}
                  {councilMember.label} <br /> {councilMember.grade}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
