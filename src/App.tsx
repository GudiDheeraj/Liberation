import React, { useState } from 'react';
import { Search, ShoppingBag, AlertCircle } from 'lucide-react';
import { products } from './data/products';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<{
    isAmerican: boolean;
    alternatives?: string[];
  } | null>(null);
  const [showNotFound, setShowNotFound] = useState(false);

  const handleSearch = () => {
    const product = products.find(
      (p) => p.name.toLowerCase() === searchTerm.toLowerCase()
    );
    
    if (product) {
      setSearchResult(product);
      setShowNotFound(false);
    } else {
      setSearchResult(null);
      setShowNotFound(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <ShoppingBag className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Product Alternative Finder
            </h1>
            <p className="text-gray-600">
              Find non-American alternatives for American-made products
            </p>
          </div>

          {/* Search Box */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex gap-2">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter product name (e.g., 'Nike Shoes', 'Apple iPhone')"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <button
                onClick={handleSearch}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>

          {/* Results */}
          {searchResult && (
            <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
              {searchResult.isAmerican ? (
                <>
                  <p className="text-red-600 mb-4">
                    This is an American-made product. Here are some alternatives:
                  </p>
                  <ul className="space-y-2">
                    {searchResult.alternatives?.map((alt, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 p-2 bg-gray-50 rounded"
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {alt}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-green-600">
                  This product is not American-made. You can proceed with your purchase!
                </p>
              )}
            </div>
          )}

          {/* Not Found Message */}
          {showNotFound && (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <p className="text-gray-600">
                Product not found in our database. Please try another product.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;