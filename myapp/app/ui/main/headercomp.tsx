// components/UserProfile.js
import React from 'react';
import Image from 'next/image';

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative w-full bg-green-400 flex justify-center"> {/* flex와 justify-center로 이미지를 가운데 정렬 */}
        {/* 이미지 업로드 버튼은 절대 위치를 사용하여 이미지 위에 올라오도록 배치 */}
        <input type="file" id="fileInput" className="hidden" />
        <label htmlFor="fileInput" className="absolute bottom-0 mb-[-1rem] /* 이미지 하단에 오도록 마진 조정 */ cursor-pointer">
          {/* 이미지 변경 아이콘을 여기에 배치하거나 아래의 div를 사용하세요 */}
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
            {/* 예를 들어, 여기에 카메라 아이콘을 넣을 수 있습니다. */}
          </div>
        </label>
        <div className="w-32 h-32 rounded-full overflow-hidden relative mt-8"> {/* 이미지 크기와 원형 모양 조정 */}
          <Image src="/book_7.jpg" alt="Profile Image" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="w-full bg-white text-center p-4"> {/* 패딩 추가 */}
        <h1 className="text-2xl font-bold">Henry Edward</h1>
        <p className="text-xl">The Titan</p>
      </div>
    </div>
  );
};

export default UserProfile;
