export default function GallerySection({ section }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 mr-3 lg:inline-block">
        {section.name}
      </h2>
      <a
        href={`/gallery/${section.redirectLink}`}
        className="text-white bg-amber-500 p-2 rounded-lg"
      >
        See More
      </a>
      <img
        loading="lazy"
        src={`${section.imgSource}`}
        alt=""
        className="mt-5 w-full rounded-lg"
      />
    </div>
  );
}
