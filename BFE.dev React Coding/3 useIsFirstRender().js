/* 3. useIsFirstRender()

Create a hook to tell if it is the first render.

function App() {
  const isFirstRender = useIsFirstRender()
  // only true for the first render
  ...
}
*/

import {useRef} from 'react';

export function useIsFirstRender(): boolean {
  // your code here
  //useRef 通常非常适合state value 并在 render 之间持久保存它们
  // 保存跨渲染持续存在的值，而不会在值更改时导致重新渲染
  const isFirstRender = useRef(true);

  //如果是第一次render
  /*React 不会重新渲染 基于 .current 属性更改的组件。*/
  if(isFirstRender.current === true){
    //所以虽然isFirstRender.current的值变成了false, 但不会重新redner
    //维护状态信息的方法，在更新时不会触发组件重新渲染
    isFirstRender.current = false;
    return true;
  }

  return false;
}

// if you want to try your code on the right panel
// remember to export App() component like below

export function App() {
  return <div>your app</div>
}
