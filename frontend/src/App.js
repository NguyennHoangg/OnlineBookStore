import React from 'react';

function Nav(){
  return (
    <div
    style={{
      backgroundColor: 'beige',
      width: '100%',
      height: '80px',
      display: 'flex'
    }}>
      <nav>
        <a style={{color: 'green', fontFamily: 'sans-serif', fontSize: '20px', fontWeight: 'bold'}} href='#'>
          Trang Chủ 
        </a>
      </nav>
    </div>
  )
}

function App() {
  return (
    <Nav />
  );
}

export default App;
