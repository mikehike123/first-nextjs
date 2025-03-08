import React, { useState, useEffect } from 'react';



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
  const richestMen: Person[] = [
    {
      id: 1,
      name: "Elon Musk",
      company: "Tesla, SpaceX, X",
      netWorth: 250.8,
      industry: "tech",
      age: 53,
      citizenship: "United States",
      wealthSource: "Tesla, SpaceX, X",
      yoyChange: "+15.3%",
      residence: {
        value: 55,
        location: "Austin, Texas, USA",
        size: 16000,
        features: "Minimalist design, Solar panels, Waterfront property"
      },
      bio: "Elon Musk is the founder, CEO, and chief engineer of SpaceX; CEO and product architect of Tesla, Inc.; owner of X (formerly Twitter); founder of The Boring Company and X.AI; co-founder of Neuralink and OpenAI. Born in South Africa, Musk is known for his ambitious vision to revolutionize transportation on Earth and in space.",
      imagePath: "/images/elon_musk.jpg",
      imageHousePath: "/images/elon_musk_house.jpg"
    },
    {
      id: 2,
      name: "Bernard Arnault",
      company: "LVMH",
      netWorth: 232.6,
      industry: "luxury",
      age: 76,
      citizenship: "France",
      wealthSource: "LVMH (Louis Vuitton Moët Hennessy)",
      yoyChange: "+8.7%",
      residence: {
        value: 200,
        location: "Paris, France",
        size: 21500,
        features: "Art collection, Indoor pool, Private garden, Historic building"
      },
      bio: "Bernard Arnault is the chairman and CEO of LVMH Moët Hennessy Louis Vuitton, the world's largest luxury goods company. The LVMH empire includes more than 70 brands including Louis Vuitton, Dior, Sephora, and Tiffany & Co. A trained engineer, Arnault began his career in his family's construction business before moving into luxury goods.",
      imagePath: "/images/bernard_arnault.jpg",
      imageHousePath: "/images/place_holder_house.png"
    },
    {
      id: 3,
      name: "Jeff Bezos",
      company: "Amazon",
      netWorth: 198.4,
      industry: "tech",
      age: 61,
      citizenship: "United States",
      wealthSource: "Amazon",
      yoyChange: "+5.2%",
      residence: {
        value: 175,
        location: "Medina, Washington, USA",
        size: 29000,
        features: "Lakefront property, Boathouse, Multiple buildings, Advanced security"
      },
      bio: "Jeff Bezos is the founder and former CEO of Amazon, currently serving as executive chairman. He founded Amazon in 1994 as an online bookstore, which has since expanded into a vast e-commerce platform and cloud computing giant. Bezos also owns The Washington Post and Blue Origin, an aerospace company.",
      imagePath: "/images/jeff_bezos.jpg",
      imageHousePath: "/images/jeff_bezos_house.jpg"
    },
    {
      id: 4,
      name: "Larry Ellison",
      company: "Oracle",
      netWorth: 180.2,
      industry: "tech",
      age: 80,
      citizenship: "United States",
      wealthSource: "Oracle",
      yoyChange: "+12.8%",
      residence: {
        value: 200,
        location: "Lanai Island, Hawaii, USA",
        size: 23000,
        features: "Private island owner (98% of Lanai), Multiple beachfront properties"
      },
      bio: "Larry Ellison is the co-founder, executive chairman, and former CEO of Oracle Corporation. Born in New York City, Ellison built Oracle into one of the world's leading enterprise software companies. Known for his competitive nature and lavish lifestyle, he owns 98% of the Hawaiian island of Lanai.",
      imagePath: "/images/larry_ellison.jpg",
      imageHousePath: "/images/larry_ellison_house.jpg"
    },
    {
      id: 5,
      name: "Mark Zuckerberg",
      company: "Meta Platforms",
      netWorth: 177.5,
      industry: "tech",
      age: 40,
      citizenship: "United States",
      wealthSource: "Facebook (Meta)",
      yoyChange: "+32.6%",
      residence: {
        value: 100,
        location: "Palo Alto, California, USA",
        size: 15000,
        features: "Smart home technology, Home office, Security perimeter, Multiple properties combined"
      },
      bio: "Mark Zuckerberg is the co-founder, chairman, and CEO of Meta Platforms (formerly Facebook, Inc.). He launched Facebook from his Harvard dorm room in 2004. Under his leadership, Meta has expanded to include Instagram, WhatsApp, and is now investing heavily in the metaverse.",
      imagePath: "/images/mark_zuckerberg.jpg",
      imageHousePath: "/images/mark_zuckerberg_house.jpg"
    },
    {
      id: 6,
      name: "Bill Gates",
      company: "Microsoft (Co-founder)",
      netWorth: 128.3,
      industry: "tech",
      age: 69,
      citizenship: "United States",
      wealthSource: "Microsoft, Investments",
      yoyChange: "-2.3%",
      residence: {
        value: 125,
        location: "Medina, Washington, USA",
        size: 66000,
        features: "Lakefront property, Library with rare manuscripts, Trampoline room, High-tech sensors throughout"
      },
      bio: "Bill Gates co-founded Microsoft in 1975 with childhood friend Paul Allen. He led the company as CEO until 2000 and remained as chairman until 2014. In recent years, Gates has focused on philanthropy through the Bill & Melinda Gates Foundation, addressing global health, education, and climate change.",
      imagePath: "/images/bill_gates.jpg",
      imageHousePath: "/images/bill_gates_house.jpg"
    },
    {
      id: 7,
      name: "Warren Buffett",
      company: "Berkshire Hathaway",
      netWorth: 127.5,
      industry: "finance",
      age: 94,
      citizenship: "United States",
      wealthSource: "Berkshire Hathaway",
      yoyChange: "+1.8%",
      residence: {
        value: 0.65,
        location: "Omaha, Nebraska, USA",
        size: 6570,
        features: "Modest home purchased in 1958, Same residence for over 60 years"
      },
      bio: "Warren Buffett, often called the 'Oracle of Omaha,' is one of the most successful investors of all time. As chairman and CEO of Berkshire Hathaway, he transformed a struggling textile company into a massive conglomerate. Despite his immense wealth, Buffett is known for his frugal lifestyle.",
      imagePath: "/images/warren_buffett.jpg",
      imageHousePath: "/images/warren_buffett_house.jpg"
    },
    {
      id: 8,
      name: "Mukesh Ambani",
      company: "Reliance Industries",
      netWorth: 116.2,
      industry: "energy",
      age: 67,
      citizenship: "India",
      wealthSource: "Reliance Industries",
      yoyChange: "+13.4%",
      residence: {
        value: 410,
        location: "Mumbai, India",
        size: 400000,
        features: "27-story skyscraper, 3 helipads, 9 elevators, 6-floor car park, Snow room, Temple"
      },
      bio: "Mukesh Ambani is the chairman and managing director of Reliance Industries, India's most valuable company with interests in petrochemicals, oil and gas, telecommunications, and retail. His Mumbai residence 'Antilia' is one of the world's most expensive private homes.",
      imagePath: "/images/mukesh_ambani.jpg",
      imageHousePath: "/images/mukesh_ambani_house.jpg"
    },
    {
      id: 9,
      name: "Steve Ballmer",
      company: "Microsoft (Former CEO)",
      netWorth: 115.8,
      industry: "tech",
      age: 69,
      citizenship: "United States",
      wealthSource: "Microsoft",
      yoyChange: "+7.2%",
      residence: {
        value: 150,
        location: "Hunts Point, Washington, USA",
        size: 30000,
        features: "Waterfront property, Basketball court, Personal gym, High-tech entertainment systems"
      },
      bio: "Steve Ballmer served as CEO of Microsoft from 2000 to 2014, succeeding Bill Gates. During his tenure, Microsoft expanded its enterprise offerings and launched products like Xbox and Bing. After leaving Microsoft, Ballmer purchased the Los Angeles Clippers basketball team for $2 billion.",
      imagePath: "/images/steve_ballmer.jpg",
      imageHousePath: "/images/steve_ballmer_house.jpg"
    },
    {
      id: 10,
      name: "Larry Page",
      company: "Google (Co-founder)",
      netWorth: 111.8,
      industry: "tech",
      age: 51,
      citizenship: "United States",
      wealthSource: "Google, Alphabet",
      yoyChange: "+8.9%",
      residence: {
        value: 45,
        location: "Palo Alto, California, USA",
        size: 9000,
        features: "Eco-friendly design, Multiple buildings in compound, Recording studio"
      },
      bio: "Larry Page co-founded Google with Sergey Brin in 1998 while they were Ph.D. students at Stanford University. He served as Google's CEO until 2001, and then again from 2011 to 2015 before becoming CEO of Alphabet, Google's parent company, until 2019.",
      imagePath: "/images/larry_page.jpg",
      imageHousePath: "/images/larry_page_house.jpg"
    }
  ];

  const [filteredPeople, setFilteredPeople] = useState<Person[]>(richestMen);
  const [searchText, setSearchText] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [sortOption, setSortOption] = useState('net-worth-desc');
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

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
  }, [searchText, industryFilter, sortOption]);

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
      {/* Replace GlobalStyle with a class or inline style */}
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
    </>
  );

};

export default BillionairesApp;