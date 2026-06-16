<div
  key={product._id}
  className="bg-black border border-blue-500 rounded-xl p-6 shadow-lg mb-6"
>
  <h2 className="text-2xl font-bold text-blue-400">
    {product.name}
  </h2>

  <p className="text-green-400 text-xl mt-3">
    ₹ {product.price}
  </p>

  <p className="text-gray-400 mt-2">
    {product.category}
  </p>

  <button
    onClick={() => addToCart(product)}
    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded mt-4"
  >
    Add To Cart
  </button>
</div>