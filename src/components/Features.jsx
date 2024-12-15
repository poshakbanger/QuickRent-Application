import React from "react";

const Features = () => {
  // Features data (you can expand this list as needed)
  const features = [
    {
      id: 1,
      icon: "fas fa-laptop", // FontAwesome class
      title: "Wide Variety of Gadgets",
      description:
        "From laptops to gaming consoles, explore a vast collection to meet your needs.",
    },
    {
      id: 2,
      icon: "fas fa-dollar-sign",
      title: "Affordable Pricing",
      description: "Get the best gadgets at prices that won't break the bank.",
    },
    {
      id: 3,
      icon: "fas fa-truck",
      title: "Quick Delivery",
      description: "Fast and reliable delivery right to your doorstep.",
    },
    {
      id: 4,
      icon: "fas fa-user-shield",
      title: "Safe & Secure",
      description: "Your data and transactions are 100% secure with us.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose <span className="text-blue-500">QuickRent</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <div className="text-blue-500 text-5xl mb-4">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
