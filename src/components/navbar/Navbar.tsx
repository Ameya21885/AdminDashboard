import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/public/images/logo.svg" alt="" />
        <span>lamadmin</span>
      </div>
      <div className="icons">
        <img src="/public/images/search.svg" alt="" className="icon" />
        <img src="/public/images/app.svg" alt="" className="icon" />
        <img src="/public/images/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/public/images/notifications.svg" alt="" className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="Jane"
          />
          <span>Jane</span>
        </div>
        <img src="/public/images/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
