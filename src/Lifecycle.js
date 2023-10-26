import React, {useEffect, useState} from 'react';

const UnmountTest = () => {
  useEffect(()=>{
    console.log("Mount!");
    return () => {
      //Unmount 시점에 실행되게 됨
      console.log("Unmount!");
    };
  }, []);

  return <div>Unmount Testing Component</div>
}

const Lifecycle = () =>{
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style = {{padding: 20}}>
      <button onClick = {toggle}>ON/OFF</button>
      {isVisible && <UnmountTest/>} 
    </div> //isVisible이 True일 때 unmounttest가 보이게 됨
  );
};

export default Lifecycle;