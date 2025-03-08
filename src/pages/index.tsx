import React, { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';

interface Residence {
  value: number;
  location: string;
  size: number;
  features: string;
}

interface Person {
  id: number;
  name: string;
  company: string;
  netWorth: number;
  industry: string;
  age: number;
  citizenship: string;
  wealthSource: string;
  yoyChange: string;
  residence: Residence;
  bio: string;
  imagePath: string;
  imageHousePath: string;
}

const BillionairesApp = () => {
  const [richestMen, setRichestMen] = useState<Person[]>([]);
  const [filteredPeople, setFilteredPeople] = useState<Person[]>([]);
  const [searchText, setSearchText] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [sortOption, setSortOption] = useState('net-worth-desc');
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/richest_men/');
        const data = await response.json();
        setRichestMen(data);
        setFilteredPeople(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const totalNetWorth = richestMen.reduce((sum, person) => sum + person.netWorth, 0);
  const averageNetWorth = totalNetWorth / richestMen.length;
  const mostExpensiveHome = Math.max(...richestMen.map(person => person.residence.value));
  const techBillionaires = richestMen.filter(person => person.industry === 'tech').length;

  useEffect(() => {
    let result = [...richestMen];

    if (industryFilter !== 'all') {
      result = result.filter(person => person.industry === industryFilter);
    }

    if (searchText) {
      const searchLower = searchText.toLowerCase();
      result = result.filter(person =>
        person.name.toLowerCase().includes(searchLower) ||
        person.company.toLowerCase().includes(searchLower)
      );
    }

    switch (sortOption) {
      case 'net-worth-desc':
        result.sort((a, b) => b.netWorth - a.netWorth);
        break;
      case 'net-worth-asc':
        result.sort((a, b) => a.netWorth - b.netWorth);
        break;
      case 'age-desc':
        result.sort((a, b) => b.age - a.age);
        break;
      case 'age-asc':
        result.sort((a, b) => a.age - b.age);
        break;
      case 'home-value-desc':
        result.sort((a, b) => b.residence.value - a.residence.value);
        break;
      default:
        break;
    }

    setFilteredPeople(result);
  }, [searchText, industryFilter, sortOption, richestMen]);

  const resetFilters = () => {
    setSearchText('');
    setIndustryFilter('all');
    setSortOption('net-worth-desc');
  };

  const openPersonModal = (person: Person) => {
    setSelectedPerson(person);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPerson(null);
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center p-5"
        style={{
          backgroundImage: "url('/images/turquoise-swirl.png')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}>

        <div className="bg-gray-50 min-h-screen"
        style={{
          backgroundImage: "url('/images/turquoise-swirl.png')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}>
        
          <header className="bg-blue-600 text-white py-8 mb-8">
            <div className="max-w-6xl mx-auto px-4">
              <h1 className="text-4xl font-bold">World's 10 Richest Men</h1>
              <p className="mt-2 italic">Explore wealth, assets, and luxurious homes of the world's wealthiest individuals</p>
            </div>
          </header>

          <div className="max-w-6xl mx-auto px-4 pb-12">
            <div className="flex flex-wrap justify-between gap-4 mb-8">
              <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-64 text-center">
                <h3 className="text-gray-600 text-sm font-medium">Total Net Worth</h3>
                <div className="text-blue-600 text-3xl font-bold my-2">${totalNetWorth.toFixed(2)}B</div>
                <p className="text-gray-500 text-sm">Combined wealth</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-64 text-center">
                <h3 className="text-gray-600 text-sm font-medium">Average Net Worth</h3>
                <div className="text-blue-600 text-3xl font-bold my-2">${averageNetWorth.toFixed(2)}B</div>
                <p className="text-gray-500 text-sm">Per individual</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-64 text-center">
                <h3 className="text-gray-600 text-sm font-medium">Most Expensive Home</h3>
                <div className="text-blue-600 text-3xl font-bold my-2">${mostExpensiveHome}M</div>
                <p className="text-gray-500 text-sm">Mukesh Ambani's Antilia</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-64 text-center">
                <h3 className="text-gray-600 text-sm font-medium">Tech Billionaires</h3>
                <div className="text-blue-600 text-3xl font-bold my-2">{techBillionaires}</div>
                <p className="text-gray-500 text-sm">From technology sector</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 mb-8 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Sort by:</span>
                <select
                  className="bg-gray-50 border border-gray-300 rounded px-3 py-2"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="net-worth-desc">Net Worth (High to Low)</option>
                  <option value="net-worth-asc">Net Worth (Low to High)</option>
                  <option value="age-desc">Age (Oldest First)</option>
                  <option value="age-asc">Age (Youngest First)</option>
                  <option value="home-value-desc">Home Value (High to Low)</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Filter:</span>
                <select
                  className="bg-gray-50 border border-gray-300 rounded px-3 py-2"
                  value={industryFilter}
                  onChange={(e) => setIndustryFilter(e.target.value)}
                >
                  <option value="all">All Industries</option>
                  <option value="tech">Technology</option>
                  <option value="retail">Retail</option>
                  <option value="luxury">Luxury Goods</option>
                  <option value="energy">Energy</option>
                  <option value="finance">Finance</option>
                </select>
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 rounded px-3 py-2 flex-grow"
                placeholder="Search by name..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="bg-gray-200 hover:bg-gray-300 rounded px-4 py-2 ml-auto transition-colors"
                onClick={resetFilters}
              >
                Reset All Filters
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredPeople.map(person => (
                <div key={person.id} className="bg-white rounded-lg shadow overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="bg-blue-600 p-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-50">{person.name}</h2>
                    <span className="text-gray-50 text-sm">{person.company}</span>
                  </div>
                  <div className="h-48 bg-blue-50 flex items-center justify-center overflow-hidden">
                    <img src={person.imagePath} alt={person.name} className="max-w-full max-h-full" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between pb-3 mb-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Net Worth:</span>
                      <span className="font-semibold text-blue-600">${person.netWorth}B</span>
                    </div>
                    <div className="flex justify-between pb-3 mb-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Primary Residence:</span>
                      <span className="font-semibold text-blue-600">${person.residence.value}M</span>
                    </div>
                    <div className="flex justify-between pb-3 mb-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Industry:</span>
                      <span className="font-semibold text-blue-600">{capitalizeFirstLetter(person.industry)}</span>
                    </div>
                    <button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-3 transition-colors"
                      onClick={() => openPersonModal(person)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredPeople.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <p className="text-xl text-gray-600">No results found. Try adjusting your filters.</p>
                <button
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                  onClick={resetFilters}
                >
                  Reset Filters
                </button>
              </div>
            )}

            <footer className="text-center text-gray-500 mt-12 pt-6 border-t border-gray-200">
              <p className="mb-1">Data updated as of March 2025</p>
              <p>Note: Net worth figures fluctuate daily based on stock prices and other factors</p>
            </footer>

            {modalOpen && selectedPerson && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg w-full max-w-4xl max-h-screen overflow-y-auto animate-fadeIn">
                  <div className="relative">
                    <button
                      onClick={closeModal}
                      className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                    >
                      &times;
                    </button>
                    <div className="p-6 border-b border-gray-200">
                      <h2 className="text-2xl font-bold text-gray-800">{selectedPerson.name}</h2>
                      <div className="text-gray-600 mt-1">{selectedPerson.company}</div>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-100">Wealth Details</h3>
                          <div className="flex justify-between pb-2 mb-2 border-b border-gray-200">
                            <span className="font-medium text-gray-700">Net Worth:</span>
                            <span className="font-semibold text-blue-600">${selectedPerson.netWorth}B</span>
                          </div>
                          <div className="flex justify-between pb-2 mb-2 border-b border-gray-200">
                            <span className="font-medium text-gray-700">Wealth Source:</span>
                            <span className="font-semibold text-gray-800">{selectedPerson.wealthSource}</span>
                          </div>
                          <div className="flex justify-between pb-2 mb-2 border-b border-gray-200">
                            <span className="font-medium text-gray-700">Industry:</span>
                            <span className="font-semibold text-gray-800">{capitalizeFirstLetter(selectedPerson.industry)}</span>
                          </div>
                          <div className="flex justify-between pb-2 mb-2 border-b border-gray-200">
                            <span className="font-medium text-gray-700">Year-over-Year Change:</span>
                            <span className={`font-semibold ${selectedPerson.yoyChange.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                              {selectedPerson.yoyChange}
                            </span>
                          </div>
                          <div className="flex justify-between pb-2 mb-2 border-b border-gray-200">
                            <span className="font-medium text-gray-700">Age:</span>
                            <span className="font-semibold text-gray-800">{selectedPerson.age}</span>
                          </div>
                          <div className="flex justify-between pb-2 mb-2 border-b border-gray-200">
                            <span className="font-medium text-gray-700">Citizenship:</span>
                            <span className="font-semibold text-gray-800">{selectedPerson.citizenship}</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-100">Residence</h3>
                          <div className="h-48 bg-gray-200 relative overflow-hidden mb-4">
                            <img src="/images/place_holder_house.png" alt={`${selectedPerson.name}'s residence`} className="w-full h-full object-cover object-center" />
                          </div>
                          <div className="flex justify-between pb-2 mb-2 border-b border-gray-200">
                            <span className="font-medium text-gray-700">Property Value:</span>
                            <span className="font-semibold text-blue-600">${selectedPerson.residence.value}M</span>
                          </div>
                          <div className="flex justify-between pb-2 mb-2 border-b border-gray-200">
                            <span className="font-medium text-gray-700">Location:</span>
                            <span className="font-semibold text-gray-800">{selectedPerson.residence.location}</span>
                          </div>
                          <div className="flex justify-between pb-2 mb-2 border-b border-gray-200">
                            <span className="font-medium text-gray-700">Size:</span>
                            <span className="font-semibold text-gray-800">{selectedPerson.residence.size.toLocaleString()} sq ft</span>
                          </div>
                          <div className="pb-2 mb-2 border-b border-gray-200">
                            <span className="font-medium text-gray-700">Notable Features:</span>
                          </div>
                          <div className="text-gray-800">{selectedPerson.residence.features}</div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-100">Biography</h3>
                        <p className="text-gray-700">{selectedPerson.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
      <SpeedInsights />
    </>
  );

};

export default BillionairesApp;