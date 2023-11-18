import DiaryItem from './DiaryItem';

const DiaryList = ({onEdit, onRemove, diaryList}) => {
  return (
    <div className = "DiaryList">
    <h2>일기 리스트</h2>
    <h4>{diaryList.length}개의 일기가 있습니다.</h4>

    <div>
      {diaryList.map((it)=>(  //각각의 요소
        <DiaryItem key = {it.id} {...it} onEdit = {onEdit} onRemove = {onRemove}/> //별도의 component인 DiaryItem 이용
      ))}
    </div>
  </div>
  );
};

DiaryList.defaultProps = {  //undefined로 전달받을 수 있는 것의 기본값 설정
  diaryList: []
};

export default DiaryList;