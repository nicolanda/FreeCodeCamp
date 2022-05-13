import myPhoto from "../images/91456077_2891026684279975_6849682142230740992_n.jpg"

export const Header = () => (
  <header className="header-container">
    <img className="myPhoto" src={myPhoto} alt="selfie" />
    <h1 className="My-name-header">Nicolas Landazabal</h1>
    <h2 className="My-profession-header">Front Developer</h2>
    <h4 className="My-name-website">nicolas.website</h4>
    <div className="btn-container">
      <button className="btn-email"><i className="fa-solid fa-envelope"></i>Email</button>
      <button className="btn-linkedIn"><i className="fa-brands fa-linkedin"></i>LinkedIn</button>
    </div>
  </header>
)