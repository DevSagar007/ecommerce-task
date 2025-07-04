import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import HeaderLogo from '../assets/logo/footer-logo.png';

const header = () => {
    return (
        <>
            <div className="header-area py-5 bg-[#0F172A]">
                <div className="w-[1270px] mx-auto">
                    <div className="flex items-center justify-between gap-5">
                        <div className="logo">
                            <Link href="#" passHref>
                                <Image
                                    src={HeaderLogo}
                                    alt="Header Logo"
                                    width={180}
                                    height={54}
                                />
                            </Link>
                        </div>
                        <div class="flex-1">
                            <div class="relative max-w-[762px] mx-auto">
                                <input
                                    type="text"
                                    placeholder="Search for anything...."
                                    class="w-full flex h-[48] items-center bg-white px-4 py-2 pr-12 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                                <button class="cursor-pointer absolute right-0 top-0 h-full w-12 h-12 flex items-center justify-center bg-[#00B795] text-white rounded-r-lg hover:bg-teal-600 transition-colors">
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8828 16.1343L20.0828 20.3343" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.218 10.067C18.218 5.4278 14.4572 1.66699 9.81797 1.66699C5.17878 1.66699 1.41797 5.4278 1.41797 10.067C1.41797 14.7062 5.17878 18.467 9.81797 18.467C14.4572 18.467 18.218 14.7062 18.218 10.067Z" stroke="white" stroke-width="1.4" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div class="relative">
                                <button class="p-2 cursor-pointer rounded-lg transition-colors">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.41732 18.8H17.8911C23.1265 18.8 23.9228 15.417 24.8885 10.4829C25.1671 9.05973 25.3063 8.34815 24.9714 7.87408C24.6364 7.4 23.9944 7.4 22.7104 7.4H7.08398" stroke="white" stroke-width="1.75" stroke-linecap="round" />
                                        <path d="M9.41667 18.8L6.35852 3.81791C6.09884 2.74951 5.16555 2 4.09486 2H3" stroke="white" stroke-width="1.75" stroke-linecap="round" />
                                        <path d="M10.444 18.8H9.96398C8.3734 18.8 7.08398 20.1815 7.08398 21.8857C7.08398 22.1698 7.29889 22.4 7.56398 22.4H20.5007" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                        <ellipse cx="12.334" cy="24.2" rx="1.75" ry="1.8" stroke="white" stroke-width="1.75" />
                                        <ellipse cx="20.5" cy="24.2" rx="1.75" ry="1.8" stroke="white" stroke-width="1.75" />
                                    </svg>
                                </button>
                                <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    12
                                </span>
                            </div>
                            <button class="p-2 cursor-pointer rounded-lg transition-colors">
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.57709 14.4816C3.16232 15.324 -0.547124 17.0441 1.71217 19.1966C2.81582 20.248 4.045 21 5.59038 21H14.4086C15.954 21 17.1832 20.248 18.2868 19.1966C20.5461 17.0441 16.8367 15.324 15.4219 14.4816C12.1043 12.5061 7.8947 12.5061 4.57709 14.4816Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.4998 5.5C14.4998 7.98528 12.485 10 9.99976 10C7.51447 10 5.49976 7.98528 5.49976 5.5C5.49976 3.01472 7.51447 1 9.99976 1C12.485 1 14.4998 3.01472 14.4998 5.5Z" stroke="white" stroke-width="1.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                                </div>
                                <span className="text-lg font-semibold">Categories</span>
                            </div>
                            <nav className="flex space-x-6">
                                <a href="#" className="text-gray-700 hover:text-red-500">Electronics</a>
                                <a href="#" className="text-gray-700 hover:text-red-500">Home Appliances</a>
                                <a href="#" className="text-gray-700 hover:text-red-500">Mother & Baby</a>
                                <a href="#" className="text-gray-700 hover:text-red-500">Automotive</a>
                                <a href="#" className="text-gray-700 hover:text-red-500">Sports Gear</a>
                            </nav>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-600 hover:text-red-500">TRACK ORDER</button>
                            <button className="text-gray-600 hover:text-red-500">HELP CENTER</button>
                            <button className="text-gray-600 hover:text-red-500">SELL WITH US</button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <a href="#" className="hover:text-red-500">Home</a>
                    <span>›</span>
                    <span className="text-gray-700">My Cart</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    {/* <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm">
                            <div className="p-6 border-b">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold">My Cart ({cartItems.length})</h2>
                                    <div className="flex items-center space-x-4">
                                        <label className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedItems.length === cartItems.length}
                                                onChange={() => selectedItems.length === cartItems.length ? clearAll() : selectAll()}
                                                className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                                            />
                                            <span className="text-sm text-gray-600">Select All</span>
                                        </label>
                                        <button
                                            onClick={clearAll}
                                            className="text-sm text-red-500 hover:text-red-700"
                                        >
                                            Clear All
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="divide-y">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="p-6">
                                        <div className="flex items-center space-x-4">
                                            <input
                                                type="checkbox"
                                                checked={selectedItems.includes(item.id)}
                                                onChange={() => toggleSelectItem(item.id)}
                                                className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                                            />

                                            <div className="flex items-center space-x-4 flex-1">
                                                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                                                    <ShoppingCart className="w-8 h-8 text-gray-400" />
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2 mb-1">
                                                        <div className="w-4 h-4 bg-red-500 rounded"></div>
                                                        <span className="text-sm text-gray-500">{item.store}</span>
                                                    </div>
                                                    <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                                                    <p className="text-sm text-gray-500">Color: {item.color}; Size: {item.size}</p>
                                                </div>

                                                <div className="flex items-center space-x-3">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="w-8 text-center font-medium">{item.quantity.toString().padStart(2, '0')}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>

                                                <div className="text-right">
                                                    <div className="font-semibold text-lg">৳{item.price}</div>
                                                    <div className="text-sm text-gray-500 line-through">৳{item.originalPrice}</div>
                                                </div>

                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="p-2 text-gray-400 hover:text-red-500"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> */}

                    {/* Order Summary */}
                    {/* <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-semibold mb-4">Order summary</h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Price ({itemCount} items)</span>
                                    <span className="font-medium">৳{subtotal}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping fee</span>
                                    <span className="text-blue-500 text-sm">To be added</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        placeholder="Store / Falcon coupon"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                    <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 font-medium">
                                        Apply
                                    </button>
                                </div>
                            </div>

                            <div className="border-t pt-4 mb-6">
                                <div className="flex justify-between text-lg font-semibold">
                                    <span>Sub Total</span>
                                    <span>৳{subtotal}</span>
                                </div>
                            </div>

                            <button
                                disabled={selectedItems.length === 0}
                                className={`w-full py-3 rounded-md font-medium transition-colors ${selectedItems.length > 0
                                    ? 'bg-teal-500 text-white hover:bg-teal-600'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                Proceed to Checkout
                            </button>

                            <div className="mt-4">
                                <label className="flex items-start space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={agreeToTerms}
                                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                                        className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500 mt-0.5"
                                    />
                                    <span className="text-sm text-gray-600">
                                        I have read and agree to the Terms and Conditions, Privacy Policy and Refund and Return Policy
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default header; 