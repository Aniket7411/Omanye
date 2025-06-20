import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Full product data structure
const productData = {
  categories: [
    {
      id: 'building-hardware',
      name: 'Building & Hardware',
      description: 'Building supplies, timber, fencing and facades',
      subcategories: [
        {
          id: 'building-supplies',
          name: 'Building Supplies',
          products: [
            'Concrete Products, Prefabricated Concrete Support Structures',
            'Driveway & Porcelain Paving',
            'Block Paving, Pavement Blocks',
            'Frost And Water Proofers',
            'Roofing Tiles',
            'Guttering & Drainage',
            'Marble Slabs, Stones and Tiles',
            'Decorative & Rocky Stones',
            'Waterproof & Weather Resistant Cement'
          ]
        },
        {
          id: 'facades-fencing',
          name: 'Facades and Fencing',
          products: [
            'Window Handles, Fasteners & Stays',
            'Doors for Home and Industry (Internal, External, Security, Fire Rated, Industrial)',
            'Windows (Wooden, uPVC, Aluminium)',
            'Panel Fencing'
          ]
        }
      ]
    },
    {
      id: 'kitchen-bathroom',
      name: 'Kitchen and Bathroom',
      description: 'Bathroom suites, kitchen appliances and units',
      subcategories: [
        {
          id: 'bathroom-plumbing',
          name: 'Bathroom and Plumbing',
          products: [
            'Wastes Traps & Overflow and Kitchen Sinks Accessories',
            'Pipes, Plumbing Supplies',
            'Bathroom Decorations And Accessories',
            'Bathroom Showers, Cubicles And Accessories',
            'Shower Curtains',
            'Towels',
            'Basins',
            'Toilet Seats',
            'Tap Fittings and Spares',
            'Push Fit Waste Fittings',
            'Bath, Basins & Sink Fittings',
            'Toilet Repair & Fittings',
            'Wet Rooms',
            'Shower Trays',
            'Shower Screens'
          ]
        },
        {
          id: 'bathroom-suite',
          name: 'Bathroom Suite',
          products: [
            'Wall Hung Toilet',
            'Freestanding Baths and Home Spa',
            'Shower Baths',
            'Bath Screens'
          ]
        },
        {
          id: 'kitchen-appliances',
          name: 'Kitchen Appliances',
          products: [
            'Cooker',
            'Kitchen Sinks, Stainless Steel Sinks',
            'Hand Mixers',
            'Blenders',
            'Freezer',
            'Fridge Freezer',
            'Microwave',
            'Rice Cooker',
            'Refrigeration',
            'Kitchen cooker ovens',
            'Induction Hobs',
            'Gas Hobs',
            'Cooker Hoods'
          ]
        },
        {
          id: 'kitchen-units',
          name: 'Kitchens',
          products: [
            'Kitchen Units And Cabinets',
            'Complete Kitchen Units Supply',
            'Solid Wood Worktops Retail and Supply',
            'Laminate Worktops',
            'Kitchen Worktops and Surfaces',
            'Kitchen Flooring',
            'Kitchen Cabinets Handles',
            'Kitchen laundry'
          ]
        }
      ]
    },
    {
      id: 'home-bedrooms',
      name: 'Home and Bedrooms',
      description: 'Furniture, appliances and furnishings',
      subcategories: [
        {
          id: 'home-furniture',
          name: 'Home Furniture',
          products: [
            'Bed And Mattress',
            'Bedside Table',
            'Sofa',
            'Wardrobe'
          ]
        },
        {
          id: 'home-furnishing',
          name: 'Home Furnishing',
          products: [
            'Wall Art And Pictures',
            'Clocks And Home Accessories',
            'Curtain Pole Hanging Brackets',
            'Curtain Tracks',
            'Curtain Poles & Tracks',
            'Curtains, Blinds & Shutters'
          ]
        },
        {
          id: 'cooking-dining',
          name: 'Cooking and Dining',
          products: [
            'Dinner Sets, Bowls, Cutlery and Dinner Plate Sets',
            'Drinkware, drinking cups & wine glasses for Special Occasions',
            'Cookware, Saucepans, Frying Pans For Homes and Food Business'
          ]
        }
      ]
    },
    {
      id: 'mep',
      name: 'MEP (Mechanical, Electrical, Plumbing)',
      description: 'Lighting, electricals and plumbing systems',
      subcategories: [
        {
          id: 'mechanical',
          name: 'Mechanical',
          products: [
            'Fans and Extractors',
            'HVAC',
            'Heaters',
            'Air Conditioners and Cooling Systems',
            'Ventilators and grilles'
          ]
        },
        {
          id: 'electrical-lighting',
          name: 'Electricals and Lighting',
          products: [
            'Standard Electrical Installation',
            'Advanced Electrical Installation',
            'Connected Smart Installation',
            'Integrated Automation Systems',
            'Fixings & Plugs',
            'Fans',
            'Home Wiring Cables',
            'Standard Extension Leads',
            'Extension Leads, Cable Reels',
            'Sockets, Plugs & Electrical Fittings',
            'Lighting, Fixtures, And Fittings',
            'Cable Management'
          ]
        },
        {
          id: 'lights',
          name: 'Lights',
          products: [
            'Indoor range (Downlights, Projectors, Ceiling, Linear systems, etc)',
            'Outdoor range (Ceiling lamps, Wall lamps, Bollards & poles, etc)',
            'Flex Light range',
            'Electronic range',
            'Decorative Lights',
            'Streetlights'
          ]
        },
        {
          id: 'plumbing',
          name: 'Plumbing',
          products: [
            'Plumbing fixtures and systems'
          ]
        }
      ]
    },
    {
      id: 'tools-equipment',
      name: 'Tools and Equipment',
      description: 'Hand tools, power tools and equipment',
      subcategories: [
        {
          id: 'hand-tools',
          name: 'Hand Tools',
          products: [
            'Hammers, Crowbars And Axes',
            'Screwdrivers',
            'Chisels',
            'Wire Brushes',
            'Breakers & Demolition Tools',
            'Tape Measure',
            'Bricklaying Tools',
            'Nail Guns',
            'Vice & Clamp',
            'Hand Saws',
            'Hex Keys',
            'Electrical Tester',
            'Soldering Iron',
            'Blow Torches'
          ]
        },
        {
          id: 'equipment',
          name: 'Equipment',
          products: [
            'Brackets',
            'Nails',
            'Sandpaper',
            'Workshop Machinery',
            'Sawing & Blades Drill Accessories',
            'Hole Saws',
            'Ladders and Steps',
            'Step Ladders',
            'Step Stools, Step Ups Ladders',
            'Work Platforms'
          ]
        },
        {
          id: 'power-tools',
          name: 'Power Tools',
          products: [
            'Drills (Combi, Hammer, SDS, Angle)',
            'Saws (Circular, Jig, Reciprocating)',
            'Angle Grinders',
            'Planers',
            'Routers',
            'Sanders',
            'Electric Screwdrivers',
            'Impact Drivers & Wrenches'
          ]
        },
        {
          id: 'power-tool-accessories',
          name: 'Power Tools Accessories',
          products: [
            'Drilling Sets',
            'Drilling Bits',
            'Screwdriver Bits',
            'Power & Accessories',
            'Jigsaw Blade',
            'Wood Drill Bits',
            'Specialist Drill Bits & Accessories',
            'Core Drill Bits'
          ]
        },
        {
          id: 'tiling-tools',
          name: 'Tiling Tools and Accessories',
          products: [
            'Tile Spacer',
            'Tile Cutter',
            'Tiling Tools'
          ]
        },
        {
          id: 'measure-tools',
          name: 'Measure and Level Tools',
          products: [
            'Tape Measure',
            'Spirit Levels',
            'Laser Levels',
            'Measure Level Tools'
          ]
        }
      ]
    },
    {
      id: 'outdoor-garden',
      name: 'Outdoor, Garden and Public Space',
      description: 'Garden tools, furniture and outdoor items',
      subcategories: [
        {
          id: 'outdoor-garden',
          name: 'Outdoor and Garden',
          products: [
            'Garden Power Tools',
            'Garden Furniture',
            'Garden Dining Set',
            'Garden Sofa',
            'Garden Furniture, Chairs, Sofas and Patio Sets'
          ]
        }
      ]
    },
    {
      id: 'tiling-flooring',
      name: 'Tiling and Flooring',
      description: 'Flooring options, tiles and accessories',
      subcategories: [
        {
          id: 'flooring',
          name: 'Flooring',
          products: [
            'Laminate Flooring',
            'Real Wood Top Layer Flooring',
            'Epoxy Flooring'
          ]
        },
        {
          id: 'tiles',
          name: 'Tiles',
          products: [
            'Vinyl Flooring',
            'Vinyl Floating Flooring',
            'Carpet Tiles',
            'Floor Tiles',
            'Wall Cladding',
            'Decorative Wall and Floor Tiles',
            'Patterned Tiles',
            'Mosaic Wall and Floor Tiles',
            'Porcelain Tiles',
            'Grout',
            'Architectural Ceramics'
          ]
        },
        {
          id: 'flooring-accessories',
          name: 'Accessories and Tools',
          products: [
            'Flooring and Tiling Supplies',
            'Tiling Adhesives',
            'Tile Sealants',
            'Scotias and Floor Trims',
            'PVC Cladding',
            'Grouts'
          ]
        }
      ]
    },
    {
      id: 'painting-decoration',
      name: 'Painting and Decoration',
      description: 'Paints, treatments and decorating tools',
      subcategories: [
        {
          id: 'paint-treatment',
          name: 'Paint and Wood treatment',
          products: [
            'Paint',
            'Masonry Paint',
            'Interior Emulsion Paint',
            'Metal Paint',
            'Spray Paint',
            'Specialist Paint & Treatment',
            'Primers & Undercoats',
            'Paint Solvents and Thinners',
            'Marine Coats',
            'Surface preparation and Pre-treatments'
          ]
        },
        {
          id: 'decorating-tools',
          name: 'Decorating Tools and Supplies',
          products: [
            'Paint Brushes & Sprayers',
            'Tapes',
            'Paint Rollers',
            'Knives & Scrappers',
            'Knives & Cutters',
            'Scuttles',
            'Paint Rollers, Pads, Sleeves, Trays & Poles'
          ]
        }
      ]
    },
    {
      id: 'ceiling-cladding',
      name: 'Ceiling, Claddings & Partitioning',
      description: 'Plaster products and ceiling materials',
      subcategories: [
        {
          id: 'ceiling-materials',
          name: 'Ceiling Materials',
          products: [
            'Plaster Products',
            'Plasterboard',
            'Plasterboard Fixing and Screws',
            'POP or White Cement',
            'Ceiling Tiles'
          ]
        }
      ]
    },
    {
      id: 'screws-fittings',
      name: 'Screws, Nails and Fittings',
      description: 'Fasteners, hardware and accessories',
      subcategories: [
        {
          id: 'screws',
          name: 'Screws',
          products: [
            'Screws Trade Packs',
            'Wood Screws',
            'Decking Screws',
            'Timber Screws',
            'Drywall Screws',
            'Stainless Steel Screws',
            'Self-Tapping and Drilling Screws',
            'Masonry, Concrete Screws',
            'Machine Screws',
            'Electrical Screws',
            'Security Screws',
            'Flooring Screws',
            'Screws Caps'
          ]
        },
        {
          id: 'fixers-fasteners',
          name: 'Fixers and Fasteners',
          products: [
            'Wall Plugs',
            'Frame and Hammer Fixings',
            'Heavy Duty Screw Fixings & Rivets',
            'Hooks & Eyes fixings',
            'Parkers and Shims Fixings',
            'Plasterboard Fixings',
            'Resin Fixings',
            'Cavity Fixings',
            'Hose and Tool Clips',
            'Mirrors and Picture Fittings'
          ]
        },
        {
          id: 'nails',
          name: 'Nails',
          products: [
            'Bright Nails',
            'Galvanised Nails',
            'Masonry Nails',
            'Collated Nails'
          ]
        },
        {
          id: 'hardware-accessories',
          name: 'Hardware Accessories',
          products: [
            'Door Handles',
            'Hinges and Bolts',
            'Cylinders',
            'Locks',
            'Multipoint Locks',
            'Key Management Systems',
            'Closers',
            'Stoppers',
            'Sliding Systems',
            'Window and Door Hardware'
          ]
        }
      ]
    },
    {
      id: 'finishes-decoration',
      name: 'Finishes and Decoration',
      description: 'Interior and exterior finishing solutions',
      subcategories: [
        {
          id: 'finishes-solutions',
          name: 'Finishes Solutions',
          products: [
            'Interior Finishes',
            'Exterior Finishes',
            'Technical and Decorative Profiles',
            'Expansion Joints',
            'Technical Entrance Mats',
            'Universal Accessibility and Safety Solutions'
          ]
        }
      ]
    },
    {
      id: 'construction-chemicals',
      name: 'Construction Chemicals',
      description: 'Specialty chemicals for construction',
      subcategories: [
        {
          id: 'chemical-solutions',
          name: 'Chemical Solutions',
          products: [
            'Waterproofing',
            'Sealants',
            'Concrete Admixtures',
            'Adhesives',
            'Coating',
            'Polymer Bonding Agents',
            'Repair and Rehabilitation',
            'Concrete Curing Compounds',
            'Retarder',
            'Accelerators',
            'Mortar additives',
            'Mould releasing agents',
            'Concrete hardeners',
            'Plasticizers',
            'Flooring compounds',
            'Superplasticizers',
            'Cementitious materials',
            'Epoxy',
            'Air-entraining',
            'Green Construction Chemicals'
          ]
        }
      ]
    }
  ]
};

const ConstructionProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Filter products based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts([]);
      return;
    }

    const results = [];
    productData.categories.forEach(category => {
      category.subcategories.forEach(subcategory => {
        subcategory.products.forEach(product => {
          if (product.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push({
              product,
              category: category.name,
              subcategory: subcategory.name
            });
          }
        });
      });
    });

    setFilteredProducts(results);
  }, [searchTerm]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setIsMobileMenuOpen(false);
  };

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setIsMobileMenuOpen(false);
  };

  const resetSelection = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#00a3A1] text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Construction Products</h1>
          <button 
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row">
        {/* Sidebar - Categories */}
        <aside className={`md:w-1/4 md:pr-6 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="bg-white rounded-lg shadow-md p-4 mb-6 sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
            <ul className="space-y-2 max-h-screen overflow-y-auto">
              {productData.categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategorySelect(category)}
                    className={`w-full text-left px-3 py-2 rounded-md transition ${selectedCategory?.id === category.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      {selectedCategory?.id === category.id && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      )}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="md:w-3/4">
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Search 10,000+ construction products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              {(selectedCategory || selectedSubcategory) && (
                <button
                  onClick={resetSelection}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition whitespace-nowrap"
                >
                  View All Categories
                </button>
              )}
            </div>

            {/* Search Results */}
            {searchTerm && filteredProducts.length > 0 && (
              <div className="mt-4 border-t pt-4">
                <h3 className="font-medium text-gray-700 mb-2">Search Results ({filteredProducts.length})</h3>
                <ul className="space-y-2">
                  {filteredProducts.map((item, index) => (
                    <li key={index} className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition cursor-pointer">
                      <p className="font-medium">{item.product}</p>
                      <p className="text-sm text-gray-600">{item.category} &gt; {item.subcategory}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {searchTerm && filteredProducts.length === 0 && (
              <div className="mt-4 text-gray-500">
                <svg className="mx-auto h-8 w-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-center">No products found matching "{searchTerm}"</p>
              </div>
            )}
          </div>

          {/* Category/Subcategory Content */}
          {!searchTerm && (
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
              {!selectedCategory && !selectedSubcategory ? (
                <div className="text-center py-8">
                  <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Browse Construction Products</h3>
                  <p className="mt-2 text-gray-500 max-w-md mx-auto">
                    Select a category from the sidebar or use the search bar to find specific construction products and equipment.
                  </p>
                </div>
              ) : selectedCategory && !selectedSubcategory ? (
                <div>
                  <div className="flex items-center mb-4">
                    <button
                      onClick={resetSelection}
                      className="mr-2 text-blue-600 hover:text-blue-800"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h2 className="text-xl font-semibold">{selectedCategory.name}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">{selectedCategory.description}</p>
                  
                  <h3 className="text-lg font-medium mb-4">Subcategories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedCategory.subcategories.map((subcategory) => (
                      <div
                        key={subcategory.id}
                        onClick={() => handleSubcategorySelect(subcategory)}
                        className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition flex flex-col"
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mr-3">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-600">{subcategory.name}</h4>
                            <p className="text-sm text-gray-500 mt-1">
                              {subcategory.products.length} products available
                            </p>
                          </div>
                        </div>
                        <button className="mt-3 text-sm text-blue-600 hover:text-blue-800 self-start">
                          View all →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => setSelectedSubcategory(null)}
                      className="mr-2 text-blue-600 hover:text-blue-800"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h2 className="text-xl font-semibold">
                      {selectedCategory.name} &gt; {selectedSubcategory.name}
                    </h2>
                  </div>
                  
                  <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-gray-600">
                      Showing {selectedSubcategory.products.length} products in this subcategory
                    </p>
                    <div className="flex items-center">
                      <label htmlFor="sort" className="text-sm text-gray-600 mr-2">Sort by:</label>
                      <select 
                        id="sort" 
                        className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option>Most Popular</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest</option>
                      </select>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {selectedSubcategory.products.map((product, index) => (
                      <li key={index} className="border rounded-md p-4 hover:shadow-md transition">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-12 w-12 rounded-md bg-gray-200 flex items-center justify-center mr-4">
                            <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-medium">{product}</h3>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">In Stock</span>
                              {/* <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">Free Delivery</span> */}
                            </div>
                          </div>
                          <div className="ml-4 flex flex-col items-end">
                            <Link to="/contact-us">
                            <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
                              Contact Us
                            </button>
                            </Link>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Construction Products</h3>
              <p className="text-gray-400">
                Your one-stop shop for all construction materials and equipment.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Categories</h4>
              <ul className="space-y-2">
                {productData.categories.slice(0, 5).map(category => (
                  <li key={category.id}>
                    <button 
                      onClick={() => handleCategorySelect(category)}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Shipping Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <address className="text-gray-400 not-italic">
                123 Construction Way<br />
                Building City, BC 12345<br />
                <a href="tel:+1234567890" className="hover:text-white transition">(123) 456-7890</a><br />
                <a href="mailto:info@constructionproducts.com" className="hover:text-white transition">info@constructionproducts.com</a>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Construction Products. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default ConstructionProducts;