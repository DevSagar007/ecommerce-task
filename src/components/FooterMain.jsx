import React from 'react';
import Image from 'next/image';
import FooterLogo from '../assets/logo/footer-logo.png'
import FooterCall from '../assets/icons/material-symbols_call.png'
import Link from 'next/link';

const FooterMain = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-start px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
                <div className="w-1/2">
                    <div className="footer-logo">
                        <Image
                            src={FooterLogo}
                            alt="Picture of the author"
                            width={198}
                            height={48}
                        />
                    </div>
                    <p className="mt-6 text-sm text-white   ">
                        Experience our new platform &  Enjoy exiting deals and offers on your day to day
                    </p>
                    <div className="flex flex-col gap-y-4 mt-8">
                        <div className="flex gap-x-2">
                            <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0 rounded-full">
                                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.74333 13.874C5.14733 14.2073 5.56867 14.512 6 14.8093C6.43226 14.5159 6.85155 14.2039 7.25667 13.874C7.932 13.3195 8.56756 12.7182 9.15867 12.0747C10.5213 10.5847 12 8.42467 12 6C12 5.21207 11.8448 4.43185 11.5433 3.7039C11.2417 2.97595 10.7998 2.31451 10.2426 1.75736C9.68549 1.20021 9.02405 0.758251 8.2961 0.456723C7.56815 0.155195 6.78793 0 6 0C5.21207 0 4.43185 0.155195 3.7039 0.456723C2.97595 0.758251 2.31451 1.20021 1.75736 1.75736C1.20021 2.31451 0.758251 2.97595 0.456723 3.7039C0.155195 4.43185 -1.17411e-08 5.21207 0 6C0 8.42467 1.47867 10.584 2.84133 12.0747C3.43241 12.7185 4.06798 13.3193 4.74333 13.874ZM6 8.16667C5.42536 8.16667 4.87426 7.93839 4.46794 7.53206C4.06161 7.12574 3.83333 6.57464 3.83333 6C3.83333 5.42536 4.06161 4.87426 4.46794 4.46794C4.87426 4.06161 5.42536 3.83333 6 3.83333C6.57464 3.83333 7.12574 4.06161 7.53206 4.46794C7.93839 4.87426 8.16667 5.42536 8.16667 6C8.16667 6.57464 7.93839 7.12574 7.53206 7.53206C7.12574 7.93839 6.57464 8.16667 6 8.16667Z" fill="black" />
                                </svg>
                            </div>
                            <p className='text-white'>
                                House #64, Road 13, ASA Center, Uttara, Dhaka-1402
                            </p>
                        </div>
                        <div className="flex gap-x-2">
                            <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0 rounded-full">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3 14C11.9111 14 10.5389 13.6973 9.18333 13.092C7.82778 12.4867 6.59444 11.6282 5.48333 10.5167C4.37222 9.40511 3.514 8.17178 2.90867 6.81667C2.30333 5.46156 2.00044 4.08933 2 2.7C2 2.5 2.06667 2.33333 2.2 2.2C2.33333 2.06667 2.5 2 2.7 2H5.4C5.55556 2 5.69444 2.05289 5.81667 2.15867C5.93889 2.26444 6.01111 2.38933 6.03333 2.53333L6.46667 4.86667C6.48889 5.04444 6.48333 5.19444 6.45 5.31667C6.41667 5.43889 6.35556 5.54444 6.26667 5.63333L4.65 7.26667C4.87222 7.67778 5.136 8.07489 5.44133 8.458C5.74667 8.84111 6.08289 9.21067 6.45 9.56667C6.79444 9.91111 7.15556 10.2307 7.53333 10.5253C7.91111 10.82 8.31111 11.0893 8.73333 11.3333L10.3 9.76667C10.4 9.66667 10.5307 9.59178 10.692 9.542C10.8533 9.49222 11.0116 9.47822 11.1667 9.5L13.4667 9.96667C13.6222 10.0111 13.75 10.0918 13.85 10.2087C13.95 10.3256 14 10.456 14 10.6V13.3C14 13.5 13.9333 13.6667 13.8 13.8C13.6667 13.9333 13.5 14 13.3 14Z" fill="black" />
                                </svg>

                            </div>
                            <p className='text-white'>
                                <Link href="tel:01729-149720">tel:01729-149720</Link>
                            </p>
                        </div>
                        <div className="flex gap-x-2">
                            <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0 rounded-full">
                                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.74333 13.874C5.14733 14.2073 5.56867 14.512 6 14.8093C6.43226 14.5159 6.85155 14.2039 7.25667 13.874C7.932 13.3195 8.56756 12.7182 9.15867 12.0747C10.5213 10.5847 12 8.42467 12 6C12 5.21207 11.8448 4.43185 11.5433 3.7039C11.2417 2.97595 10.7998 2.31451 10.2426 1.75736C9.68549 1.20021 9.02405 0.758251 8.2961 0.456723C7.56815 0.155195 6.78793 0 6 0C5.21207 0 4.43185 0.155195 3.7039 0.456723C2.97595 0.758251 2.31451 1.20021 1.75736 1.75736C1.20021 2.31451 0.758251 2.97595 0.456723 3.7039C0.155195 4.43185 -1.17411e-08 5.21207 0 6C0 8.42467 1.47867 10.584 2.84133 12.0747C3.43241 12.7185 4.06798 13.3193 4.74333 13.874ZM6 8.16667C5.42536 8.16667 4.87426 7.93839 4.46794 7.53206C4.06161 7.12574 3.83333 6.57464 3.83333 6C3.83333 5.42536 4.06161 4.87426 4.46794 4.46794C4.87426 4.06161 5.42536 3.83333 6 3.83333C6.57464 3.83333 7.12574 4.06161 7.53206 4.46794C7.93839 4.87426 8.16667 5.42536 8.16667 6C8.16667 6.57464 7.93839 7.12574 7.53206 7.53206C7.12574 7.93839 6.57464 8.16667 6 8.16667Z" fill="black" />
                                </svg>
                            </div>
                            <p className='text-white'>
                                <Link href="mailto:falcon@gmail.com">mailto:falcon@gmail.com</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 flex items-center justify-start md:justify-center">
                    <div>
                        <h2 className="font-medium text-gray-900 mb-5">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li>
                                <a className="hover:underline transition" href="#">Home</a>
                            </li>
                            <li>
                                <a className="hover:underline transition" href="#">About us</a>
                            </li>
                            <li>
                                <a className="hover:underline transition" href="#">Contact us</a>
                            </li>
                            <li>
                                <a className="hover:underline transition" href="#">Privacy policy</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-1/2 flex items-start justify-start md:justify-center">
                    <div>
                        <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+1-234-567-890</p>
                            <p>contact@greatstack.dev</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="py-4 text-center text-xs md:text-sm">
                Copyright 2025 © GreatStack.dev All Right Reserved.
            </p>
        </>
    );
};

export default FooterMain; 