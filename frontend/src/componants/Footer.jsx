import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube, IconBuildingStore, IconComet, IconGift, IconHelp, IconMail, IconMapPin } from '@tabler/icons-react';
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-950">
            <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-12 pb-8">
                    {/* Navigation columns - left side */}
                    <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {/* About column */}
                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-indigo-400 text-sm">
                                ABOUT
                            </div>
                            <nav className="flex flex-col gap-3">
                                <a href="#" className="text-white text-sm transition duration-200 hover:text-indigo-500 active:text-indigo-600">
                                    Contact Us
                                </a>
                                <a href="#" className="text-white text-sm transition duration-200 hover:text-indigo-500 active:text-indigo-600">
                                    About Us
                                </a>
                                <a href="#" className="text-white text-sm transition duration-200 hover:text-indigo-500 active:text-indigo-600">
                                    Careers
                                </a>
                                <a href="#" className="text-white text-sm transition duration-200 hover:text-indigo-500 active:text-indigo-600">
                                    Store Stories
                                </a>
                            </nav>
                        </div>

                        {/* Group Companies column */}
                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-indigo-400 text-sm">
                                GROUP COMPANIES
                            </div>
                            <nav className="flex flex-col gap-3">
                                <a href="#" className="text-white text-sm transition duration-200 hover:text-indigo-500 active:text-indigo-600">
                                    Myntra
                                </a>
                                <a href="#" className="text-white text-sm transition duration-200 hover:text-indigo-500 active:text-indigo-600">
                                    Shopshy
                                </a>
                                <a href="#" className="text-white text-sm transition duration-200 hover:text-indigo-500 active:text-indigo-600">
                                    Meesho
                                </a>
                            </nav>
                        </div>

                        {/* Help column */}
                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-indigo-400 text-sm">
                                HELP
                            </div>
                            <nav className="flex flex-col gap-3">
                                <a href="#" className="text-white text-sm transition duration-200 hover:text-indigo-500 active:text-indigo-600">
                                    Payments
                                </a>
                                <a href="#" className="text-white text-sm transition duration-200 hover:text-indigo-500 active:text-indigo-600">
                                    Shipping
                                </a>
                                <a href="#" className="text-white text-sm transition duration-200 hover:text-indigo-500 active:text-indigo-600">
                                    Cancellation & Returns
                                </a>
                                <a href="#" className="text-white text-sm transition duration-200 hover:text-indigo-500 active:text-indigo-600">
                                    FAQ
                                </a>
                            </nav>
                        </div>

                        {/* Consumer Policy column */}
                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-indigo-400 text-sm">
                                CONSUMER POLICY
                            </div>
                            <nav className="flex flex-col gap-3">
                                <a href="#" className="text-white text-sm transition duration-200 hover:text-indigo-500 active:text-indigo-600">
                                    Terms of Service
                                </a>
                                <a href="#" className="text-white text-sm transition duration-200 hover:text-indigo-500 active:text-indigo-600">
                                    Privacy 
                                </a>
                                <a href="#" className="text-white text-sm transition duration-200 hover:text-indigo-500 active:text-indigo-600">
                                    Security
                                </a>
                                <a href="#" className="text-white text-sm transition duration-200 hover:text-indigo-500 active:text-indigo-600">
                                    Terms of Use
                                </a>
                            </nav>
                        </div>
                    </div>

                    {/* Address and Contact - right side */}
                    <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Address section */}
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="mb-3 font-bold uppercase tracking-widest text-indigo-400 text-sm border-b border-gray-700 pb-2">
                                REGISTERED OFFICE
                            </div>
                            <div className="text-white">
                                <div className="flex items-start gap-2 mb-4">
                                    <IconMapPin className="h-5 w-5 text-indigo-400 mt-1 flex-shrink-0" />
                                    <p className="text-sm text-gray-300">
                                        Shopwise Internet Private Limited,
                                        <br />
                                        Buildings Alyssa, Begonia & Clove,
                                        <br />
                                        Embassy Tech Village,
                                        <br />
                                        Outer Ring Road, Devarabeesanahalli Village,
                                        <br />
                                        Bengaluru, 560103,
                                        <br />
                                        Karnataka, India
                                    </p>
                                </div>
                                <div className="text-white text-sm mb-3">
                                    Connect with us:
                                </div>
                                {/* Social media icons */}
                                <div className="flex gap-4 mb-2">
                                    <a href="#" target="_blank" className="text-gray-400 hover:text-indigo-400 transition duration-200">
                                        <IconBrandInstagram className="h-5 w-5" />
                                    </a>
                                    <a href="#" target="_blank" className="text-gray-400 hover:text-indigo-400 transition duration-200">
                                        <IconBrandTwitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" target="_blank" className="text-gray-400 hover:text-indigo-400 transition duration-200">
                                        <IconBrandYoutube className="h-5 w-5" />
                                    </a>
                                    <a href="#" target="_blank" className="text-gray-400 hover:text-indigo-400 transition duration-200">
                                        <IconBrandFacebook className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Mail section */}
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="mb-3 font-bold uppercase tracking-widest text-indigo-400 text-sm border-b border-gray-700 pb-2">
                                MAIL US
                            </div>
                            <div className="text-white">
                                <div className="flex items-start gap-2 mb-3">
                                    <IconMail className="h-5 w-5 text-indigo-400 mt-1 flex-shrink-0" />
                                    <p className="text-sm text-gray-300">
                                        Shopwise Internet Private Limited,
                                        <br />
                                        Customer Support,
                                        <br />
                                        Buildings Alyssa, Begonia & Clove,
                                        <br />
                                        Embassy Tech Village,
                                        <br />
                                        Outer Ring Road, Devarabeesanahalli Village,
                                        <br />
                                        Bengaluru, 560103,
                                        <br />
                                        Karnataka, India
                                    </p>
                                </div>
                                <a href="mailto:support@shopwise.com" className="inline-block text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
                                    support@shopwise.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-700 py-6">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
                            <div className="flex items-center gap-2 group">
                                <IconBuildingStore className="size-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                                <a href="#" className="text-sm text-gray-300 group-hover:text-indigo-300 transition-colors">Become a Seller</a>
                            </div>
                            <div className="flex items-center gap-2 group">
                                <IconComet className="size-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                                <a href="#" className="text-sm text-gray-300 group-hover:text-indigo-300 transition-colors">Advertise</a>
                            </div>
                            <div className="flex items-center gap-2 group">
                                <IconGift className="size-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                                <a href="#" className="text-sm text-gray-300 group-hover:text-indigo-300 transition-colors">Gift Cards</a>
                            </div>
                            <div className="flex items-center gap-2 group">
                                <IconHelp className="size-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                                <a href="#" className="text-sm text-gray-300 group-hover:text-indigo-300 transition-colors">Help Center</a>
                            </div>
                        </div>
                        <div className="text-sm text-gray-400">
                            © 2007-2025 Shopwise.com
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;