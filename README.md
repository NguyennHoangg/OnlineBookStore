# 📚 Online Book Store

A modern online bookstore web application built with React.js and Node.js.

## 🚀 Features

- 📖 Book Management (CRUD operations)
- 👥 User Management
- 🛒 Shopping Cart & Checkout
- 🔍 Search & Filter Books
- 📱 Responsive Design with Tailwind CSS
- 🔐 Authentication & Authorization

## 🛠️ Tech Stack

### Frontend
- **React.js** 19.1.0 - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - CSS Framework
- **React Router** - Client-side Routing

### Backend
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **SQL Server** - Database
- **Handlebars** - Template Engine

## 📦 Installation

### 1. Clone repository
```bash
git clone https://github.com/NguyennHoangg/OnlineBookStore
cd OnlineBookStore
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### 4. Database Configuration
Create `.env` file in `backend` directory:
```env
DB_SERVER=localhost
DB_DATABASE=OnlineBookStore
DB_USER=your-username
DB_PASSWORD=your-password
PORT=1433
```

### 5. Run the Application

**Backend (Terminal 1):**
```bash
cd backend
npm start
```

**Frontend (Terminal 2):**
```bash
cd frontend
npm start
```

## 📁 Project Structure

```
OnlineBookStore/
├── backend/                 # Node.js/Express API
│   ├── config/             # Database & View Engine config
│   ├── controllers/        # Business logic
│   ├── middlewares/        # Express middlewares
│   ├── routes/            # API routes
│   ├── views/             # Handlebars templates
│   └── app.js             # Entry point
├── frontend/              # React application
│   ├── public/           # Static files
│   ├── src/              # Source code
│   │   ├── components/   # React components
│   │   ├── App.js        # Main component
│   │   └── index.js      # Entry point
│   └── package.json
└── README.md
```

## 🔗 API Endpoints

### Users
- `GET /` - Homepage
- `POST /create-user` - Create new user

### Books (Coming soon)
- `GET /api/books` - Get all books
- `POST /api/books` - Add new book
- `PUT /api/books/:id` - Update book
- `DELETE /api/books/:id` - Delete book

## 🌐 Demo

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:8081

## 📸 Screenshots

### Homepage
![Homepage]()

### Book Catalog
![Books]()

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

- **Your Name** - [GitHub](https://github.com/NguyennHoangg)

## 📞 Contact

- Email: your-email@example.com
- Project Link: [https://github.com/NguyennHoangg/OnlineBookStore.git](https://github.com/NguyennHoangg/OnlineBookStore.git)

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Express.js](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

⭐ If this project helps you, please give it a star!

---

# 📚 Online Book Store (Vietnamese)

Một ứng dụng web bán sách trực tuyến được xây dựng với React.js và Node.js.

## 🚀 Tính năng

- 📖 Quản lý sách (CRUD)
- 👥 Quản lý người dùng
- 🛒 Giỏ hàng và thanh toán
- 🔍 Tìm kiếm và lọc sách
- 📱 Responsive design với Tailwind CSS
- 🔐 Xác thực và phân quyền

## 🛠️ Công nghệ sử dụng

### Frontend
- **React.js** 19.1.0 - UI Library
- **Vite** - Build tool
- **Tailwind CSS** - CSS Framework
- **React Router** - Routing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **SQL Server** - Database
- **Handlebars** - Template engine

## 📦 Cài đặt

### 1. Clone repository
```bash
git clone https://github.com/NguyennHoangg/OnlineBookStore.git
cd OnlineBookStore
```

### 2. Cài đặt Backend
```bash
cd backend
npm install
```

### 3. Cài đặt Frontend
```bash
cd ../frontend
npm install
```

### 4. Cấu hình Database
Tạo file `.env` trong thư mục `backend`:
```env
DB_SERVER=localhost
DB_DATABASE=OnlineBookStore
DB_USER=your-username
DB_PASSWORD=your-password
PORT=1433
```

### 5. Chạy ứng dụng

**Backend (Terminal 1):**
```bash
cd backend
npm start
```

**Frontend (Terminal 2):**
```bash
cd frontend
npm start
```

## 📁 Cấu trúc project

```
OnlineBookStore/
├── backend/                 # Node.js/Express API
│   ├── config/             # Database & View Engine config
│   ├── controllers/        # Business logic
│   ├── middlewares/        # Express middlewares
│   ├── routes/            # API routes
│   ├── views/             # Handlebars templates
│   └── app.js             # Entry point
├── frontend/              # React application
│   ├── public/           # Static files
│   ├── src/              # Source code
│   │   ├── components/   # React components
│   │   ├── App.js        # Main component
│   │   └── index.js      # Entry point
│   └── package.json
└── README.md
```

## 🔗 API Endpoints

### Users
- `GET /` - Trang chủ
- `POST /create-user` - Tạo người dùng mới

### Books (Coming soon)
- `GET /api/books` - Lấy danh sách sách
- `POST /api/books` - Thêm sách mới
- `PUT /api/books/:id` - Cập nhật sách
- `DELETE /api/books/:id` - Xóa sách

## 🌐 Demo

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:8081

## 🤝 Đóng góp

1. Fork project
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 👨‍💻 Tác giả

- - [GitHub](https://github.com/NguyennHoangg)

## 📞 Liên hệ

- Email: your-email@example.com
- Project Link: [https://github.com/NguyennHoangg/OnlineBookStore.git](https://github.com/NguyennHoangg/OnlineBookStore.git)

---

⭐ Nếu project này hữu ích, hãy cho một star nhé!