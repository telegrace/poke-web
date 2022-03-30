interface SearchIconProps {
  toggleSearchBar: (boolean: boolean) => void;
}

const SearchIcon: React.FC<SearchIconProps> = ({ toggleSearchBar }) => {
  return (
    <div
      onClick={() => {
        toggleSearchBar(true);
      }}
      className="flex justify-end p-8"
    >
      <svg
        className="h-8 w-8 text-blue-500"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <circle cx="10" cy="10" r="7" />{" "}
        <line x1="21" y1="21" x2="15" y2="15" />
      </svg>
    </div>
  );
};

export default SearchIcon;
