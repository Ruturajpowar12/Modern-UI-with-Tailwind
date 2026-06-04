function Testimonials() {
  return (
    <section className="py-20">
      <h2 className="text-center text-4xl font-bold mb-12">Testimonials</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border rounded-xl p-6">
            <p>"Amazing product!"</p>
            <h4 className="font-bold mt-4">Developer {item}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
