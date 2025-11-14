import React from 'react';
import UsdaLogo from '../icons/UsdaLogo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#002f6c] text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h4 className="font-bold mb-3">About RD</h4>
                        <ul>
                           <li><a href="#" className="hover:underline">Our Agency</a></li>
                           <li><a href="#" className="hover:underline">Leadership</a></li>
                           <li><a href="#" className="hover:underline">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-3">Resources</h4>
                        <ul>
                           <li><a href="#" className="hover:underline">Forms</a></li>
                           <li><a href="#" className="hover:underline">Publications</a></li>
                           <li><a href="#" className="hover:underline">Data</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-3">Connect</h4>
                         <ul>
                           <li><a href="#" className="hover:underline">Contact Us</a></li>
                           <li><a href="#" className="hover:underline">Newsroom</a></li>
                           <li><a href="#" className="hover:underline">Social Media</a></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold mb-3">Government</h4>
                         <ul>
                           <li><a href="#" className="hover:underline">USDA.gov</a></li>
                           <li><a href="#" className="hover:underline">USA.gov</a></li>
                           <li><a href="#" className="hover:underline">WhiteHouse.gov</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/30 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                       <UsdaLogo className="h-16 w-auto" variant="white"/>
                       <div>
                           <p className="font-bold">United States Department of Agriculture</p>
                       </div>
                    </div>
                    <div className="text-center md:text-right">
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:underline">Accessibility</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">FOIA</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
