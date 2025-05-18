export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Page content would go here */}
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8">Welcome to Travel Tour</h1>
          <p className="text-lg mb-4">
            Discover amazing destinations around the world with our exclusive
            tour packages.
          </p>

          {/* Sample content to demonstrate scrolling */}
          <div className="mt-20">
            <h2 className="text-2xl font-semibold mb-4">
              Popular Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-4">
                  <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                  <h3 className="font-medium">Destination {i}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-semibold mb-4">Featured Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-4">
                  <div className="h-60 bg-gray-200 rounded-md mb-4"></div>
                  <h3 className="font-medium">Amazing Tour Package {i}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
