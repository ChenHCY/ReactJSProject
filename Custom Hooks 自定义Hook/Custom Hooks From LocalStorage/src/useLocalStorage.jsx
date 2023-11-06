import { useState, useEffect } from 'react';

// 自定义Hook，用于获取、设置和清除localStorage中的数据
function useLocalStorage(key, initialValue) {
    // 从localStorage中获取初始值，如果不存在则使用传入的initialValue
    const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    // 检查是否能找到这个key值对应的storedValue
    // JSON.parse：解析 JSON（JavaScript Object Notation）格式的文本，将其转换为 JavaScript 对象
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  // 当组件加载和value变化时，更新localStorage中的数据
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]); // ComponentDidUpdate: 当key, value发生改变的时候，进行重新渲染

  // 清除localStorage中的数据
  const clearLocalStorage = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, setValue, clearLocalStorage];
}

export default useLocalStorage;