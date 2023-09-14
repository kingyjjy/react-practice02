import React from 'react'
import Todo from './Todo'
import Name from './Name'

const App = () => {

  // const addCount = () => {
    
  //   setCount(count+1);
  //   // count += 1;
  //   console.log(count);
  
  return (
     <div>
      {/*{count} <button onClick={addCount}>카운트 증가</button> */}
      <Name title="이름 적기"/>
      <Todo title="오늘 할일"/>

    </div>
  )
  }

export default App
