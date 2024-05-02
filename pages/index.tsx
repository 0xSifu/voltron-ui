import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// components
import AppHead from '@/components/atoms/AppHead';
import AppHeader from '@/components/organisms/AppHeader';
import AppHero from '@/components/atoms/AppHero';
import AppSection from '@/components/atoms/AppSection';
import AppBanner from '@/components/atoms/AppBanner';
import AppFooter from '@/components/atoms/AppFooter';
import AppNearby from '@/components/atoms/AppNearby';
import AppNearbyStation from '@/components/atoms/AppNearbyStation';

// typings
import { IExploreNearby, ILiveAnywhere, IStations } from 'typings';
// utils
import { getExploreNearby, getLiveAnywhere, getChargeStations } from 'utils/data';

interface IHomeDataProps {
  exploreNearby: IExploreNearby[];
  liveAnywhere: ILiveAnywhere[];
  stations: IStations[];
}

const Home: FC<IHomeDataProps> = ({ exploreNearby, liveAnywhere, stations }) => {
  return (
    <>
      <AppHead />
      <AppHeader stations={stations} />
      <main>
        <AppHero />
        <AppSection
          title="Explore Nearby"
          className="grid grid-cols-2 lg:gap-x-4 gap-x-1 gap-y-2 sm:grid-cols-3 lg:grid-cols-4"
        >
          {stations.map((data, index) => (
            <AppNearbyStation key={index} data={data} />
          ))}
        </AppSection>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const exploreNearby = await getExploreNearby();
  const liveAnywhere = await getLiveAnywhere();
  const stations = await getChargeStations();

  return {
    props: { exploreNearby, liveAnywhere, stations },
  };
};

export default Home;
