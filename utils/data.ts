export const getExploreNearby = async () => {
  const exploreNearbyResponse = await fetch(
    'https://firebasestorage.googleapis.com/v0/b/edwintantawi-25f09.appspot.com/o/airbnb-web-clone%2Fexplore-nearby.json?alt=media'
  );
  return exploreNearbyResponse.json();
};

export const getLiveAnywhere = async () => {
  const liveAnywhereResponse = await fetch(
    'https://firebasestorage.googleapis.com/v0/b/edwintantawi-25f09.appspot.com/o/airbnb-web-clone%2Flive-anywhere.json?alt=media'
  );
  return liveAnywhereResponse.json();
};

export const getSearch = async () => {
  const searchResponse = await fetch(
    'https://firebasestorage.googleapis.com/v0/b/edwintantawi-25f09.appspot.com/o/airbnb-web-clone%2Fsearch.json?alt=media'
  );
  return searchResponse.json();
};


export const getChargeStations = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/charge-stations');
    if (!response.ok) {
      throw new Error('Failed to fetch charge stations');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching charge stations:', error);
    return [];
  }
};
