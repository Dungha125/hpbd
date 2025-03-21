import React from "react";

const BirthdayCard = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center bg-cover bg-center" 
         style={{ backgroundImage: "url('/anh.png')" }}>
      
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      
      <div className="relative bg-white/95 p-8 rounded-3xl shadow-2xl text-center max-w-md border-4 border-pink-300 animate-fadeIn">
        <img 
          src="/anh.png" 
          alt="Birthday" 
          className="w-70 mx-auto rounded-full border-4 border-pink-400 shadow-md" 
        />
        <h1 className="text-3xl font-bold text-pink-500 drop-shadow-md mt-4">Chúc Mừng Sinh Nhật! 🎂</h1>
        <p className="text-lg text-gray-800 mt-3 font-medium">
        Chúc bạn có một ngày tràn ngập niềm vui, hạnh phúc và những điều tốt đẹp nhất! 🎉💖
          Mong rằng mỗi khoảnh khắc trong ngày hôm nay đều đáng nhớ và tuyệt vời. 
          Chúc bạn luôn cười tươi, mạnh khỏe và gặp nhiều may mắn trong cuộc sống! 💕✨
        </p>
      </div>
    </div>
  );
};

export default BirthdayCard;
