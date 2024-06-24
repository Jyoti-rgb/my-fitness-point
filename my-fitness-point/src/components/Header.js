import { Link } from "react-router-dom";

function Header({ isLoggedIn, onLogout }) {
  return (
    <header
      style={{
        background: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
        borderBottom: "2px solid #dee2e6",
        padding: "15px 30px",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <img
        src="/sun.png"
        alt="logo"
        style={{ width: "40px", height: "40px", marginRight: "10px" }}
      />
      <h1
        style={{
          marginRight: "950px",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#495057",
            fontFamily: "Georgia, serif",
          }}
        >
          MyFitnessPoint
        </Link>
      </h1>
      <nav>
        <ul
          style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}
        >
          <li style={{ margin: "0 5px" }}>
            <Link className="text-item" to="/">
              Home <span className="hover-line"></span>
            </Link>
          </li>

          <li style={{ margin: "0 5px" }}>
            <Link className="text-item" to="/seven-day-workout">
              7-Day-Workout
            </Link>
          </li>
          <li style={{ margin: "0 5px" }}>
            <Link className="text-item" to="/about">
              About
            </Link>
          </li>
          <li style={{ margin: "0 5px" }}>
            <Link className="text-item" to="/contact">
              Contact
            </Link>
          </li>
          {/* <li style={{ margin: '0 5px' }}>
            <Link to="/registrationForm" style={{ textDecoration: 'none', color: '#495057', position: 'relative', transition: 'color 0.3s' }}>
            RegistrationForm
              <span className="hover-line" style={{ position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', backgroundColor: '#495057', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
            </Link>
          </li> */}
          {isLoggedIn ? (
            <>
              <li style={{ margin: "0 5px" }}>
                <Link className="text-item" to="/gymMemberProfile">
                  GymMemberProfile
                </Link>
              </li>
              <li style={{ margin: "0 5px" }}>
                <button
                  onClick={onLogout}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#495057",
                    position: "relative",
                    transition: "color 0.3s",
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li style={{ margin: "0 5px" }}>
              <Link className="text-item" to="/loginForm">
                LoginForm
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
