import React from 'react';
import UsdaLogo from '../icons/UsdaLogo';

const Header: React.FC = () => {
  return (
    <header className="border-b">
      <div className="bg-gray-100 py-1 text-sm text-gray-700">
        <div className="container mx-auto px-4 flex items-center">
          <img src="https://www.usda.gov/themes/usda/assets/img/us-flag.png" alt="US Flag" className="w-5 h-auto mr-2"/>
          An official website of the United States government
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <UsdaLogo className="h-16 w-auto"/>
        </a>
      </div>
    </header>
  );
};

export default Header;
