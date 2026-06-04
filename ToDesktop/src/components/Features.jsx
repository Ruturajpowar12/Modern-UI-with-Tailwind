function Features() {
  const features = [
    "Cross Platform",
    "Auto Updates",
    "Native Performance",
    "Easy Deployment",
    "Code Signing",
    "Analytics",
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Everything you need
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item) => (
          <div key={item} className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-3">{item}</h3>
            <p className="text-gray-600">
              Description about {item.toLowerCase()}.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
