import React from 'react';
import { Link } from 'react-router-dom';
import { User, ShoppingBag, Menu, X } from 'lucide-react';
import AccountModal from '../common/AccountModal';
import Modal from '../common/Modal';

const navLink = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Tin Sách', path: '/books' },
  { name: 'Tác Giả', path: '/authors' },
  { name: 'Liên Hệ', path: '/contact' },
];

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const [count] = React.useState(8);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('');

  const handleOpenModal = linkName => {
    setModalContent(linkName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  //Hàm lấy dữ liệu từ thẻ input
  const handleSearch = e => {
    if (e.key === 'Enter') {
      // Xử lý tìm kiếm với searchQuery
      console.log('Tìm kiếm:', searchQuery);
      setSearchQuery('');
    }
  };

  // Đóng sidebar khi click ngoài
  React.useEffect(() => {
    const handleClickOutside = e => {
      if (
        sidebarOpen &&
        !e.target.closest('.sidebar') &&
        !e.target.closest('.hamburger-btn')
      ) {
        setSidebarOpen(false);
      }
      if (openDropdown && !e.target.closest('.dropdown')) {
        setOpenDropdown(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [sidebarOpen, openDropdown, searchQuery]);

  return (
    <>
      <header className="bg-white border-b border-black text-black font-bold px-6 md:px-36 py-4 flex items-center justify-between relative z-50">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="src/assets/image/logo.jpg"
            alt="Logo"
            className="w-16 h-16 rounded-full"
          />
          <div className="text-lg font-bold"> Nguyễn Hoàng</div>
        </div>

        {/* Hamburger - chỉ hiện trên mobile */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden hamburger-btn p-2"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8">
          {navLink.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search + Icons (luôn hiện) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="p-2 rounded-full border border-black text-sm w-60"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
          {/* User icon + dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="p-2 hover:text-blue-600"
              aria-haspopup="true"
              aria-expanded={openDropdown}
              aria-label="User menu"
            >
              <User />
            </button>
            {openDropdown && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => {
                      setOpenDropdown(false), handleOpenModal('Đăng nhập');
                    }}
                  >
                    Đăng nhập
                  </button>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => {
                      setOpenDropdown(false), handleOpenModal('Đăng ký');
                    }}
                  >
                    Đăng ký
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Giỏ hàng */}
          <Link
            to="/cart"
            className="relative hover:text-blue-600"
            aria-label={`Giỏ hàng có ${count} sản phẩm`}
          >
            <ShoppingBag className="w-6 h-6" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
                {count}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* Sidebar mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4 border-b border-gray-300">
          <button onClick={() => setSidebarOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu links */}
        <nav className="flex flex-col p-4 space-y-4">
          {navLink.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-blue-600 text-lg font-semibold"
              onClick={() => setSidebarOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay đen mờ khi sidebar mở */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-30 z-40"></div>
      )}
      {/* Modal */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-4">{modalContent}</h3>
            {modalContent === 'Đăng nhập' || modalContent === 'Đăng ký' ? (
              <AccountModal />
            ) : (
              <div>
                <p className="text-gray-600 mb-4">
                  Thông tin về {modalContent} sẽ được hiển thị ở đây.
                </p>
                <div className="space-y-2">
                  <p>• Chi tiết về dịch vụ</p>
                  <p>• Hướng dẫn sử dụng</p>
                  <p>• Liên hệ hỗ trợ</p>
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}

export default Navbar;
