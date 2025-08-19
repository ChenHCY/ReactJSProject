import React, { useCallback, useState } from 'react'
import './App.css'
import DropDownMenu from './DropDownMenu'

// interfact the vehicle object first ==> data format
interface Vehicle {
  id: number,
  model: string,
  speed: number,
}

// the mock data array
const mockVehicles: Vehicle[] = [
  { id: 1, model: "Sedan", speed: 50 },
  { id: 2, model: "SUV", speed: 40 },
  { id: 3, model: "Truck", speed: 30 },
  { id: 4, model: "SUV", speed: 20 },
  { id: 5, model: "Sedan", speed: 60 },
]

// main area function
function App() {
  const [filterModel, setFilterModel] = useState<string[]>([]); // user selected model through drodown menu ==> inside is model

  // get the fetch data to created option of dropdownb menu
  // bacuse data maybe have duplicate, so need use new set to remove duplicate
  // useCallback was avoid the child component always render
  // 有没有 async 取决于 有没有异步 也就是call 不 call api， 有aync 后面就要有 await
  const featchOpetion = useCallback(async () => {
    const uniqueModels = Array.from(new Set(mockVehicles.map(v => v.model))); // only need model
    return uniqueModels.map((v, index) => ({ id: index, label: v })); // map 要写 （）
  }, []); // only when began of page, loading data once
  
  // 等价于：
  const fetchVehicleModels = async (): Promise<{id: number; label: string}[]> => {
    const uniqueModels = Array.from(new Set(mockVehicles.map(v => v.model)));
    return uniqueModels.map((m, idx) => ({ id: idx, label: m }));
  };

  // the onchange function: based on user selected
  // props: selected, selected is an array
  const handleModelChange = (selected: { id: number, label: string }[]) => {
    setFilterModel(selected.map(item => item.label));
  }

  // based on user selected filter the main data
  const filterData = filterModel.length > 0 ? mockVehicles.filter((item) => filterModel.includes(item.model)) : mockVehicles;

  return (
    <div className="app">
      <DropDownMenu featchOpetion={featchOpetion} onChange={handleModelChange} />
      <ul data-testid="vehicle-list">
        {filterData.map((item) => (
          <li key={item.id}>
            {item.model} - speed: {item.speed} km/h
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
