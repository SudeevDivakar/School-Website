export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Springdale Public School</h2>
            <p className="text-sm">
              123 Education Lane,
              <br />
              Cityville, State, ZIP Code
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm">
              Phone: (123) 456-7890
              <br />
              Email: info@springdale.edu.in
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.932 4.932 0 0 0 2.165-2.723 9.864 9.864 0 0 1-3.127 1.196 4.918 4.918 0 0 0-8.379 4.482A13.959 13.959 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.562A4.904 4.904 0 0 1 .964 8.72v.06a4.92 4.92 0 0 0 3.941 4.827 4.902 4.902 0 0 1-2.212.084 4.922 4.922 0 0 0 4.596 3.417A9.867 9.867 0 0 1 0 21.543a13.905 13.905 0 0 0 7.548 2.212c9.055 0 14.002-7.513 14.002-14.02 0-.213-.004-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.52 0-9.96 4.44-9.96 9.96 0 4.4 3.6 8.08 8 8.96v-6.36H7.8V12h2.24V9.24c0-2.24 1.36-3.48 3.4-3.48.96 0 1.92.08 2.24.12v2.6H15.2c-1.2 0-1.6.76-1.6 1.56v1.88h2.8l-.44 2.6h-2.36v6.36c4.4-.88 8-4.56 8-8.96 0-5.52-4.44-9.96-9.96-9.96z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Springdale Public School. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
