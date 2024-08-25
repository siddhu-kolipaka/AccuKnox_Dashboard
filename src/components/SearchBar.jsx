/* eslint-disable react/prop-types */

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search widgets..."
        style={{ padding: "10px", width: "100%", boxSizing: "border-box" }}
      />
    </div>
  );
};

export default SearchBar;
