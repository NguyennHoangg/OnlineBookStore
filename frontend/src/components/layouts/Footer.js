import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from '../common/Modal';
import AccountModal from '../common/AccountModal';

const servicesLink = [{
  name: 'Điều Khoản Sử Dụng',
  path: '/dieu-khoan-su-dung',
}, {
  name: 'Chính Sách Bảo Mật Thông Tin Cá Nhân',
  path: '/chinh-sach-bao-mat-thong-tin-ca-nhan',
}, {
  name: 'Chính Sách Bảo Mật Thanh Toán',
  path: '/chinh-sach-bao-mat-thanh-toan',
}, {
  name: 'Giới Thiệu Về Chúng Tôi',
  path: '/gioi-thieu-ve-chung-toi',
}];

const supportsLink = [{
  name: 'Chính sách đổi-trả-hoàn tiền',
  path: '/chinh-sach-doi-tra-hoan-tien'
}, {
  name: 'Chính sách vận chuyển',
  path: '/chinh-sach-van-chuyen'
}, {
  name: 'Chính sách bảo hành',
  path: '/chinh-sach-bao-hanh'
}];

const accountLink = [{
  name: 'Tài khoản của tôi',
  path: '/tai-khoan-cua-toi'
}, {
  name: 'Đơn hàng của tôi',
  path: '/don-hang-cua-toi'
}];

function Footer() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('');

  const handleOpenModal = (linkName) => {
    setModalContent(linkName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <>
      <footer className="container bg-white text-black font-bold p-4 space-y-4">
        <div className="hidden md:block justify-center text-center border-black border m-5 py-4 bg-gray-400 rounded">
          <div className='flex justify-center text-center items-center'>
            <h1 className="text-1xl mt-2 text-white">
              Nhận Thông Tin Khuyến Mãi Từ Chúng Tôi
            </h1>
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="ml-2 p-2 border border-gray-300 rounded"
              style={{
                width: '500px',
                height: '40px',
              }}
            />
            <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Đăng ký
            </button>
          </div>
        </div>

        <div className="m-5 py-4 flex rounded shadow-xl bg-gray-200 space-x-20">
          <div className="ml-10" style={{ width: '30%' }}>
            <h2 className="text-2xl mb-4">Liên Hệ</h2>
            <p className="text-gray-700">
              Địa chỉ: 477/42 Nguyễn Văn Công, Phường 3, Quận Gò Vấp, Thành Phố Hồ Chí Minh
            </p>
            <p className="text-gray-700">Điện thoại: 0365271958</p>
            <p className="text-gray-700">Email: contact@onlinebookstore.com</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Dịch vụ */}
          <div>
            <h2 className="text-2xl mb-4">Dịch Vụ</h2>
            {servicesLink.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="block text-gray-700 hover:text-blue-600 mb-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Hỗ trợ */}
          <div>
            <h2 className="text-2xl mb-4">Hỗ Trợ</h2>
            {supportsLink.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="block text-gray-700 hover:text-blue-600 mb-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Tài khoản */}
          <div>
            <h2 className="text-2xl mb-4">Tài Khoản</h2>
            {accountLink.map((link) => (
              <button
                key={link.name}
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModal(link.name);
                }}
                className="block text-left text-gray-700 hover:text-blue-600 mb-2 transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 py-4 border-t">
          <p>&copy; 2024 Online Book Store. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-4">{modalContent}</h3>
            {modalContent === 'Tài khoản của tôi' ? (
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

export default Footer;
