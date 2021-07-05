# react-ifloop

> React Declarative [IF Conditions , Loop] Statements

[![NPM](https://img.shields.io/npm/v/react-ifloop.svg)](https://www.npmjs.com/package/react-ifloop) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-ifloop
```

## Use Cases

```
instead of writing imperative code to show ui element if condition met
like this {showData && <p>show data</p>} , i created this plugin to do it in imperative way.
<IfCondition condition={showData}>
  <p>show data</p>
</IfCondition>
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-ifloop'
import 'react-ifloop/dist/index.css'
import { ElseCondition, ElseIfCondition, IfCondition, IfElseCondition, IfMultiCondition } from "./IfConditions";
import ForLoop from "./ForLoop";

class Example extends Component {
  state = { showUser: true, status: "ACTIVE", items: ["Item1", "Item2", "Item3", "Item4"] }

  render() {
    return <div>
      <IfCondition condition={this.state.showUser}>
        <p>show user</p>
      </IfCondition>
      <IfElseCondition condition={showUser}>
        <p>show user</p>
        <p>hide user</p>
      </IfElseCondition>
      <IfMultiCondition>
        <IfCondition condition={this.state.status === "ACTIVE"}>
          <p>User is Active</p>
        </IfCondition>
        <ElseIfCondition condition={this.state.status === "NOT_ACTIVE"}>
          <p>User not Active</p>
        </ElseIfCondition>
        <ElseCondition>
          <p>user is disabled</p>
        </ElseCondition>
      </IfMultiCondition>
      <hr />
      <ForLoop items={this.state.items} forEachItem={(item, index) => {
        <IfElseCondition condition={index % 2 == 0}>
          <p>{item} is event</p>
          <p>{item} is odd</p>
        </IfElseCondition>
      }} ifNoItems={<p>No Items Found</p>}>
      </ForLoop>
    </div>
  }
}
```

- IfElseCondition show first element if condition met otherwise show second element.
- IfMultiCondition start loop in children conditions components and if one of them match render it's child and stop rendering, if none of conditions match it looking for
  ElseCondition if found it render it's child otherwise no child will be rendered in screen.
- ForLoop component take items to loop in and call forEachItem function sending item and index of item and render return child from this function,
and you can also merge IfCondition & Other components.

## License

MIT © [ahmedthinkdifferent](https://github.com/ahmedthinkdifferent)
