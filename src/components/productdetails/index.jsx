import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Organized product data by categories and subcategories
const productsByCategory = {
  'Building & Hardware': {
    'Construction Materials': [
      {
        id: 1,
        name: 'Premium Cement',
        description: 'High-quality cement for strong and durable construction',
        uses: 'Foundations, walls, slabs, and structural elements',
        image: 'assets/images/banner/12.webp'
      },
      {
        id: 2,
        name: 'Reinforcement Bars',
        description: 'High-strength steel rebars for concrete reinforcement',
        uses: 'Structural reinforcement in concrete construction',
        image: 'assets/images/banner/mk.webp'
      }
    ],
    'Doors & Windows': [
      {
        id: 3,
        name: 'Steel Security Door',
        description: 'Heavy-duty steel door with security features',
        uses: 'Main entrances, security-sensitive areas',
        image: 'assets/images/banner/01.webp'
      }
    ]
  },
  'Kitchen and Bathroom': {
    'Fixtures': [
      {
        id: 4,
        name: 'Kitchen Faucet',
        description: 'Modern kitchen faucet with pull-down sprayer',
        uses: 'Kitchen sink installation and renovation',
        image: 'assets/images/banner/12.webp'
      }
    ],
    'Cabinetry': [
      {
        id: 5,
        name: 'Modular Kitchen Set',
        description: 'Premium modular kitchen cabinets',
        uses: 'Kitchen installation and remodeling',
        image: 'assets/images/banner/mk.webp'
      }
    ]
  },
  'MEP': {
    'Electrical': [
      {
        id: 6,
        name: 'LED Lighting',
        description: 'Energy-efficient LED lighting solutions',
        uses: 'Residential and commercial lighting installations',
        image: 'assets/images/banner/01.webp'
      }
    ],
    'Plumbing': [
      {
        id: 7,
        name: 'PVC Pipes',
        description: 'Durable PVC piping for plumbing systems',
        uses: 'Water supply and drainage systems',
        image: 'assets/images/banner/12.webp'
      }
    ]
  }
  // Add other categories in the same format
};

// Convert the structured data to a flat array for filtering
const allProducts = Object.entries(productsByCategory).flatMap(([category, subCategories]) =>
  Object.entries(subCategories).flatMap(([subCategory, products]) =>
    products.map(product => ({
      ...product,
      category,
      subCategory
    }))
  )
);

const categories = Object.keys(productsByCategory);

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  // Get subcategories for the selected category
  const subCategories = selectedCategory
    ? Object.keys(productsByCategory[selectedCategory] || {})
    : [];

  // Filter products based on selections
  const filteredProducts = allProducts.filter(product => {
    if (!selectedCategory && !selectedSubCategory) return true;
    if (selectedCategory && !selectedSubCategory) return product.category === selectedCategory;
    return product.category === selectedCategory && product.subCategory === selectedSubCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Construction Products
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            High-quality materials for all your construction needs
          </p>
        </div>

        {/* Categories Navigation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Product Categories</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedSubCategory(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium ${!selectedCategory ? 'bg-[#00A3A1] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              All Products
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedSubCategory(null);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category ? 'bg-[#00A3A1] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Subcategories Filter */}
        {selectedCategory && subCategories.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {selectedCategory} Subcategories
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSubCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${!selectedSubCategory ? 'bg-[#00A3A1] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                All {selectedCategory}
              </button>
              {subCategories.map(subCat => (
                <button
                  key={subCat}
                  onClick={() => setSelectedSubCategory(subCat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${selectedSubCategory === subCat ? 'bg-[#00A3A1] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  {subCat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try selecting a different category or subcategory
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Separate Product Card component for better maintainability
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
          {/* <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {product.subCategory}
          </span> */}
        </div>

        <div className="mt-2 flex-grow">
          <h4 className="text-sm font-medium text-gray-900">Description:</h4>
          <p className="mt-1 text-sm text-gray-600">{product.description}</p>
        </div>

        <div className="mt-2">
          <h4 className="text-sm font-medium text-gray-900">Uses:</h4>
          <p className="mt-1 text-sm text-gray-600">{product.uses}</p>
        </div>

        <div className="mt-6">
          <Link to="/contact-us">
            <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#00A3A1] hover:bg-[#0a8f8d]">
              Click for Quote          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;