import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="Header-Comp-Parent">
      <div className="Header-Comp-Parent-TopPart">
        <div
          className="Header-Comp-Parent-TopPart-Parts"
          id="Header-Comp-Parent-TopPart-right"
        >
          <img
            src="/1st-Logo.png"
            alt="my-logo"
            className="Header-Comp-Parent-TopPart-right-logoIMG"
          />
          <SearchBar />
        </div>
        <div
          className="Header-Comp-Parent-TopPart-Parts"
          id="Header-Comp-Parent-TopPart-left"
        ></div>
      </div>
      <div className="Header-Comp-Parent-bottomPart"></div>
    </div>
  );
};

export default Header;
