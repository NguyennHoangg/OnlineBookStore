import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="container bg-white text-black font-bold p-4 space-y-4">
            <div className=" hidden md:block justify-center text-center border-black border m-5 py-4 bg-gray-400 rounded">
                <h1 className="text-1xl mt-2 text-white">Nhận Thông Tin Khuyến Mãi Từ Chúng Tôi</h1>
                <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="ml-2 p-2 border border-gray-300 rounded"
                    style={{
                        width: '500px',
                        height: '40px',
                    }} />
            </div>
            <div className="m-5 py-4 rounded shadow-xl bg-gray-200 space-x-4">
               <div className="ml-10"
                     style={{width: '30%'}}>
                    <h2 className="text-2xl mb-4">Liên Hệ</h2>
                    <p className="text-gray-700">Địa chỉ: 477/42 Nguyễn Văn Công, Phường 3, Quận Gò Vấp, Thành Phố Hồ Chí Minh</p>
                    <p className="text-gray-700">Điện thoại: 0365271958</p>
                    <p className="text-gray-700">Email: contact@onlinebookstore.com</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                            <FaInstagram size={24} />
                        </a>
               </div>
                </div>

               <div>

               </div>
            </div>
        </footer>
    );
}
export default Footer;