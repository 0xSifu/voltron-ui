import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IAppNearbyStationProps {
  data: { id: number, name: string; img?: string; state: string }; // Making img property optional
  isSmall?: boolean;
}

const AppNearbyStation: FC<IAppNearbyStationProps> = ({ data, isSmall }) => {
  return (
    <Link href={`/${data.id}`}>
      <a>
        <div
          key={data.name}
          className={`${
            isSmall ? 'items-center' : 'flex-col items-start md:items-center'
          } flex  p-2 duration-300 md:flex-row md:p-3 gap-x-4 active:scale-105 active:bg-gray-200 active:bg-opacity-40 rounded-xl`}
        >
          {/* Check if img is provided, if not, render empty placeholder */}
          {data.img ? (
            <Image
              src={data.img}
              alt={data.name}
              width={isSmall ? 48 : 64}
              height={isSmall ? 48 : 64}
              placeholder="blur"
              blurDataURL={data.img}
              className="rounded-lg"
              objectFit="cover"
            />
          ) : (
            <div
              className={`bg-gray-200 rounded-lg ${
                isSmall ? 'w-12 h-12' : 'w-16 h-16'
              }`}
            ></div>
          )}
          <div className={`${isSmall || 'mt-2'} md:mt-0`}>
            <h3
              className={`${
                isSmall ? 'text-sm' : 'text-sm lg:text-base'
              } font-medium text-gray-500`}
            >
              {data.name}
            </h3>
            <span
              className={`${isSmall ? 'text-sm' : 'text-sm lg:text-base'} text-gray-300`}
            >
              {data.state}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default AppNearbyStation;
