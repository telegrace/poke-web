interface SearchIconProps {
  toggleSearchBar: (boolean: boolean) => void;
}
const CloseIcon: React.FC<SearchIconProps> = ({ toggleSearchBar }) => {
  return (
    <div
      onClick={() => {
        toggleSearchBar(false);
      }}
    >
      <svg
        className="h-8 w-8 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default CloseIcon;
