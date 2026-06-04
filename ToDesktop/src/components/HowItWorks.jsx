function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-4xl font-bold mb-12">How it works</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div>
          <h3 className="font-bold text-xl">1. Build</h3>
          <p>Create your app.</p>
        </div>

        <div>
          <h3 className="font-bold text-xl">2. Package</h3>
          <p>Generate desktop builds.</p>
        </div>

        <div>
          <h3 className="font-bold text-xl">3. Deploy</h3>
          <p>Ship to your users.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
