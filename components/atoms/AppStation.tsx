import { FC } from 'react';

interface IAppStationProps {
  station: {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
  };
}

const AppStation: FC<IAppStationProps> = ({ station }) => {
  const { id, name, address, city, state } = station;

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{address}, {city}, {state}</p>
    </div>
  );
};

export default AppStation;
