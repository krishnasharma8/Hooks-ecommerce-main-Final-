// import { useState } from "react";
// import "./searchbar.css";
// import { products } from "../../utils/products";

// const SearchBar = ({ setFilterList }) => {
//   const [searchWord, setSearchWord] = useState(null);
  
//   const handelChange = (input) => {
//     const value = input.target.value; // ✅ use the current input value
//     setSearchWord(value);
//     setFilterList(
//       products.filter((item) =>
//         item.productName?.toLowerCase().includes(value.toLowerCase())
//       )
//     );
//   };

//   return (
//     <div className="search-container">
//       <input type="text" placeholder="Search..." onChange={handelChange} />
//       <ion-icon name="search-outline" className="search-icon"></ion-icon>
//     </div>
//   );
// };

// export default SearchBar;

import { useState } from "react";
import "./searchbar.css";

const SearchBar = ({ setSearchTerm }) => {  // ✅ Accept setSearchTerm instead
  const [searchWord, setSearchWord] = useState("");
  
  const handleChange = (input) => {
    const value = input.target.value;
    setSearchWord(value);
    setSearchTerm(value);  // ✅ Just pass the search term up
  };

  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </div>
  );
};

export default SearchBar;