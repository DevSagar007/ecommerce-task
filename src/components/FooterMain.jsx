import React from 'react';
import Image from 'next/image';
import FooterLogo from '../assets/logo/footer-logo.png'
import FooterPlayStore from '../assets//icons/Google.png'
import FooterAppStore from '../assets//icons/apple.png'
import paymentVisa from '../assets/paymemts/visa.png'
import paymentMaster from '../assets/paymemts/master.png'
import paymentExpress from '../assets/paymemts/express.png'
import paymentBkash from '../assets/paymemts/bkash.png'
import paymentNogod from '../assets/paymemts/nogod.png'
import Link from 'next/link';

const FooterMain = () => {
    return (
        <>
            <div className="footer-area bg-[#0F172A] pt-20">
                <div className="w-[1270px] mx-auto">
                    <div className="footer-main">
                        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                            <div className="w-1/2">
                                <div className="footer-logo">
                                    <Image
                                        src={FooterLogo}
                                        alt="Picture of the author"
                                        width={198}
                                        height={48}
                                    />
                                </div>
                                <p className="mt-6 text-sm text-white">
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
                                    <h2 className="font-medium text-[#94A3B8] mb-5">ABOUT</h2>
                                    <ul className="text-sm space-y-2">
                                        <li>
                                            <a className="hover:underline transition font-medium text-white" href="#">Contact Us</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline transition font-medium text-white" href="#">About us</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline transition font-medium text-white" href="#">Careers</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline transition font-medium text-white" href="#">Press</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline transition font-medium text-white" href="#">Cancellation & Returns</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline transition font-medium text-white" href="#">Terms of Use</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="w-1/2 flex items-center justify-start md:justify-center">
                                <div>
                                    <h2 className="font-medium text-[#94A3B8] mb-5">HELP</h2>
                                    <ul className="text-sm space-y-2">
                                        <li>
                                            <a className="hover:underline transition font-medium text-white" href="#">Payments</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline transition font-medium text-white" href="#">Shipping</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline transition font-medium text-white" href="#">FAQs</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline transition font-medium text-white" href="#">Terms of Use</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline transition font-medium text-white" href="#">Security</a>
                                        </li>
                                        <li>
                                            <a className="hover:underline transition font-medium text-white" href="#">Privacy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="w-1/2 flex items-start justify-start md:justify-end">
                                <div>
                                    <h2 className="font-medium text-[#94A3B8] mb-5">Need Support?</h2>
                                    <div className="flex items-center justify-center gap-x-1 px-1 py-1.5 border border-[#F1F5F9] rounded-[4px] space-y-2">
                                        <span className='mb-0'>
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.5 10.9373C17.5 10.5916 17.5 10.4188 17.552 10.2648C17.7032 9.81725 18.1018 9.64357 18.5011 9.4617C18.95 9.25723 19.1744 9.155 19.3968 9.13701C19.6493 9.1166 19.9022 9.17099 20.118 9.2921C20.4041 9.45265 20.6036 9.75774 20.8079 10.0058C21.7513 11.1517 22.2229 11.7246 22.3955 12.3564C22.5348 12.8662 22.5348 13.3994 22.3955 13.9093C22.1438 14.8307 21.3485 15.6032 20.7598 16.3182C20.4587 16.684 20.3081 16.8668 20.118 16.9735C19.9022 17.0946 19.6493 17.149 19.3968 17.1286C19.1744 17.1106 18.95 17.0084 18.5011 16.8039C18.1018 16.6221 17.7032 16.4484 17.552 16.0008C17.5 15.8468 17.5 15.674 17.5 15.3284V10.9373Z" stroke="#00B795" stroke-width="1.5" />
                                                <path d="M7.5 10.9372C7.5 10.5019 7.48778 10.1108 7.13591 9.80477C7.00793 9.69346 6.83825 9.61618 6.49891 9.46162C6.05001 9.25715 5.82556 9.15492 5.60316 9.13693C4.93591 9.08297 4.57692 9.53837 4.19213 10.0057C3.24875 11.1516 2.77706 11.7245 2.60446 12.3563C2.46518 12.8661 2.46518 13.3993 2.60446 13.9092C2.8562 14.8307 3.65152 15.6031 4.24021 16.3181C4.61129 16.7688 4.96577 17.1801 5.60316 17.1285C5.82556 17.1105 6.05001 17.0083 6.49891 16.8039C6.83825 16.6493 7.00793 16.572 7.13591 16.4607C7.48778 16.1547 7.5 15.7635 7.5 15.3283V10.9372Z" stroke="#00B795" stroke-width="1.5" />
                                                <path d="M5.5 9.13281C5.5 5.8191 8.63401 3.13281 12.5 3.13281C16.366 3.13281 19.5 5.8191 19.5 9.13281" stroke="#00B795" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" />
                                                <path d="M19.5 17.1328V17.9328C19.5 19.7001 17.7091 21.1328 15.5 21.1328H13.5" stroke="#00B795" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <p className='font-medium text-white'>10724-7814XX</p>
                                    </div>
                                    <div className="mt-5 text-[18px] font-medium">
                                        <h6 className='text-[#94A3B8]'>DOWNLOAD APP</h6>
                                    </div>
                                    <div className="flex flex-col gap-y-4 mt-3">
                                        <div className="flex">
                                            <Link href="#" passHref>
                                                <Image
                                                    src={FooterPlayStore}
                                                    alt="Download on Google Play"
                                                    width={180}
                                                    height={54}
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex">
                                            <Link href="#" passHref>
                                                <Image
                                                    src={FooterAppStore}
                                                    alt="Download on App Store"
                                                    width={180}
                                                    height={54}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-midddle flex justify-between items-center gap-y-2 mt-8">
                        <div className="flex items-center gap-x-3">
                            <p>Follow us on</p>
                            <div className="flex items-center gap-x-3">
                                <a href="#">
                                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.3333 16.0477C29.3333 8.66921 23.36 2.68091 16 2.68091C8.64 2.68091 2.66667 8.66921 2.66667 16.0477C2.66667 22.5172 7.25334 27.904 13.3333 29.1471V20.0577H10.6667V16.0477H13.3333V12.706C13.3333 10.1262 15.4267 8.02761 18 8.02761H21.3333V12.0376H18.6667C17.9333 12.0376 17.3333 12.6391 17.3333 13.3743V16.0477H21.3333V20.0577H17.3333V29.3476C24.0667 28.6792 29.3333 22.985 29.3333 16.0477Z" fill="#E2E8F0" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.1467 16.3383C18.1386 16.7607 18.0053 17.1712 17.7637 17.5177C17.5221 17.8643 17.1831 18.1313 16.7895 18.2849C16.396 18.4385 15.9657 18.4719 15.5532 18.3807C15.1407 18.2895 14.7646 18.0779 14.4725 17.7727C14.1804 17.4675 13.9855 17.0824 13.9125 16.6663C13.8395 16.2502 13.8917 15.8218 14.0624 15.4354C14.2332 15.049 14.5148 14.722 14.8716 14.4958C15.2284 14.2696 15.6443 14.1545 16.0667 14.165C16.6279 14.1858 17.1589 14.4243 17.5472 14.83C17.9355 15.2357 18.1505 15.7767 18.1467 16.3383Z" fill="#E2E8F0" />
                                        <path d="M19.684 9.65833H12.4507C11.7349 9.65833 11.0485 9.94265 10.5424 10.4487C10.0363 10.9548 9.752 11.6413 9.752 12.357V19.753C9.752 20.1074 9.8218 20.4583 9.95742 20.7857C10.093 21.1131 10.2918 21.4106 10.5424 21.6612C10.793 21.9118 11.0905 22.1106 11.4179 22.2462C11.7453 22.3819 12.0963 22.4517 12.4507 22.4517H19.684C20.0384 22.4517 20.3893 22.3819 20.7167 22.2462C21.0442 22.1106 21.3416 21.9118 21.5922 21.6612C21.8428 21.4106 22.0416 21.1131 22.1772 20.7857C22.3129 20.4583 22.3827 20.1074 22.3827 19.753V12.3703C22.3841 12.0149 22.3153 11.6627 22.1804 11.3339C22.0454 11.0051 21.8469 10.7062 21.5962 10.4542C21.3455 10.2023 21.0475 10.0023 20.7194 9.86573C20.3913 9.72916 20.0394 9.65867 19.684 9.65833ZM16.0667 19.9557C15.3506 19.9718 14.646 19.7743 14.0427 19.3882C13.4394 19.0021 12.9649 18.4451 12.6796 17.7881C12.3943 17.1312 12.3112 16.4041 12.441 15.6997C12.5707 14.9954 12.9074 14.3456 13.408 13.8334C13.9086 13.3212 14.5505 12.9698 15.2518 12.824C15.953 12.6782 16.6818 12.7447 17.3451 13.0149C18.0084 13.2851 18.5761 13.7469 18.9758 14.3412C19.3756 14.9355 19.5891 15.6354 19.5893 16.3517C19.5948 16.8196 19.508 17.2841 19.3339 17.7185C19.1598 18.1529 18.9018 18.5488 18.5747 18.8835C18.2475 19.2182 17.8577 19.4851 17.4273 19.6691C16.997 19.8531 16.5346 19.9504 16.0667 19.9557ZM19.9813 12.749C19.8934 12.749 19.8063 12.7315 19.7251 12.6974C19.644 12.6633 19.5705 12.6134 19.5089 12.5506C19.4473 12.4878 19.3989 12.4133 19.3665 12.3315C19.334 12.2497 19.3182 12.1623 19.32 12.0743C19.32 11.8954 19.3911 11.7238 19.5176 11.5973C19.6441 11.4707 19.8157 11.3997 19.9947 11.3997C20.1736 11.3997 20.3452 11.4707 20.4717 11.5973C20.5983 11.7238 20.6693 11.8954 20.6693 12.0743C20.672 12.1696 20.654 12.2643 20.6167 12.3519C20.5793 12.4396 20.5235 12.5181 20.4529 12.5822C20.3824 12.6463 20.2989 12.6944 20.208 12.7231C20.1172 12.7519 20.0212 12.7607 19.9267 12.749H19.9813Z" fill="#E2E8F0" />
                                        <path d="M16.0667 2.68095C12.5305 2.66327 9.13204 4.05107 6.61905 6.53906C4.10607 9.02704 2.68435 12.4114 2.66667 15.9476C2.64899 19.4838 4.03679 22.8823 6.52477 25.3952C9.01276 27.9082 12.3971 29.3299 15.9333 29.3476C17.6843 29.3564 19.4198 29.0202 21.0409 28.3582C22.6619 27.6962 24.1367 26.7214 25.381 25.4895C26.6253 24.2576 27.6147 22.7926 28.2929 21.1783C28.971 19.564 29.3246 17.8319 29.3333 16.081C29.3421 14.33 29.0059 12.5945 28.3439 10.9734C27.6819 9.35241 26.7072 7.87764 25.4752 6.63334C24.2433 5.38903 22.7784 4.39956 21.164 3.7214C19.5497 3.04325 17.8176 2.68971 16.0667 2.68095ZM24.164 19.617C24.1677 20.2151 24.0527 20.8081 23.8255 21.3615C23.5983 21.9149 23.2636 22.4176 22.8407 22.8407C22.4178 23.2637 21.9151 23.5986 21.3618 23.8259C20.8084 24.0533 20.2155 24.1685 19.6173 24.165H12.5187C11.9206 24.1683 11.3278 24.053 10.7746 23.8257C10.2214 23.5984 9.71871 23.2637 9.29573 22.8408C8.87276 22.418 8.53786 21.9154 8.31041 21.3623C8.08296 20.8091 7.96749 20.2164 7.97067 19.6183V12.5183C7.96696 11.9201 8.08201 11.3271 8.30917 10.7738C8.53633 10.2204 8.87107 9.7176 9.29399 9.29455C9.71691 8.87151 10.2196 8.53662 10.7729 8.3093C11.3262 8.08198 11.9192 7.96675 12.5173 7.97029H19.6173C20.2154 7.96675 20.8082 8.08193 21.3615 8.30917C21.9147 8.53641 22.4173 8.87118 22.8402 9.29409C23.2631 9.71699 23.5979 10.2196 23.8251 10.7728C24.0524 11.3261 24.1675 11.9189 24.164 12.517V19.617Z" fill="#E2E8F0" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 2.68091C23.3714 2.68091 29.3333 8.64281 29.3333 16.0142C29.3333 23.3857 23.3714 29.3476 16 29.3476C8.62856 29.3476 2.66666 23.3857 2.66666 16.0142C2.66666 8.64281 8.62856 2.68091 16 2.68091ZM13.5619 23.0428C19.4667 23.0428 22.7048 18.1476 22.7048 13.9V13.4809C23.3333 13.0238 23.8857 12.4523 24.3048 11.8047C23.7333 12.0523 23.1048 12.2238 22.4571 12.319C23.1238 11.919 23.6381 11.2904 23.8667 10.5476C23.2381 10.9095 22.5524 11.1761 21.8286 11.3285C21.2381 10.7 20.4 10.319 19.4857 10.319C17.7143 10.319 16.2667 11.7666 16.2667 13.5381C16.2667 13.7857 16.2857 14.0333 16.3619 14.2619C13.6952 14.1285 11.3143 12.8523 9.73332 10.9095C9.46666 11.3857 9.29523 11.9381 9.29523 12.5285C9.29523 13.6333 9.86666 14.6238 10.7238 15.1952C10.1905 15.1952 9.69523 15.0428 9.27618 14.7952V14.8333C9.27618 16.3952 10.3809 17.6904 11.8476 17.9952C11.5809 18.0714 11.2952 18.1095 11.0095 18.1095C10.8 18.1095 10.6095 18.0904 10.4 18.0523C10.8 19.3285 12 20.2619 13.3905 20.2809C12.2857 21.1381 10.8952 21.6523 9.39047 21.6523C9.1238 21.6523 8.87618 21.6523 8.62856 21.6142C10.0381 22.5285 11.7333 23.0619 13.5428 23.0619" fill="#E2E8F0" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <h6 className='text-[#94A3B8]'>PAYMENTS ACCEPTED</h6>
                            <div className="flex gap-x-2">
                                <Image
                                    className="rounded-[8px]"
                                    src={paymentVisa}
                                    alt="Payment Express"
                                    width={68}
                                    height={44}
                                />
                                <Image
                                    className="rounded-[8px]"
                                    src={paymentMaster}
                                    alt="Payment Express"
                                    width={68}
                                    height={44}
                                />
                                <Image
                                    className="rounded-[8px]"
                                    src={paymentExpress}
                                    alt="Payment Express"
                                    width={68}
                                    height={44}
                                />
                                <Image
                                    className="rounded-[8px]"
                                    src={paymentBkash}
                                    alt="Payment Express"
                                    width={68}
                                    height={44}
                                />
                                <Image
                                    className="rounded-[8px]"
                                    src={paymentNogod}
                                    alt="Payment Express"
                                    width={68}
                                    height={44}
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="footer-bottom mt-12 border-t border-[#3D4352]">
                    <div className="w-[1270px] mx-auto">

                        <p className="py-4 text-center text-white text-[14px] py-[25px]">
                            Falcon ©2025. Design by xyz
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterMain; 