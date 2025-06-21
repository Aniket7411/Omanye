import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Full product data structure with image paths
const productData = {
  categories: [
    {
      id: 'building-hardware',
      name: 'Building & Hardware',
      description: 'Building supplies, timber, fencing and facades',
      image: 'assets/images/banner/01.webp',
      subcategories: [
        {
          id: 'building-supplies',
          name: 'Building Supplies',
          image: 'assets/images/categories/building-supplies.webp',
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
          image: 'assets/images/categories/fencing.webp',
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
      image: 'assets/images/banner/mk.webp',
      subcategories: [
        {
          id: 'bathroom-plumbing',
          name: 'Bathroom and Plumbing',
          image: 'assets/images/categories/bathroom.webp',
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
          image: 'assets/images/categories/bathroom-suite.webp',
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
          image: 'assets/images/categories/kitchen-appliances.webp',
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
          image: 'assets/images/categories/kitchen.webp',
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
      image: 'assets/images/categories/home-furniture.webp',
      subcategories: [
        {
          id: 'home-furniture',
          name: 'Home Furniture',
          image: 'assets/images/categories/furniture.webp',
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
          image: 'assets/images/categories/furnishing.webp',
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
          image: 'assets/images/categories/dining.webp',
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
      image: 'assets/images/categories/mep.webp',
      subcategories: [
        {
          id: 'mechanical',
          name: 'Mechanical',
          image: 'assets/images/categories/mechanical.webp',
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
          image: 'assets/images/categories/electrical.webp',
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
          image: 'assets/images/categories/lighting.webp',
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
          image: 'assets/images/categories/plumbing.webp',
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
      image: 'assets/images/categories/tools.webp',
      subcategories: [
        {
          id: 'hand-tools',
          name: 'Hand Tools',
          image: 'assets/images/categories/hand-tools.webp',
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
          image: 'assets/images/categories/equipment.webp',
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
          image: 'assets/images/categories/power-tools.webp',
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
          image: 'assets/images/categories/tool-accessories.webp',
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
          image: 'assets/images/categories/tiling-tools.webp',
          products: [
            'Tile Spacer',
            'Tile Cutter',
            'Tiling Tools'
          ]
        },
        {
          id: 'measure-tools',
          name: 'Measure and Level Tools',
          image: 'assets/images/categories/measure-tools.webp',
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
      image: 'assets/images/categories/garden.webp',
      subcategories: [
        {
          id: 'outdoor-garden',
          name: 'Outdoor and Garden',
          image: 'assets/images/categories/outdoor.webp',
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
      image: 'assets/images/categories/flooring.webp',
      subcategories: [
        {
          id: 'flooring',
          name: 'Flooring',
          image: 'assets/images/categories/floor-materials.webp',
          products: [
            'Laminate Flooring',
            'Real Wood Top Layer Flooring',
            'Epoxy Flooring'
          ]
        },
        {
          id: 'tiles',
          name: 'Tiles',
          image: 'assets/images/categories/tiles.webp',
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
          image: 'assets/images/categories/flooring-tools.webp',
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
      image: 'assets/images/categories/painting.webp',
      subcategories: [
        {
          id: 'paint-treatment',
          name: 'Paint and Wood treatment',
          image: 'assets/images/categories/paint.webp',
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
          image: 'assets/images/categories/painting-tools.webp',
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
      image: 'assets/images/categories/ceiling.webp',
      subcategories: [
        {
          id: 'ceiling-materials',
          name: 'Ceiling Materials',
          image: 'assets/images/categories/ceiling-materials.webp',
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
      image: 'assets/images/categories/hardware.webp',
      subcategories: [
        {
          id: 'screws',
          name: 'Screws',
          image: 'assets/images/categories/screws.webp',
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
          image: 'assets/images/categories/fasteners.webp',
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
          image: 'assets/images/categories/nails.webp',
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
          image: 'assets/images/categories/hardware-accessories.webp',
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
      image: 'assets/images/categories/finishes.webp',
      subcategories: [
        {
          id: 'finishes-solutions',
          name: 'Finishes Solutions',
          image: 'assets/images/categories/finishing-solutions.webp',
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
      image: 'assets/images/categories/chemicals.webp',
      subcategories: [
        {
          id: 'chemical-solutions',
          name: 'Chemical Solutions',
          image: 'assets/images/categories/construction-chemicals.webp',
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
  const navigate = useNavigate();

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
              subcategory: subcategory.name,
              categoryId: category.id,
              subcategoryId: subcategory.id
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

  const handleProductSelect = (product, categoryId, subcategoryId) => {
    // Encode the product name for URL
    const encodedProduct = encodeURIComponent(product);
    navigate(`/products/${categoryId}/${subcategoryId}/${encodedProduct}`);
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
                    <Link to="/contact-us">
                    <li 
                      key={index} 
                      className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition cursor-pointer"
                      onClick={() => handleProductSelect(item.product, item.categoryId, item.subcategoryId)}
                    >
                      <p className="font-medium">{item.product}</p>
                      <p className="text-sm text-gray-600">{item.category} &gt; {item.subcategory}</p>
                    </li>
                    </Link>
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
                  <div className="mx-auto mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
                    <div className="relative h-40 rounded-lg overflow-hidden">
                      <img 
                        src="assets/images/banner/mk.webp" 
                        alt="Kitchen and Bathroom" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 rounded-lg overflow-hidden">
                      <img 
                        src="assets/images/banner/12.webp" 
                        alt="Building Materials" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-40 rounded-lg overflow-hidden">
                      <img 
                        src="assets/images/banner/01.webp" 
                        alt="Construction Products" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
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
                  
                  {/* Category Banner Image */}
                  {selectedCategory.image && (
                    <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                      <img 
                        src={selectedCategory.image} 
                        alt={selectedCategory.name} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <h3 className="text-white text-2xl font-bold">{selectedCategory.name}</h3>
                      </div>
                    </div>
                  )}
                  
                  <p className="text-gray-600 mb-6">{selectedCategory.description}</p>
                  
                  <h3 className="text-lg font-medium mb-4">Subcategories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedCategory.subcategories.map((subcategory) => (
                      
                      <div
                        key={subcategory.id}
                        onClick={() => handleSubcategorySelect(subcategory)}
                        className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition flex flex-col"
                      >
                        {subcategory.image && (
                          <div className="relative h-32 w-full rounded-md overflow-hidden mb-3">
                            <img 
                              src={subcategory.image} 
                              alt={subcategory.name} 
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex items-start flex-grow">
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
                        <Link to="/products-detail">
                        <button className="mt-3 text-sm text-blue-600 hover:text-blue-800 self-start">
                          View all →
                        </button>
                        </Link>
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
                  
                  {/* Subcategory Banner Image */}
                  {selectedSubcategory.image && (
                    <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                      <img 
                        src={selectedSubcategory.image} 
                        alt={selectedSubcategory.name} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <h3 className="text-white text-2xl font-bold">{selectedSubcategory.name}</h3>
                      </div>
                    </div>
                  )}
                  
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
                      <li 
                        key={index} 
                        className="border rounded-md p-4 hover:shadow-md transition cursor-pointer"
                        onClick={() => handleProductSelect(product, selectedCategory.id, selectedSubcategory.id)}
                      >
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
                            </div>
                          </div>
                          <div className="ml-4 flex flex-col items-end">
                            <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
                              View Details
                            </button>
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
    </div>
  );
};

export default ConstructionProducts;