/*
题目2. 可重用的 Dropdown + 多选筛选器
场景：
实现一个下拉菜单，可以多选项目，并在外部显示已选标签（标签可删除）。
选项数据来自 API。
考察点：
自定义 Hook 抽离逻辑（选中/取消逻辑）
受控组件 vs 非受控组件
事件冒泡与点击外部关闭菜单
Tailwind / CSS Modules 样式封装
*/
// reusable dropdown menu component, the option data from API
// control component： send the props option and onchange function
// component only shows UI
import React, { useEffect, useRef, useState } from "react";

// ======== 1. interface type 
// the option state type
interface Option {
  id: number,
  label: string;
}

// the Props type from the parents component
interface DropDownProps {
  featchOpetion: () => Promise<Option[]>; // 如果option是api传入的，则是promise, 要不然[]
  onChange: (selected: Option[]) => void; // 回调父组件 selected是传入参数的名字
} // 传入的 onChange function, 接受一个 selected state 是 Option的形式

// ===== 2. main function, props: featchOpetion and onChange function
const DropDownMenu: React.FC<DropDownProps>= ({
  featchOpetion,
  onChange,
}) => {
  // define state first
  const [option, setOption] = useState<Option[]>([]); // option
  const [selected, setSelected] = useState<Option[]>([]); // user selected mupliple 
  const [isOpen, setIsOpen] = useState<boolean>(false); // dropdown open or not
  const wrapperRef = useRef<HTMLDivElement>(null); // click outside and auto closed

  // ===== beacuse recived option is Promise, need update as array first
  useEffect(() => {
    (async () => {
      const data = await featchOpetion();
      setOption(data);
    })();
  }, [featchOpetion]);

  // =====  click outside, auto closed the dropdown menu
  useEffect(() => {
    // clicked outside function
    const handleClickOutside = (event: MouseEvent) => {
      if(wrapperRef.current && !wrapperRef.current.contains(event.target as Node)){
        setIsOpen(false);
      }
    }

    if(isOpen){
      document.addEventListener("mousedown", handleClickOutside);
    }

    // clear function
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // =====  selected function of dropdown menu
  const toggleSelect = (option: Option) => {
    let newSelected: Option[]; // this is array as Option format object
    if(selected.some((item) => item.id === option.id)){ // has selected it
      newSelected = selected.filter((item) => item.id !== option.id);
    } else{
      newSelected = [...selected, option]; // no selected before
    }
    setSelected(newSelected); 
    onChange(newSelected); // send the final selected to parents component
  }

  // ==== remove selected function
  const removeSelect = (id: number) => {
    const newSelected = selected.filter((item) => item.id !== id);
    setSelected(newSelected);
    onChange(newSelected); // send to parents component
  }

  return <div ref={wrapperRef} style={{width: "250px"}}>
    {/* the tags that selected */}
    <div style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
      {selected.map((item) => (
        <span
          key={item.id}
          style={{ border: "1px solid gray", padding: "2px 6px" }}
        >
          {item.label}
          <button
            style={{ marginLeft: "2px" }}
            onClick={() => removeSelect(item.id)}
          >
            x
          </button>
        </span>
      ))}
    </div>

    {/* the dropdown main area with dropdown menu */}
    <button onClick={() => setIsOpen((prve) => !prve)}>Select Option</button>

    {/* dropdown menu */}
     { isOpen && (
      <ul  style={{ border: "1px solid gray", marginTop: "4px", listStyle: "none", padding: "4px" }}
        >
        {option.map((item) => (
          <li 
            key={item.id}
            onClick={() => toggleSelect(item)}
            style={{
                cursor: "pointer",
                background: selected.some((s) => s.id === item.id) ? "#ddd" : "white",
                padding: "4px",
              }}
          >
            {item.label}
          </li>
        ))}
      </ul>
     )}
  </div>
}

export default DropDownMenu;
