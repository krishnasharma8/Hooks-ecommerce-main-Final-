// import { useEffect, useState } from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import "./navbar.css";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// const NavBar = () => {
//   const { cartList } = useSelector((state) => state.cart);
//   const [expand, setExpand] = useState(false);
//   const [isFixed, setIsFixed] = useState(false);
//   // fixed Header
//   function scrollHandler() {
//     if (window.scrollY >= 100) {
//       setIsFixed(true);
//     } else if (window.scrollY <= 50) {
//       setIsFixed(false);
//     }
//   }
//   window.addEventListener("scroll", scrollHandler);
//   // useEffect(()=> {
//   //   if(CartItem.length ===0) {
//   //     const storedCart = localStorage.getItem("cartItem");
//   //     setCartItem(JSON.parse(storedCart));
//   //   }
//   // },[])
//   return (
//     <Navbar
//       fixed="top"
//       expand="md"
//       className={isFixed ? "navbar fixed" : "navbar"}
//     >
//       <Container className="navbar-container">
//         <Navbar.Brand to="/">
//           <ion-icon name="bag"></ion-icon>
//           <h1 className="logo">Hooks</h1>
//         </Navbar.Brand>
//         {/* Media cart and toggle */}
//         <div className="d-flex">
//           <div className="media-cart">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="black"
//               className="nav-icon"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <Link
//               aria-label="Go to Cart Page"
//               to="/cart"
//               className="cart"
//               data-num={cartList.length}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="black"
//                 className="nav-icon"
//               >
//                 <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
//               </svg>
//             </Link>
//           </div>
//           <Navbar.Toggle
//             aria-controls="basic-navbar-nav"
//             onClick={() => {
//               setExpand(expand ? false : "expanded");
//             }}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </Navbar.Toggle>
//         </div>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="justify-content-end flex-grow-1 pe-3">
//             <Nav.Item>
//               <Link
//                 aria-label="Go to Home Page"
//                 className="navbar-link"
//                 to="/"
//                 onClick={() => setExpand(false)}
//               >
//                 <span className="nav-link-label">Home</span>
//               </Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Link
//                 aria-label="Go to Shop Page"
//                 className="navbar-link"
//                 to="/shop"
//                 onClick={() => setExpand(false)}
//               >
//                 <span className="nav-link-label">Shop</span>
//               </Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Link
//                 aria-label="Go to Cart Page"
//                 className="navbar-link"
//                 to="/login"
//                 onClick={() => setExpand(false)}
//               >
//                 <span className="nav-link-label">Login/SignUp</span>
//               </Link>
//             </Nav.Item>
//             <Nav.Item className="expanded-cart">
//               {/* <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="black"
//                 className="nav-icon"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
//                   clipRule="evenodd"
//                 />
//               </svg> */}
//               <Link
//                 aria-label="Go to Cart Page"
//                 to="/cart"
//                 className="cart"
//                 data-num={cartList.length}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="black"
//                   className="nav-icon"
//                 >
//                   <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
//                 </svg>
//               </Link>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { cartList } = useSelector((state) => state.cart);
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginStatus = () => {
    const name = localStorage.getItem("userName");
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setUserName(name || "");
    setIsLoggedIn(loggedIn);
  };

  useEffect(() => {
    checkLoginStatus();

    const handleLoginChange = () => {
      checkLoginStatus();
    };

    const handleStorageChange = () => {
      checkLoginStatus();
    };

    window.addEventListener('loginChange', handleLoginChange);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('loginChange', handleLoginChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      setIsFixed(window.scrollY >= 100);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("isLoggedIn");
    window.dispatchEvent(new Event('loginChange'));
    window.location.reload();
  };

  return (
    <Navbar 
      fixed="top" 
      expand="md" 
      className={isFixed ? "navbar fixed" : "navbar"}
      expanded={expand}
    >
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/" onClick={() => setExpand(false)}>
          <ion-icon name="bag"></ion-icon>
          <h1 className="logo">Hooks</h1>
        </Navbar.Brand>

        <div className="d-flex">
          <div className="media-cart">
            {isLoggedIn ? (
              <>
                <div className="user-initial" onClick={handleLogout}>
                  {userName.charAt(0).toUpperCase()}
                </div>
                <span className="logout-text" onClick={handleLogout}>Logout</span>
              </>
            ) : (
              <Link to="/login" className="profile-icon" onClick={() => setExpand(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="nav-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            )}
            <Link 
              to="/cart" 
              className="cart" 
              data-num={cartList.length}
              onClick={() => setExpand(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="nav-icon"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </Link>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpand(expand ? false : true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Item>
              <Link className="navbar-link" to="/" onClick={() => setExpand(false)}>
                <span className="nav-link-label">Home</span>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="navbar-link" to="/shop" onClick={() => setExpand(false)}>
                <span className="nav-link-label">Shop</span>
              </Link>
            </Nav.Item>
            {!isLoggedIn ? (
              <Nav.Item>
                <Link className="navbar-link" to="/login" onClick={() => setExpand(false)}>
                  <span className="nav-link-label">Login/SignUp</span>
                </Link>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <span className="navbar-link logout-link" onClick={() => {
                  handleLogout();
                  setExpand(false);
                }}>
                  <span className="nav-link-label">Logout</span>
                </span>
              </Nav.Item>
            )}
            <Nav.Item className="expanded-cart">
              <Link 
                to="/cart" 
                className="cart" 
                data-num={cartList.length}
                onClick={() => setExpand(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="nav-icon"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;