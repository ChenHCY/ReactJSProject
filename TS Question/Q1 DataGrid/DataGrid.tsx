/* 题目 1. 可筛选、可排序的 DataGrid
1. 场景：实现一个表格组件，支持：
列表数据来自 API
支持按列排序（升/降切换）
支持文本搜索过滤
支持分页
点击行可展开详情

2. 考察点：
组件拆分（表格主体、表头、分页器、搜索栏）
useState / useEffect 管理数据加载与更新
防抖搜索（useCallback + setTimeout）
状态放在父组件 vs 子组件的权衡
性能优化（React.memo、列表虚拟化）
*/

import React, { useEffect, useMemo, useState } from "react";

/**
  { id: 1, name: "Tesla Model 3", type: "EV", year: 2022, details: "Electric sedan" },
  { id: 2, name: "Ford F-150", type: "Truck", year: 2020, details: "Pickup truck" },
  { id: 3, name: "Toyota Corolla", type: "Sedan", year: 2021, details: "Compact car" },
  { id: 4, name: "BMW iX", type: "EV", year: 2023, details: "Electric SUV" }, 
*/

// ============ TypeScript need define the the state type first
// 1. the Car object type
interface Car {
  id: number;
  name: string;
  type: string;
  year: number;
  details: string;
}

// 2. the sortConfig Type
interface sortConfig {
  key: keyof Car | null; // only could be the key of Car object 
  direction: "asc" | "desc"; // get the direction
}

// ============ fecth the data function: could use fetch or axios
// here use the asyc and setTimeout mock api ==> get the data fecth process
const fetchData = async (): Promise<Car[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Tesla Model 3", type: "EV", year: 2022, details: "Electric sedan" },
        { id: 2, name: "Ford F-150", type: "Truck", year: 2020, details: "Pickup truck" },
        { id: 3, name: "Toyota Corolla", type: "Sedan", year: 2021, details: "Compact car" },
        { id: 4, name: "BMW iX", type: "EV", year: 2023, details: "Electric SUV" },
      ]);
    }, 500);
  });
};

//============ main function of DataGrid
const DataGrid: React.FC = () => {
  //====================  define the state first
  const [data, setData] = useState<Car[]>([]); // store the data array
  const [sort, setSort] = useState<sortConfig>({ key: null, direction: "asc" }); // the sort state
  const [search, setSearch] = useState<string>(""); // user input search
  const [currPage, setCurrPage] = useState<number>(1); // the curent page of table
  const [expandRow, setExpandRow] = useState<number | null>(null); // should be a number ==> which id row should be opened
  const pageSize = 2; // each page of table how many rows

  // ==================== loading the data from API or mock function == useEffect
  // beacuse fetch data will return a Promise, so need using async/awiat
  // when prmise done, store the data
  useEffect(() => {
    (async () => {
      const result = await fetchData();
      setData(result);
    })();
  }, []); // only will loading data when page began

  // ==================== sort function logic
  const sortData = useMemo(() => {
    let sortAbleData = [...data];
    if (sort.key) { // if user selected any type sort
      sortAbleData.sort((a, b) => {
        if (a[sort.key!] < b[sort.key!]) {
          return sort.direction === "asc" ? 1 : -1;
        }
        if (a[sort.key!] > b[sort.key!]) {
          return sort.direction === "asc" ? -1 : 1;
        }
        return 0; //if a.key === b.key
      })
    }
    return sortAbleData;
  }, [data, sort]); // only when data or sort happend changet, will change this

  // ==================== search function logic 
  // based on user input search, filter the sortData
  const searchData = useMemo(() => {
    return sortData.filter((item) =>
      item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [sortData, search]);

  // ==================== the page navigation function
  const pageData = useMemo(() => {
    const startIndex = (currPage - 1) * pageSize;
    return searchData.slice(startIndex, startIndex + pageSize);
  }, [searchData, currPage]);

  // handleSort function: change the key and direction
  const handleSort = (key: keyof Car) => {
    setSort((pre) => ({
      key: key,
      direction: pre.key === key && pre.direction === "asc" ? "desc" : "asc",
    }))
  }

  return <div>
    <input
      type="text"
      placeholder="search name"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setCurrPage(1);
      }}
      data-testid="search-input" // used for jest test function library
    />

    {/* this is the table */}
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>Name</th>
          <th onClick={() => handleSort("year")}>Year</th>
          <th onClick={() => handleSort("type")}>Type</th>
        </tr>
      </thead>
      
      <tbody>
        {pageData.map((item) => (
          <React.Fragment key={item.id}>
            <tr onClick={() => setExpandRow(expandRow === item.id ? null : item.id)}>
              <td>{item.name}</td>
              <td>{item.year}</td>
              <td>{item.type}</td>
            </tr>
            { expandRow === item.id && (
              <tr>
                <td>{item.details}</td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>

    <div style={{display: "flex", alignItems: "center", gap: "6px"}}>
       <span onClick={() => setCurrPage((prev) => Math.max(prev - 1, 1))}>{'<-'}</span>
       
       <span onClick={() => setCurrPage((prev) => Math.min(prev + 1, Math.ceil(searchData.length / pageSize)))}>{'->'}</span>
    </div>
  </div>
};

export default DataGrid;
