import Image from 'next/image';
// icons
import { StarIcon } from '@heroicons/react/solid';

const AppPlaceCard = ({ data }) => {
  console.log(data)
  
  return (
    <div className="grid sm:grid-cols-[300px,1fr] py-5 border-gray-200 cursor-pointer sm:border-t grid-cols-1 gap-x-4">
      {/* left - image */}
      <div className="relative w-full mb-2 md:mb-0 sm:h-44 h-52">
        {/* <Image
          src={data.img}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          className="w-full rounded-xl"
          placeholder="blur"
          blurDataURL={data.img}
          quality={40}
        /> */}
      </div>
      {/* right - detail */}
      <div className="flex flex-col px-1 sm:px-0">
        {/* detail top */}
        <div className="flex flex-col my-5">
        {data.map(data => (
                    <span className="text-sm text-gray-300">{data.address}</span>
          ))}

          {data.map(data => (
          <h3 className="text-lg">{data.name}</h3>
          ))}
          <hr className="hidden w-10 mt-3 mb-1 border-b border-gray-200 border-opacity-60 sm:block" />
         
          {data.map( data => data.chargePoints.map(chargePoint =>  (
           <>
            <span className="text-md text-gray-300">Charging Connector Availability: {chargePoint.isAvailable}</span> 
            <span>{chargePoint.chargePointConnectors.map(
            chargePointConnector => (
              <span className="mr-1 text-sm font-semibold">{chargePointConnector.tariff.currencyId} {chargePointConnector.tariff.priceKwh} <span className='text-gray-300 text-xs'>/Kwh</span></span>
            )
          )}
          </span>
           </> 
           
        ))
          )}  
          {data.map( data => data.operatingHours.openingDays?.map(openingDay => (
            <>
                <div className="flex items-end gap-2">
                <span className='text-md text-primary'>{openingDay.day}</span>
                <span className='text-sm text-gray-400'>
                  {openingDay.open} - {openingDay.close}
                  </span>
                </div>
            </>
          )))}
        </div>

        {/* detail bottom */}
        <div className="flex justify-between order-first sm:order-none">
          <div className="flex items-center">
            <StarIcon className="h-5 text-primary" />
            <span className="mx-1 font-semibold">5</span>
            <span className="text-sm text-gray-300/80">250+</span>
          </div>
          <div>
            {/* {data.map( data => data.chargePoints.map(chargePoint => chargePoint.chargePointConnectors.map(
              chargePointConnector => (
                <span className="mr-1 text-lg font-semibold">{chargePointConnector.tariff.currencyId} {chargePointConnector.tariff.priceKwh}</span>
              )
            )))}
            <span className="font-light md:text-lg text-md">/ Kwh</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPlaceCard;
