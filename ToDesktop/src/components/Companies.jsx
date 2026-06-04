function Companies() {
  return (
    <section className="py-16">
      <h2 className="text-center text-2xl font-bold mb-10">
        Trusted by developers
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <div className="border rounded-lg p-6 text-center">Google</div>
        <div className="border rounded-lg p-6 text-center">Microsoft</div>
        <div className="border rounded-lg p-6 text-center">Spotify</div>
        <div className="border rounded-lg p-6 text-center">Discord</div>
      </div>
    </section>
  );
}

export default Companies;
