function FAQ() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-center text-4xl font-bold mb-10">FAQ</h2>

      <div className="space-y-4">
        <details className="border rounded-lg p-4">
          <summary>What is ToDesktop?</summary>
          <p className="mt-2">A desktop app platform.</p>
        </details>

        <details className="border rounded-lg p-4">
          <summary>Is it cross-platform?</summary>
          <p className="mt-2">Yes.</p>
        </details>
      </div>
    </section>
  );
}

export default FAQ;
