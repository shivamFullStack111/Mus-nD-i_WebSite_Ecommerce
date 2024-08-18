import "../Components/all.css";

const MainFotter = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-12">
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">Follow Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#hdbccjnkj"
                  className="hover:text-gray-400 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Call Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">Collections</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Men's Shirt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Men's Pants
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Men's Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Women's Dress
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">Kids</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Kids' Dresses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFotter;
