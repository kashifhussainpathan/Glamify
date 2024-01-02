const globalCache = {};

const memoizeData = (page, gender, filters, newData = null) => {
  const cacheKey = `${page}_${gender}_${JSON.stringify(filters)}`;

  if (cacheKey in globalCache) {
    return { isCached: true, cachedData: globalCache[cacheKey] };
  } else if (newData !== null) {
    globalCache[cacheKey] = newData;
    return { isCached: false, cachedData: null };
  } else {
    return { isCached: false, cachedData: null };
  }
};

export default memoizeData;
