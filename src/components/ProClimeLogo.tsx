export const ProClimeLogo = ({ className = "", width = 40, height = 40 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 40 40" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Replace with actual ProClime logo SVG paths */}
      <circle cx="20" cy="20" r="20" fill="#1B4B33" />
      <text x="50%" y="53%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="14px" fontWeight="bold">PC</text>
    </svg>
  );
}; 