import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
// components
import AppLogo, { EAppLogo } from '@/components/atoms/AppLogo';
import AppSearchBar from '@/components/molecules/AppSearchBar';
import AppHeaderOption from '@/components/atoms/AppHeaderOption';
import AppSearchBarMobile from '@/components/molecules/AppSearchBarMobile';
// icons
import { GlobeAltIcon, MenuIcon, SearchIcon } from '@heroicons/react/outline';
import { UserCircleIcon } from '@heroicons/react/solid';
// typings
import { EHeaderOpions, IExploreNearby, IStations } from 'typings';
import { formatGuests, formatRangeDate } from 'utils';
// context

interface AppHeaderProps {
  exploreNearby?: IExploreNearby[];
  stations?: IStations[];
  searchPage?: boolean;
  query?: any;
}

const AppHeader: FC<AppHeaderProps> = ({ exploreNearby, stations, searchPage, query }) => {
  const [isSnapTop, setIsSnapTop] = useState<boolean>(searchPage ? false : true);
  const [isActiveSearch, setIsActiveSearch] = useState<boolean>(
    searchPage ? false : true
  );
  const [activeMenu, setActiveMenu] = useState<EHeaderOpions | null>(
    EHeaderOpions.PLACES_TO_STAY
  );

  const handleOnScroll = () => {
    const position = window.scrollY;
    if (position >= 50) {
      setIsSnapTop(false);
      setIsActiveSearch(false);
    } else {
      setIsSnapTop(true);
      setIsActiveSearch(true);
    }
  };

  const headerBehavior = () => {
    let style = [];
    if (!isSnapTop) style.push('bg-white shadow-lg');
    if (!isActiveSearch) style.push('h-[86px] pb-5');
    if (isActiveSearch) style.push('pb-8');
    return style.join(' ');
  };

  useEffect(() => {
    // listen to scroll
    if (!searchPage) {
      window.addEventListener('scroll', handleOnScroll);
    }
    return () => window.removeEventListener('scroll', handleOnScroll);
  }, [searchPage]);

  return (
    <>
      <header
        className={`${headerBehavior()} z-50 fixed top-0 w-full pt-5 duration-300 md:transition-none`}
      >
        {/* header top */}
        <div
          className={`${
            searchPage ? 'px-7' : 'container'
          } hidden md:grid md:grid-cols-[auto,1fr,auto] xl:grid-cols-[1.5fr,3fr,1.5fr] 2xl:grid-cols-[1fr,3fr,1fr] items-start`}
        >
          {/* left side - logo */}
          <div className="flex items-center h-12">
            <Link href="/">
              <a>
                {/* Voltron Logo Svg */}
              </a>
            </Link>
          </div>
          {/* small search bar */}
          <button
            className={`${
              isActiveSearch && 'scale-[1.33] translate-y-[75px] opacity-0 z-[-50]'
            } ${
              searchPage ? 'pl-3' : 'pl-6'
            } relative flex items-center h-12 pr-2 mx-auto text-left transform bg-white border border-gray-200 rounded-full shadow-md cursor-pointer min-w-[320px] hover:shadow-lg md:absolute left-24 lg:left-auto lg:right-1/2 lg:translate-x-1/2 duration-200`}
            onClick={() => setIsActiveSearch(true)}
          >
            {searchPage ? (
              <span className="flex-grow text-sm font-medium tracking-wide text-gray-500">
                <span className="px-4 py-1 border-r border-gay-200">
                  {query.location || (
                    <span className="font-normal text-gray-300">Location</span>
                  )}
                </span>
                <span className="px-4 py-1 border-r border-gay-200">
                  {formatRangeDate(query.checkIn, query.checkOut) || (
                    <span className="font-normal text-gray-300">Add dates</span>
                  )}
                </span>
                <span className="px-4 py-1">
                  {formatGuests(query.guests, { noInfants: true }) || (
                    <span className="font-normal text-gray-300">Add guests</span>
                  )}
                </span>
              </span>
            ) : (
              <span className="flex-grow text-sm font-medium tracking-wide text-gray-500">
                Start your search
              </span>
            )}
            <SearchIcon className="h-8 p-2 ml-3 text-white rounded-full bg-primary" />
          </button>
          {/* middle side navigation */}
          <div className="relative flex flex-col items-center justify-center order-last col-span-2 xl:order-none xl:col-span-1">
            <div className="text-white">
              
            </div>
          </div>
          {/* right side */}
          <div className="flex items-center justify-end">
            <button className="flex items-center pl-3 pr-1 bg-white border border-gray-200 rounded-full h-11 hover:shadow-md">
              <MenuIcon className="h-5 mr-2 text-gray-300" />
              <UserCircleIcon className="h-10 text-gray-300" />
            </button>
          </div>
        </div>
        {/* main search bar */}
        <AppSearchBar
          menu={activeMenu}
          isActiveHeader={isActiveSearch}
          searchPage={searchPage}
          closeSearch={() => setIsActiveSearch(false)}
        />
        {/* mobile search bar */}
        <AppSearchBarMobile exploreNearby={exploreNearby || []} searchPage={searchPage} />
      </header>
      {/* background layer */}
      {isActiveSearch && !isSnapTop && (
        <div
          className="fixed inset-0 z-40 bg-transparent-black"
          onClick={() => setIsActiveSearch(false)}
        />
      )}
    </>
  );
};

export default AppHeader;
