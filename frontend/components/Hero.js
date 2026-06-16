export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-7xl font-bold">
        <span className="text-blue-500">
          Smart
        </span>
        Shop
      </h1>

      <p className="text-gray-400 text-xl mt-6 max-w-2xl">
        Modern E-Commerce Platform powered by
        Next.js, Microservices, MongoDB,
        Docker and AWS.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="/products"
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Shop Now
        </a>

        <a
          href="/register"
          className="border border-blue-500 px-6 py-3 rounded-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}