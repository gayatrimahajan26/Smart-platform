export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-6xl font-bold">
        SmartShop
      </h1>

      <p className="text-xl mt-6 text-gray-400">
        Modern E-Commerce Platform powered by
        Microservices, Next.js, MongoDB and DevOps
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/products"
          className="bg-blue-600 px-6 py-3 rounded-lg"
        >
          Shop Now
        </a>

        <a
          href="/register"
          className="border px-6 py-3 rounded-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}