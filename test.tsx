// components/Profile.js
export function Profile({ name, title }) {
  return (
    <div className="profile">
      <div className="avatar">
        {/* 이미지 태그는 실제 사용자의 이미지 URL로 대체해야 합니다. */}
        <img src="/path/to/user/avatar.jpg" alt={`${name}의 프로필 사진`} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <p>{title}</p>
      </div>
      {/* 다른 세부 사항들도 이곳에 추가될 수 있습니다. */}
    </div>
  );
}

// components/Stats.js
export function Stats({ totalBooks, totalHours }) {
  return (
    <div className="stats">
      <div className="stat-item">
        <span>읽은 책의 수</span>
        <strong>{totalBooks}</strong>
      </div>
      <div className="stat-item">
        <span>총 읽은 시간</span>
        <strong>{totalHours}</strong>
      </div>
      {/* 추가적인 통계 정보를 여기에 넣을 수 있습니다. */}
    </div>
  );
}

// components/Calendar.js
export function Calendar() {
  // 여기에 캘린더 로직을 추가합니다.
  return (
    <div className="calendar">
      {/* 날짜들을 렌더링하는 로직 */}
    </div>
  );
}

// pages/index.js
import { Profile } from '../components/Profile';
import { Stats } from '../components/Stats';
import { Calendar } from '../components/Calendar';

export default function Home() {
  return (
    <div className="container">
      <Profile name="Henry Edward" title="The Titan" />
      <Stats totalBooks={500} totalHours={30} />
      <Calendar />
      {/* 추가 컴포넌트나 내용 */}
    </div>
  );
}

// styles.css (이 CSS는 /styles/globals.css에 포함될 수 있습니다)
.container {
  padding: 20px;
}
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar img {
  border-radius: 50%;
}
.info h1 {
  margin: 0;
  font-size: 24px;
}
.info p {
  margin: 0;
  color: gray;
}
.stats {
  display: flex;
  justify-content: space-around;
}
.stat-item {
  text-align: center;
}
.calendar {
  /* 캘린더 스타일링 */
}
