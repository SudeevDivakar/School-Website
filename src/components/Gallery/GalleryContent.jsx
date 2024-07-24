import GallerySection from "./GallerySection";

export default function GalleryContent() {
  const events = [
    {
      name: "Sports Day",
      imgSource: "https://c.tadst.com/gfx/750w/sport-day-un.jpg",
      redirectLink: "sportsDay",
    },
    {
      name: "Science Exhibition",
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/3/32/Usa_science_and_engineering_festival_%2814062155971%29.jpg",
      redirectLink: "scienceExhibition",
    },
    {
      name: "Cultural Fest",
      imgSource:
        "https://www.bakerschoolpto.org/uploads/1/2/5/0/12506508/8043654_orig.jpg",
      redirectLink: "culturalFest",
    },
    {
      name: "Classrooms",
      imgSource:
        "https://cdn.pixabay.com/photo/2017/02/24/02/37/classroom-2093744_1280.jpg",
      redirectLink: "classrooms",
    },
    {
      name: "Library",
      imgSource:
        "https://media.istockphoto.com/id/1015149600/photo/book-hall-in-library.jpg?s=612x612&w=0&k=20&c=DzbHaOg_iLwRAU96BzzpZ7a70xCGj3XBTVQ_HmqiN3A=",
      redirectLink: "library",
    },
  ];
  return (
    <div className="w-full flex justify-center bg-gray-100">
      <div className="w-4/6 flex flex-col">
        <h1 className="text-5xl font-bold mt-10">Gallery</h1>
        <div className="mt-10">
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/Hx0C4XQJh6Y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
        {events.map((section, index) => {
          return <GallerySection section={section} key={index} />;
        })}
      </div>
    </div>
  );
}
