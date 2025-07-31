const Footer = () => {
  return (
    <footer className="bg-white/20 backdrop-blur-lg border-t border-gray-200 py-8">
      <div className="w-full mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-600">
            © 2025 Aria Cui. All rights reserved.
          </div>
          
          {/* Icon credit */}
          <div className="text-sm text-gray-500">
            Icons by{' '}
            <a 
              href="https://icons8.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Icons8
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;