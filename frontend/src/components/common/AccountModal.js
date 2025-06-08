import React from 'react';
import { User, Lock, Mail } from 'lucide-react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

function AccountModal() {
  const [modalType, setModalType] = React.useState('login');

  return (
    <div>
      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button
          onClick={() => setModalType('login')}
          className={`flex-1 py-3 px-4 text-center font-medium relative transition-all duration-300 
      before:absolute before:left-1/2 before:bottom-0 before:h-0.5 before:w-0 
      before:transition-all before:duration-700 before:ease-out before:origin-center 
      hover:before:left-0 hover:before:w-full hover:before:bg-red-400
      ${
        modalType === 'login'
          ? 'text-red-600 font-semibold before:w-full before:left-0 before:bg-red-600'
          : 'text-gray-500 hover:text-gray-700'
      }`}
        >
          Đăng nhập
        </button>

        <button
          onClick={() => setModalType('register')}
          className={`flex-1 py-3 px-4 text-center font-medium relative transition-all duration-300 
      before:absolute before:left-1/2 before:bottom-0 before:h-0.5 before:w-0 
      before:transition-all before:duration-700 before:ease-out before:origin-center 
      hover:before:left-0 hover:before:w-full hover:before:bg-red-400
      ${
        modalType === 'register'
          ? 'text-red-600 font-semibold before:w-full before:left-0 before:bg-red-600'
          : 'text-gray-500 hover:text-gray-700'
      }`}
        >
          Đăng ký
        </button>
      </div>

      {/* Content */}
      {modalType === 'login' ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Số điện thoại/Email
            </label>
            <input
              type="text"
              placeholder="Nhập số điện thoại hoặc email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-offset-sky-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mật khẩu
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-offset-sky-600"
              />
            </div>
          </div>

          <div className="text-right">
            <button className="text-sm text-red-600 hover:text-red-700">
              Quên mật khẩu?
            </button>
          </div>

          <button className="w-full bg-gray-400 text-white py-3 rounded-lg font-medium transition-colors hover:bg-gray-500">
            <a href="/login">Đăng nhập</a>
          </button>

          <div className="flex items-center space-x-4 my-4">
            <hr className="flex-1" />
            <span className="text-gray-500 text-sm">Hoặc đăng nhập bằng</span>
            <hr className="flex-1" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <FaFacebook className="w-5 h-5 mr-2 text-blue-600" />
              Facebook
            </button>
            <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <FaGoogle className="w-5 h-5 mr-2 text-red-500" />
              Google
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Bằng việc đăng nhập, bạn đã đồng ý với{' '}
            <a
              href="/dieu-khoan-su-dung"
              className="text-blue-600 hover:text-blue-700"
            >
              Điều Khoản Sử Dụng
            </a>{' '}
            và{' '}
            <a
              href="/chinh-sach-bao-mat-thong-tin-ca-nhan"
              className="text-blue-600 hover:text-blue-700"
            >
              Chính Sách Bảo Mật
            </a>{' '}
            của chúng tôi
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Họ và tên
            </label>
            <input
              type="text"
              placeholder="Nhập họ và tên"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-offset-sky-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Số điện thoại/Email
            </label>
            <input
              type="text"
              placeholder="Nhập số điện thoại hoặc email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-offset-sky-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mật khẩu
            </label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-offset-sky-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              placeholder="Xác nhận mật khẩu"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-offset-sky-600"
            />
          </div>

          <div className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <span className="text-sm text-gray-600">
              Tôi đồng ý với{' '}
              <a
                href="/dieu-khoan-su-dung"
                className="text-blue-600 hover:text-blue-700"
              >
                Điều khoản sử dụng
              </a>{' '}
              và{' '}
              <a
                href="/chinh-sach-bao-mat-thong-tin-ca-nhan"
                className="text-blue-600 hover:text-blue-700"
              >
                Chính sách bảo mật
              </a>
            </span>
          </div>

          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
            <a href="/register">Đăng ký</a>
          </button>
        </div>
      )}
    </div>
  );
}

export default AccountModal;
