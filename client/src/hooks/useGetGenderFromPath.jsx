const useGetGenderFromPath = () => {
  const pathname = window.location.pathname;
  const pathnameSegment = pathname.split("/");

  const gender = pathnameSegment[pathnameSegment.length - 1];

  return { gender };
};

export default useGetGenderFromPath;
