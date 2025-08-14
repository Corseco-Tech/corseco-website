'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [openmenu, setOpenMenu] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)
  
  const router = useRouter()
  
  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setSolutionsOpen(false)
    setIndustriesOpen(false)
    setSupportOpen(false)
  }

  const closeMobileMenu = () => {
    setOpenMenu(false)
    closeAllDropdowns()
  }

  // Function to toggle specific dropdown and close others
  const toggleDropdown = (dropdownName) => {
    closeAllDropdowns()
    
    switch(dropdownName) {
      case 'solutions':
        setSolutionsOpen(true)
        break
      case 'industries':
        setIndustriesOpen(true)
        break
      case 'support':
        setSupportOpen(true)
        break
      default:
        break
    }
  }

  // Custom dropdown component for Solutions
  const SolutionsDropdown = () => (
    <div className="relative">
      <button 
        className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[#1A1A1A]"
        onClick={() => solutionsOpen ? closeAllDropdowns() : toggleDropdown('solutions')}
        onBlur={() => setTimeout(() => setSolutionsOpen(false), 150)}
      >
        Solutions
        <svg className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
       
      {solutionsOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[500px]">
          <div className="grid grid-cols-2 p-4">
            <Link href="/solutions/mettrade-ai" className="flex items-center  gap-2 p-3 rounded" onClick={closeAllDropdowns}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_1_656)">
    <path d="M12.75 0.25C12.1567 0.25 11.5766 0.425947 11.0833 0.755591C10.5899 1.08524 10.2054 1.55377 9.97836 2.10195C9.7513 2.65013 9.69189 3.25333 9.80765 3.83527C9.9234 4.41721 10.2091 4.95176 10.6287 5.37132C11.0482 5.79088 11.5828 6.0766 12.1647 6.19236C12.7467 6.30811 13.3499 6.2487 13.8981 6.02164C14.4462 5.79458 14.9148 5.41006 15.2444 4.91671C15.5741 4.42336 15.75 3.84334 15.75 3.25C15.75 2.45435 15.4339 1.69129 14.8713 1.12868C14.3087 0.56607 13.5457 0.25 12.75 0.25ZM12.75 5.75C12.2555 5.75 11.7722 5.60338 11.3611 5.32867C10.95 5.05397 10.6295 4.66352 10.4403 4.20671C10.2511 3.74989 10.2016 3.24723 10.298 2.76227C10.3945 2.27732 10.6326 1.83186 10.9822 1.48223C11.3319 1.1326 11.7773 0.8945 12.2623 0.798037C12.7472 0.701574 13.2499 0.751082 13.7067 0.940301C14.1635 1.12952 14.554 1.44995 14.8287 1.86107C15.1034 2.2722 15.25 2.75555 15.25 3.25C15.25 3.5783 15.1853 3.90339 15.0597 4.20671C14.9341 4.51002 14.7499 4.78562 14.5178 5.01777C14.2856 5.24991 14.01 5.43406 13.7067 5.5597C13.4034 5.68534 13.0783 5.75 12.75 5.75Z" fill="black"/>
    <path d="M0.4025 5.05004L3.1525 6.23004C3.18335 6.2431 3.2165 6.24984 3.25 6.24984C3.2835 6.24984 3.31665 6.2431 3.3475 6.23004L6.0975 5.05004C6.1423 5.03107 6.18059 4.99944 6.20768 4.95903C6.23476 4.91862 6.24947 4.87119 6.25 4.82254V1.67754C6.24947 1.62889 6.23476 1.58146 6.20768 1.54105C6.18059 1.50064 6.1423 1.46901 6.0975 1.45004L3.3475 0.27004C3.31665 0.256976 3.2835 0.250244 3.25 0.250244C3.2165 0.250244 3.18335 0.256976 3.1525 0.27004L0.4025 1.45004C0.357702 1.46901 0.319412 1.50064 0.292324 1.54105C0.265237 1.58146 0.250527 1.62889 0.25 1.67754V4.82254C0.250527 4.87119 0.265237 4.91862 0.292324 4.95903C0.319412 4.99944 0.357702 5.03107 0.4025 5.05004ZM0.75 2.05754L3 3.02254V5.62004L0.75 4.65754V2.05754ZM3.5 5.62004V3.02254L5.75 2.05754V4.65754L3.5 5.62004ZM3.25 0.77254L5.365 1.67754L3.25 2.58504L1.135 1.67754L3.25 0.77254Z" fill="black"/>
    <path d="M13.75 2.87504H13.2175L13.82 1.97254C13.8382 1.94512 13.8509 1.91439 13.8572 1.88209C13.8636 1.84979 13.8635 1.81656 13.857 1.78429C13.8505 1.75202 13.8377 1.72135 13.8193 1.69402C13.801 1.6667 13.7774 1.64326 13.75 1.62504C13.7226 1.60681 13.6919 1.59417 13.6596 1.58783C13.6273 1.58148 13.594 1.58157 13.5618 1.58807C13.5295 1.59457 13.4988 1.60736 13.4715 1.62571C13.4442 1.64407 13.4207 1.66762 13.4025 1.69504L12.75 2.67504L12.0975 1.69504C12.0793 1.66762 12.0558 1.64407 12.0285 1.62571C12.0012 1.60736 11.9705 1.59457 11.9382 1.58807C11.906 1.58157 11.8727 1.58148 11.8404 1.58783C11.8081 1.59417 11.7774 1.60681 11.75 1.62504C11.7226 1.64326 11.699 1.6667 11.6807 1.69402C11.6623 1.72135 11.6495 1.75202 11.643 1.78429C11.6365 1.81656 11.6364 1.84979 11.6428 1.88209C11.6491 1.91439 11.6618 1.94512 11.68 1.97254L12.2825 2.87504H11.75C11.6837 2.87504 11.6201 2.90137 11.5732 2.94826C11.5263 2.99514 11.5 3.05873 11.5 3.12504C11.5 3.19134 11.5263 3.25493 11.5732 3.30181C11.6201 3.3487 11.6837 3.37504 11.75 3.37504H12.5V3.87504H11.75C11.6837 3.87504 11.6201 3.90137 11.5732 3.94826C11.5263 3.99514 11.5 4.05873 11.5 4.12504C11.5 4.19134 11.5263 4.25493 11.5732 4.30181C11.6201 4.3487 11.6837 4.37504 11.75 4.37504H12.5V4.87504C12.5 4.94134 12.5263 5.00493 12.5732 5.05181C12.6201 5.0987 12.6837 5.12504 12.75 5.12504C12.8163 5.12504 12.8799 5.0987 12.9268 5.05181C12.9737 5.00493 13 4.94134 13 4.87504V4.37504H13.75C13.8163 4.37504 13.8799 4.3487 13.9268 4.30181C13.9737 4.25493 14 4.19134 14 4.12504C14 4.05873 13.9737 3.99514 13.9268 3.94826C13.8799 3.90137 13.8163 3.87504 13.75 3.87504H13V3.37504H13.75C13.8163 3.37504 13.8799 3.3487 13.9268 3.30181C13.9737 3.25493 14 3.19134 14 3.12504C14 3.05873 13.9737 2.99514 13.9268 2.94826C13.8799 2.90137 13.8163 2.87504 13.75 2.87504Z" fill="black"/>
    <path d="M9.7975 5.09245L8.11 4.27495C8.07199 4.25301 8.02888 4.24146 7.985 4.24146C7.94112 4.24146 7.89801 4.25301 7.86 4.27495C7.8235 4.29947 7.79411 4.33318 7.77479 4.37268C7.75548 4.41218 7.74693 4.45608 7.75 4.49995V5.07995C7.14167 5.13258 6.5746 5.40935 6.15883 5.85653C5.74307 6.30371 5.50827 6.88941 5.5 7.49995C5.50039 7.81849 5.56413 8.13377 5.6875 8.42745C5.70117 8.46047 5.72176 8.49017 5.74788 8.51456C5.77401 8.53895 5.80505 8.55745 5.83893 8.56883C5.87281 8.5802 5.90874 8.58418 5.94429 8.58049C5.97983 8.5768 6.01418 8.56553 6.045 8.54745C6.09402 8.51748 6.13123 8.47154 6.15035 8.41735C6.16948 8.36317 6.16935 8.30405 6.15 8.24995C6.05008 8.01258 5.99906 7.75749 6 7.49995C6.00823 7.02232 6.1906 6.56414 6.51285 6.2115C6.8351 5.85887 7.27504 5.63606 7.75 5.58495V6.13745C7.75 6.20375 7.77634 6.26734 7.82322 6.31423C7.87011 6.36111 7.9337 6.38745 8 6.38745C8.03797 6.38659 8.07539 6.37809 8.11 6.36245L9.7975 5.54245C9.83958 5.52183 9.87501 5.48981 9.89977 5.45002C9.92452 5.41024 9.93759 5.3643 9.9375 5.31745C9.93759 5.27059 9.92452 5.22466 9.89977 5.18487C9.87501 5.14509 9.83958 5.11306 9.7975 5.09245ZM8.25 5.74995V4.89995L9.115 5.31745L8.25 5.74995Z" fill="black"/>
    <path d="M8.13268 8.65246C8.09601 8.6282 8.05358 8.61403 8.00969 8.6114C7.9658 8.60877 7.92199 8.61776 7.88268 8.63746L6.19518 9.45746C6.1531 9.47808 6.11767 9.51011 6.09291 9.54989C6.06816 9.58967 6.05508 9.63561 6.05518 9.68246C6.05508 9.72932 6.06816 9.77526 6.09291 9.81504C6.11767 9.85482 6.1531 9.88685 6.19518 9.90746L7.88268 10.725C7.91923 10.7427 7.95956 10.7513 8.00018 10.75C8.04698 10.7501 8.09289 10.7371 8.13268 10.7125C8.1687 10.6899 8.1984 10.6586 8.21896 10.6214C8.23952 10.5843 8.25026 10.5425 8.25018 10.5V9.91996C8.8585 9.86733 9.42558 9.59056 9.84134 9.14338C10.2571 8.69621 10.4919 8.11051 10.5002 7.49996C10.4998 7.18142 10.436 6.86614 10.3127 6.57246C10.299 6.53944 10.2784 6.50974 10.2523 6.48535C10.2262 6.46096 10.1951 6.44246 10.1612 6.43109C10.1274 6.41971 10.0914 6.41574 10.0559 6.41943C10.0203 6.42311 9.986 6.43438 9.95518 6.45246C9.90333 6.48288 9.86418 6.53096 9.8449 6.58789C9.82561 6.64483 9.82749 6.7068 9.85018 6.76246C9.94847 6.99596 9.99945 7.24663 10.0002 7.49996C9.99195 7.97759 9.80958 8.43578 9.48733 8.78841C9.16507 9.14105 8.72513 9.36385 8.25018 9.41496V8.86246C8.24984 8.8204 8.23889 8.7791 8.21836 8.7424C8.19782 8.70569 8.16835 8.67476 8.13268 8.65246ZM7.75018 10.1L6.88518 9.68246L7.75018 9.26246V10.1Z" fill="black"/>
    <path d="M0.499967 15.7499C0.566271 15.7499 0.62986 15.7236 0.676744 15.6767C0.723628 15.6298 0.749967 15.5663 0.749967 15.4999V12.9674C0.749967 12.4999 1.01747 12.2499 1.49997 12.2499H4.53997C5.18747 12.1474 5.91997 11.9674 6.43747 11.4099L6.47497 11.3724C6.48968 11.3547 6.50856 11.3408 6.52994 11.3321C6.55131 11.3233 6.57451 11.32 6.59747 11.3224C6.62246 11.3251 6.64643 11.3337 6.66734 11.3476C6.68824 11.3616 6.70545 11.3804 6.71747 11.4024C6.73962 11.4381 6.75136 11.4792 6.75136 11.5212C6.75136 11.5632 6.73962 11.6043 6.71747 11.6399L6.39497 12.1249C6.05497 12.6249 5.45747 12.8199 4.82497 13.0124L4.16247 13.2624C4.11421 13.2805 4.07271 13.313 4.04362 13.3555C4.01453 13.398 3.99929 13.4484 3.99997 13.4999V15.4999C3.99997 15.5663 4.02631 15.6298 4.07319 15.6767C4.12007 15.7236 4.18366 15.7499 4.24997 15.7499C4.31627 15.7499 4.37986 15.7236 4.42674 15.6767C4.47363 15.6298 4.49997 15.5663 4.49997 15.4999V13.6699L4.93497 13.4999H4.96997C5.62747 13.2999 6.36997 13.07 6.80747 12.4124L7.11747 11.9474C7.18021 11.8561 7.22194 11.7521 7.23966 11.6427C7.25738 11.5333 7.25066 11.4214 7.21997 11.3149C7.18239 11.1875 7.10802 11.0739 7.00618 10.9885C6.90434 10.9031 6.77955 10.8497 6.64747 10.8349C6.54746 10.8243 6.44635 10.8376 6.35247 10.8736C6.25858 10.9097 6.17461 10.9676 6.10747 11.0424L6.07247 11.0799C5.66247 11.5199 5.07247 11.6699 4.47997 11.7624H3.57747C3.84637 11.5846 4.05082 11.3248 4.1605 11.0216C4.27018 10.7185 4.27926 10.388 4.18639 10.0793C4.09353 9.77055 3.90366 9.49995 3.64493 9.30759C3.3862 9.11523 3.07237 9.01135 2.74997 9.01135C2.42756 9.01135 2.11374 9.11523 1.85501 9.30759C1.59628 9.49995 1.40641 9.77055 1.31354 10.0793C1.22067 10.388 1.22976 10.7185 1.33944 11.0216C1.44912 11.3248 1.65356 11.5846 1.92247 11.7624H1.49997C1.33509 11.7486 1.16916 11.7703 1.0134 11.8261C0.857641 11.8819 0.715693 11.9705 0.597166 12.086C0.478638 12.2014 0.386298 12.341 0.326396 12.4952C0.266495 12.6495 0.24043 12.8148 0.249967 12.9799V15.4999C0.249967 15.5663 0.276306 15.6298 0.323191 15.6767C0.370075 15.7236 0.433663 15.7499 0.499967 15.7499ZM2.74997 9.49995C2.94775 9.49995 3.14109 9.5586 3.30554 9.66848C3.46999 9.77836 3.59816 9.93454 3.67385 10.1173C3.74953 10.3 3.76934 10.5011 3.73075 10.695C3.69217 10.889 3.59693 11.0672 3.45707 11.2071C3.31722 11.3469 3.13904 11.4421 2.94506 11.4807C2.75108 11.5193 2.55001 11.4995 2.36728 11.4238C2.18456 11.3481 2.02838 11.22 1.9185 11.0555C1.80862 10.8911 1.74997 10.6977 1.74997 10.4999C1.74997 10.2347 1.85532 9.98038 2.04286 9.79284C2.2304 9.60531 2.48475 9.49995 2.74997 9.49995Z" fill="black"/>
    <path d="M1.25 13.5V15.5C1.25 15.5663 1.27634 15.6299 1.32322 15.6768C1.37011 15.7237 1.4337 15.75 1.5 15.75C1.5663 15.75 1.62989 15.7237 1.67678 15.6768C1.72366 15.6299 1.75 15.5663 1.75 15.5V13.5C1.75 13.4337 1.72366 13.3701 1.67678 13.3232C1.62989 13.2763 1.5663 13.25 1.5 13.25C1.4337 13.25 1.37011 13.2763 1.32322 13.3232C1.27634 13.3701 1.25 13.4337 1.25 13.5Z" fill="black"/>
    <path d="M14.4998 11.75H14.0773C14.3462 11.5721 14.5507 11.3124 14.6604 11.0092C14.7701 10.706 14.7791 10.3756 14.6863 10.0668C14.5934 9.7581 14.4035 9.4875 14.1448 9.29514C13.8861 9.10278 13.5722 8.9989 13.2498 8.9989C12.9274 8.9989 12.6136 9.10278 12.3549 9.29514C12.0961 9.4875 11.9063 9.7581 11.8134 10.0668C11.7205 10.3756 11.7296 10.706 11.8393 11.0092C11.949 11.3124 12.1534 11.5721 12.4223 11.75H11.5198C10.9348 11.6575 10.3373 11.5 9.92734 11.0675L9.89234 11.03C9.8252 10.9551 9.74123 10.8973 9.64734 10.8612C9.55346 10.8251 9.45235 10.8118 9.35234 10.8225C9.22026 10.8373 9.09547 10.8907 8.99363 10.9761C8.89179 11.0615 8.81741 11.175 8.77984 11.3025C8.74915 11.409 8.74242 11.5209 8.76015 11.6302C8.77787 11.7396 8.8196 11.8437 8.88234 11.935L9.19234 12.4C9.62984 13.0575 10.3723 13.2875 11.0298 13.4875H11.0648L11.4998 13.6575V15.5C11.4998 15.5663 11.5262 15.6299 11.5731 15.6768C11.6199 15.7237 11.6835 15.75 11.7498 15.75C11.8161 15.75 11.8797 15.7237 11.9266 15.6768C11.9735 15.6299 11.9998 15.5663 11.9998 15.5V13.5C11.9997 13.4496 11.9843 13.4005 11.9558 13.359C11.9272 13.3175 11.8868 13.2856 11.8398 13.2675L11.1773 13.0175C10.5448 12.825 9.94734 12.64 9.60734 12.13L9.28484 11.645C9.26269 11.6094 9.25095 11.5682 9.25095 11.5262C9.25095 11.4843 9.26269 11.4431 9.28484 11.4075C9.29686 11.3854 9.31407 11.3666 9.33497 11.3527C9.35588 11.3388 9.37985 11.3301 9.40484 11.3275C9.4278 11.3251 9.451 11.3284 9.47237 11.3371C9.49374 11.3458 9.51263 11.3597 9.52734 11.3775L9.56484 11.415C10.0823 11.9725 10.8148 12.1525 11.4623 12.255H14.4998C14.9823 12.255 15.2498 12.505 15.2498 12.9725V15.5C15.2498 15.5663 15.2762 15.6299 15.3231 15.6768C15.3699 15.7237 15.4335 15.75 15.4998 15.75C15.5661 15.75 15.6297 15.7237 15.6766 15.6768C15.7235 15.6299 15.7498 15.5663 15.7498 15.5V12.9675C15.7594 12.8023 15.7333 12.637 15.6734 12.4828C15.6135 12.3285 15.5212 12.189 15.4026 12.0735C15.2841 11.9581 15.1422 11.8695 14.9864 11.8136C14.8307 11.7578 14.6647 11.7361 14.4998 11.75ZM13.2498 9.5C13.4476 9.5 13.641 9.55865 13.8054 9.66853C13.9699 9.77841 14.098 9.93459 14.1737 10.1173C14.2494 10.3 14.2692 10.5011 14.2306 10.6951C14.192 10.8891 14.0968 11.0673 13.9569 11.2071C13.8171 11.347 13.6389 11.4422 13.4449 11.4808C13.251 11.5194 13.0499 11.4996 12.8672 11.4239C12.6844 11.3482 12.5283 11.22 12.4184 11.0556C12.3085 10.8911 12.2498 10.6978 12.2498 10.5C12.2498 10.2348 12.3552 9.98043 12.5427 9.79289C12.7303 9.60536 12.9846 9.5 13.2498 9.5Z" fill="black"/>
    <path d="M14.75 15.5V13.5C14.75 13.4337 14.7237 13.3701 14.6768 13.3232C14.6299 13.2763 14.5663 13.25 14.5 13.25C14.4337 13.25 14.3701 13.2763 14.3232 13.3232C14.2763 13.3701 14.25 13.4337 14.25 13.5V15.5C14.25 15.5663 14.2763 15.6299 14.3232 15.6768C14.3701 15.7237 14.4337 15.75 14.5 15.75C14.5663 15.75 14.6299 15.7237 14.6768 15.6768C14.7237 15.6299 14.75 15.5663 14.75 15.5Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_1_656">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
              <div className='flex flex-col'>
                <p>Mettrade AI</p>
                <p className='text-[#808080] text-[12px]'>Automated QC for shipments</p>
              </div>
            </Link>
            
            <Link href="/solutions/forensic-analysis" className="flex items-center hover:bg-gray-50 gap-2 p-3 rounded" onClick={closeAllDropdowns}>
              <div className='bg-[#F5F5F5] rounded-full p-2'>
                {/* Your forensic analysis SVG */}
              </div>
              <div className='flex flex-col'>
                <p>Forensic analysis</p>
                <p className='text-[#808080] text-[12px]'>Detect tampering, image fraud</p>
              </div>
            </Link>

            <Link href="/solutions/location-proof" className="flex items-center hover:bg-gray-50 gap-2 p-3 rounded" onClick={closeAllDropdowns}>
              <div className='bg-[#F5F5F5] rounded-full p-2'>
                {/* Your location proof SVG */}
              </div>
              <div className='flex flex-col'>
                <p>Location proof</p>
                <p className='text-[#808080] text-[12px]'>Verify shipment origins</p>
              </div>
            </Link>

            <Link href="/solutions/shelf-iq" className="flex items-center hover:bg-gray-50 gap-2 p-3 rounded" onClick={closeAllDropdowns}>
              <div className='bg-[#F5F5F5] rounded-full p-2'>
                {/* Your shelf IQ SVG */}
              </div>
              <div className='flex flex-col'>
                <p>ShelfIQ</p>
                <p className='text-[#808080] text-[12px]'>Smarter shelves.</p>
              </div>
            </Link>

            <Link href="/solutions/trust-passport" className="flex items-center hover:bg-gray-50 gap-2 p-3 rounded" onClick={closeAllDropdowns}>
              <div className='bg-[#F5F5F5] rounded-full p-2'>
                {/* Your trust passport SVG */}
              </div>
              <div className='flex flex-col'>
                <p>Trust Passport</p>
                <p className='text-[#808080] text-[12px]'>QC and compliance reports</p>
              </div>
            </Link>

            <Link href="/solutions/certificate-check" className="flex items-center hover:bg-gray-50 gap-2 p-3 rounded" onClick={closeAllDropdowns}>
              <div className='bg-[#F5F5F5] rounded-full p-2'>
                {/* Your certificate check SVG */}
              </div>
              <div className='flex flex-col'>
                <p>Certificate check</p>
                <p className='text-[#808080] text-[12px]'>validate FSC, PEFC, & more</p>
              </div>
            </Link>

            <Link href="/solutions/custom-integration" className="flex items-center hover:bg-gray-50 gap-2 p-3 rounded" onClick={closeAllDropdowns}>
              <div className='bg-[#F5F5F5] rounded-full p-2'>
                {/* Your custom integration SVG */}
              </div>
              <div className='flex flex-col'>
                <p>Custom integrations</p>
                <p className='text-[#808080] text-[12px]'>ERP, Supply chain connect</p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
  
  const Contactusdropdown = () => (
    <div className='relative'>
      <button 
        onClick={() => supportOpen ? closeAllDropdowns() : toggleDropdown('support')} 
        className='flex items-center gap-1 hover:text-gray-600 transition-colors text-[#1A1A1A]'
      >
       Support
      </button>
      {supportOpen && (
        <div className='absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[400px]'>
          <Link href="/contactus" className="flex items-center hover:bg-gray-50 gap-2 p-3 rounded" onClick={closeAllDropdowns}>
            <p>Contact Us</p>
          </Link>
          <Link href="/helpcenter" className="flex items-center hover:bg-gray-50 gap-2 p-3 rounded" onClick={closeAllDropdowns}>
            <p>Help Center</p>
          </Link>
        </div>
      )}
    </div>
  )

  // Custom dropdown component for Industries
  const IndustriesDropdown = () => (
    <div className="relative">
      <button 
        className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[#1A1A1A]"
        onClick={() => industriesOpen ? closeAllDropdowns() : toggleDropdown('industries')}
        onBlur={() => setTimeout(() => setIndustriesOpen(false), 150)}
      >
        Industries
        <svg className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {industriesOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[400px]">
          <div className="p-4">
            <Link href="/industries/scrap-metals" className="flex items-center hover:bg-gray-50 gap-2 p-3 rounded" onClick={closeAllDropdowns}>
              <div className='bg-[#F5F5F5] rounded-full p-2'>
                {/* Your scrap metals SVG */}
              </div>
              <div className='flex flex-col'>
                <p>Scrap & Metals</p>
                <p className='text-[#808080] text-[12px]'>ISRI grading, verification</p>
              </div>
            </Link>

            <Link href="/industries/furniture" className="flex items-center hover:bg-gray-50 gap-2 p-3 rounded" onClick={closeAllDropdowns}>
              <div className='bg-[#F5F5F5] rounded-full p-2'>
                {/* Your furniture SVG */}
              </div>
              <div className='flex flex-col'>
                <p>Furniture</p>
                <p className='text-[#808080] text-[12px]'>Defection detection, SKUs</p>
              </div>
            </Link>

            <Link href="/industries/construction" className="flex items-center hover:bg-gray-50 gap-2 p-3 rounded" onClick={closeAllDropdowns}>
              <div className='bg-[#F5F5F5] rounded-full p-2'>
                {/* Your construction SVG */}
              </div>
              <div className='flex flex-col'>
                <p>Construction</p>
                <p className='text-[#808080] text-[12px]'>Material verification</p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
  
  return (
    <div className='flex justify-between items-center gap-5 w-full p-4 bg-white rounded-[24px] text-[#1A1A1A] border border-[2px] '>
      <div onClick={() => router.push('/')} className='flex items-center gap-2'>
        <Image src={'/logo/corseco.png'} height={43} width={43} alt='logo' />
        <p className='text-[24px] font-[700] text-[#1A1A1A] leading-[150%]'>Corseco.tech</p>
      </div>
      
      <div className=" hidden lg:flex justify-between gap-10 w-1/2 self-stretch lg:gap-2 xl:gap-7 items-center">
        {/* Solutions - Custom dropdown with links */}
        <SolutionsDropdown />

        {/* About us - direct link */}
        <Link href="/about" className="cursor-pointer hover:text-gray-600 text-base transition-colors" onClick={closeAllDropdowns}>
          About us
        </Link>

        {/* Blog - direct link */}
        <Link href="/blog" className="cursor-pointer hover:text-gray-600 transition-colors" onClick={closeAllDropdowns}>
          Blog
        </Link>

        {/* Industries - Custom dropdown with links */}
        <IndustriesDropdown />

        {/* Contact Us - direct link */}
        <Contactusdropdown />
      </div>
       
      <div className=' items-center justify-center gap-2 p-2 border border-[#808080] hidden lg:flex rounded-[8px] w-[266px] bg-[#F5F5F5]'>
        <p className='font-[700] text-[24px]  leading-[150%] text-[#1A1A1A]'>Book Demo</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M16.672 11L11.308 5.63605L12.722 4.22205L20.5 12L12.722 19.778L11.308 18.364L16.672 13H4.5V11H16.672Z" fill="#1A1A1A" />
        </svg>
      </div>
      
      <div className="lg:hidden">
        <button onClick={() => setOpenMenu(!openmenu)} className='cursor-pointer'>
          <Menu size={24} />
        </button>
      </div>
      
         {
          openmenu && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <div onClick={() => router.push('/')} className='flex items-center gap-2 cursor-pointer'>
                  <Image src={'/logo/corseco.png'} height={43} width={43} alt='logo' />
                  <p className='text-[24px] font-[700] text-[#1A1A1A] leading-[150%]'>Corseco.tech</p>
                </div>
                <button onClick={closeMobileMenu} className='cursor-pointer'>
                   < X size={24} />
                </button>
              </div>
  
              {/* Mobile Navigation */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-6 p-5">
                  {/* Solutions Section */}
                  <div>
                    <button 
                      className="flex items-center justify-between w-full text-left font-semibold text-lg mb-3"
                      onClick={() => toggleDropdown('solutions')}
                    >
                      Solutions
                      <svg className={`w-5 h-5 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {solutionsOpen && (
                      <div className="space-y-2 ml-4">
                        <Link href="/solutions/mettrade-ai" className="block py-2 text-gray-600" onClick={closeMobileMenu}>
                          Mettrade AI
                        </Link>
                        <Link href="/solutions/forensic-analysis" className="block py-2 text-gray-600" onClick={closeMobileMenu}>
                          Forensic analysis
                        </Link>
                        <Link href="/solutions/location-proof" className="block py-2 text-gray-600" onClick={closeMobileMenu}>
                          Location proof
                        </Link>
                        <Link href="/solutions/shelf-iq" className="block py-2 text-gray-600" onClick={closeMobileMenu}>
                          ShelfIQ
                        </Link>
                        <Link href="/solutions/trust-passport" className="block py-2 text-gray-600" onClick={closeMobileMenu}>
                          Trust Passport
                        </Link>
                        <Link href="/solutions/certificate-check" className="block py-2 text-gray-600" onClick={closeMobileMenu}>
                          Certificate check
                        </Link>
                        <Link href="/solutions/custom-integration" className="block py-2 text-gray-600" onClick={closeMobileMenu}>
                          Custom integrations
                        </Link>
                      </div>
                    )}
                  </div>
  
                  {/* About Us */}
                  <Link href="/about" className="block text-lg font-semibold" onClick={closeMobileMenu}>
                    About us
                  </Link>
  
                  {/* Blog */}
                  <Link href="/blog" className="block text-lg font-semibold" onClick={closeMobileMenu}>
                    Blog
                  </Link>
  
                  {/* Industries Section */}
                  <div>
                    <button 
                      className="flex items-center justify-between w-full text-left font-semibold text-lg mb-3"
                      onClick={() => toggleDropdown('industries')}
                    >
                      Industries
                      <svg className={`w-5 h-5 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {industriesOpen && (
                      <div className="space-y-2 ml-4">
                        <Link href="/industries/scrap-metals" className="block py-2 text-gray-600" onClick={closeMobileMenu}>
                          Scrap & Metals
                        </Link>
                        <Link href="/industries/furniture" className="block py-2 text-gray-600" onClick={closeMobileMenu}>
                          Furniture
                        </Link>
                        <Link href="/industries/construction" className="block py-2 text-gray-600" onClick={closeMobileMenu}>
                          Construction
                        </Link>
                      </div>
                    )}
                  </div>
  
                  {/* Support Section */}
                  <div>
                    <button 
                      className="flex items-center justify-between w-full text-left font-semibold text-lg mb-3"
                      onClick={() => toggleDropdown('support')}
                    >
                      Support
                      <svg className={`w-5 h-5 transition-transform ${supportOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {supportOpen && (
                      <div className="space-y-2 ml-4">
                        <Link href="/contactus" className="block py-2 text-gray-600" onClick={closeMobileMenu}>
                          Contact Us
                        </Link>
                        <Link href="/helpcenter" className="block py-2 text-gray-600" onClick={closeMobileMenu}>
                          Help Center
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
  
              {/* Mobile Book Demo Button */}
              <div className="p-4 border-t">
                <div className='flex items-center justify-center gap-2 p-3 border border-[#808080] rounded-[8px] bg-[#F5F5F5]'>
                  <p className='font-[700] text-[20px] leading-[150%] text-[#1A1A1A]'>Book Demo</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M16.672 11L11.308 5.63605L12.722 4.22205L20.5 12L12.722 19.778L11.308 18.364L16.672 13H4.5V11H16.672Z" fill="#1A1A1A" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      
    </div>
  )
}

export default Header
