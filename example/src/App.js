import React from 'react';
import 'react-ifloop/dist/index.css';
import { ForLoop, ElseCondition, ElseIfCondition, IfCondition, IfMultiCondition, IfElseCondition } from 'react-ifloop/dist/index';

const items = [{ name: "ahmed" }, { name: "mohamed" }, { name: "gamal" }];
const showInfo = false;
const App = () => {
  return <div style={{ 'text-align': 'center' }}>
    <ForLoop items={items} forEachItem={(item, index) => {
      return <p>{item.name}</p>
    }}>

    </ForLoop>
    <IfMultiCondition>
      <IfCondition condition={showInfo}>
        if condition
      </IfCondition>
      <ElseIfCondition condition={!showInfo}>
        else if condition
      </ElseIfCondition>
      <ElseCondition>
        else condition
      </ElseCondition>
    </IfMultiCondition>
    <IfCondition condition={showInfo}>
      if only condition
    </IfCondition>
    <IfElseCondition condition={showInfo}>
      <p>if condition</p>
      <p>else condition</p>
    </IfElseCondition>
  </div>
}

export default App
