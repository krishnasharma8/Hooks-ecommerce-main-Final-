// import Select from 'react-select';
// import { products } from '../utils/products';

// const options = [
//     { value: "sofa", label: "Sofa" },
//     { value: "chair", label: "Chair" },
//     { value: "watch", label: "Watch" },
//     { value: "mobile", label: "Mobile" },
//     { value: "wireless", label: "Wireless" },
// ];

// const customStyles = {
//     control: (provided) => ({
//         ...provided,
//         backgroundColor: "#0f3460",
//         color: "white",
//         borderRadius: "5px",
//         border: "none",
//         boxShadow: "none",
//         width: "200px",
//         height: "40px",
//     }),
//     option: (provided, state) => ({
//         ...provided,
//         backgroundColor: state.isSelected ? "#0f3460" : "white",
//         color: state.isSelected ? "white" : "#0f3460",
//         "&:hover": {
//         backgroundColor: "#0f3460",
//         color: "white",
//         },
//     }),
//     singleValue: (provided) => ({
//         ...provided,
//         color: "white",
//     }),
// };

// const FilterSelect = ({setFilterList}) => {
//     const handleChange = (selectedOption)=> {
//         setFilterList(products.filter(item => item.category ===selectedOption.value))
//     }
//     return (
//     <Select
//     options={options}
//     defaultValue={{ value: "", label: "Filter By Category" }}
//     styles={customStyles}
//     onChange={handleChange}
//     />
//     );
// };

// export default FilterSelect;



// import Select from 'react-select';
// import { products } from '../utils/products';

// const options = [
//   { value: "sofa", label: "Sofa" },
//   { value: "chair", label: "Chair" },
//   { value: "watch", label: "Watch" },
//   { value: "mobile", label: "Mobile" },
//   { value: "wireless", label: "Wireless" },
// ];

// const customStyles = {
//   control: (provided) => ({
//     ...provided,
//     backgroundColor: "#0f3460",
//     color: "white",
//     borderRadius: "5px",
//     border: "none",
//     boxShadow: "none",
//     width: "200px",
//     height: "40px",
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isSelected ? "#0f3460" : "white",
//     color: state.isSelected ? "white" : "#0f3460",
//     "&:hover": {
//       backgroundColor: "#0f3460",
//       color: "white",
//     },
//   }),
//   singleValue: (provided) => ({
//     ...provided,
//     color: "white",
//   }),
// };

// const FilterSelect = ({ setFilterList }) => {
//   const handleChange = (selectedOption) => {
//     if (selectedOption) {
//       const filtered = products.filter(
//         (item) => item.category === selectedOption.value
//       );
//       setFilterList(filtered);
//     }
//   };

//   return (
//     <Select
//       options={options}
//       placeholder="Filter by Category"
//       styles={customStyles}
//       onChange={handleChange}
//       isClearable
//     />
//   );
// };

// export default FilterSelect;
// src/components/FilterSelect.jsx

import Select from "react-select";

const options = [
  { value: "sofa", label: "Sofa" },
  { value: "chair", label: "Chair" },
  { value: "watch", label: "Watch" },
  { value: "mobile", label: "Mobile" },
  { value: "wireless", label: "Wireless" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#0f3460",
    color: "white",
    borderRadius: "5px",
    border: "none",
    boxShadow: "none",
    width: "200px",
    height: "40px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#0f3460" : "white",
    color: state.isSelected ? "white" : "#0f3460",
    "&:hover": {
      backgroundColor: "#0f3460",
      color: "white",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

const FilterSelect = ({ setCategory }) => {
  const handleChange = (selectedOption) => {
    if (selectedOption) {
      setCategory(selectedOption.value); // ✅ Use setCategory only
    } else {
      setCategory(""); // Clear category filter
    }
  };

  return (
    <Select
      options={options}
      placeholder="Filter by Category"
      styles={customStyles}
      onChange={handleChange}
      isClearable
    />
  );
};

export default FilterSelect;
