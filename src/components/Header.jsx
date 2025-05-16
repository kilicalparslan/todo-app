import logo from '../assets/sticky-note.png';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center">
        <img
          src={logo}
          alt="Todo Logo"
          className="h-10 w-10 mr-3"
        />
        <h1 className="text-2xl font-semibold text-white">
          Yapılacaklar Listesi
        </h1>
      </div>
    </header>
  );
};

export default Header;
