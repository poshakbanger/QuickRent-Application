import React, { useState } from "react";
const gadgets = [
  {
    id: 1,
    name: "Dell XPS 13",
    image: "https://www.dellstore.com/pub/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/x/s/xs9320nt-xnb-shot-5-1-sl.jpg", // Replace with your image path
    description: "Powerful laptop for work and entertainment.",
    price: "$25/day",
    features: ["13.3-inch Display", "Intel i7 Processor", "16GB RAM", "512GB SSD"],
  },
  {
    id: 2,
    name: "Sony Alpha A7 III",
    image: "https://www.ephotozine.com/articles/sony-alpha-a7-mark-iii-announced-32006/images/highres-Sony-Alpha-A7-MarkIII-9-Custom_1519667610.jpg", // Replace with your image path
    description: "High-performance mirrorless camera for professionals.",
    price: "$50/day",
    features: ["24MP Sensor", "4K Video", "5-Axis Stabilization"],
  },
  {
    id: 3,
    name: "PlayStation 5",
    image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$", // Replace with your image path
    description: "Next-gen gaming console for ultimate fun.",
    price: "$40/day",
    features: ["8K Output", "Ultra-High-Speed SSD", "Ray Tracing Support"],
  },
];

const GadgetListing = () => {
  const [newGadget, setNewGadget] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    features: "",
  });
  const [allGadgets, setAllGadgets] = useState(gadgets);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGadget({
      ...newGadget,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      newGadget.name &&
      newGadget.image &&
      newGadget.description &&
      newGadget.price &&
      newGadget.features
    ) {
      const newGadgetObject = {
        id: allGadgets.length + 1,
        name: newGadget.name,
        image: newGadget.image,
        description: newGadget.description,
        price: newGadget.price,
        features: newGadget.features.split(","),
      };
      
      setAllGadgets([...allGadgets, newGadgetObject]);
      setNewGadget({
        name: "",
        image: "",
        description: "",
        price: "",
        features: "",
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore Our <span className="text-blue-500">Gadgets</span>
        </h2>

        {/* Gadget Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allGadgets.map((gadget) => (
            <div
              key={gadget.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={gadget.image}
                alt={gadget.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{gadget.name}</h3>
                <p className="text-gray-600 mb-4">{gadget.description}</p>
                <ul className="text-sm text-gray-700 mb-4">
                  {gadget.features.map((feature, index) => (
                    <li key={index} className="list-disc list-inside">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-blue-500 font-bold">{gadget.price}</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* List Your Gadget Form */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-center mb-6">
            List Your Gadget for Rent
          </h3>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700" htmlFor="name">
                  Gadget Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newGadget.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="image">
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={newGadget.image}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newGadget.description}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="price">
                  Price per day
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={newGadget.price}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="features">
                  Features (comma-separated)
                </label>
                <input
                  type="text"
                  id="features"
                  name="features"
                  value={newGadget.features}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                >
                  List Gadget
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GadgetListing;
