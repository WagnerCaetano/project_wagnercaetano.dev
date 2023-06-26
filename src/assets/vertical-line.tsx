export const VerticalLine = (height: string) => {
  return (
    <span className={`max-h-[${height}px] w-1 ml-3`}>
      <svg width="5" height={height} viewBox={`0 0 5 ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="5" height={height} rx="2.5" fill="#FFA500" />
      </svg>
    </span>
  );
};

export default VerticalLine;
