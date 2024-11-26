import { schemes } from "../data/mockData";


export default function Schemes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Skill Development Schemes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {schemes.map((scheme, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{scheme.title}</h2>
              <p className="text-gray-600 mb-4">{scheme.description}</p>
              <div className="space-y-2">
                <p>
                  <strong>Eligibility:</strong> {scheme.eligibility}
                </p>
                <p>
                  <strong>Duration:</strong> {scheme.duration}
                </p>
              </div>
              <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
