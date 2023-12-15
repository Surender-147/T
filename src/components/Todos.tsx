import Todolist from "./Todolist"
import {addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";

const Todos = () => {
  const [inputValue, setInputValue] = useState("");
  interface TodoItem {
    id: string;
    title: string;
    isCompleted: boolean;
  }
  const [newArray, setNewArray] = useState<TodoItem[]>([]);
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "todos-task"));
    const myArray: TodoItem[] = [];
    querySnapshot.forEach((doc) => {
      myArray.push({ ...doc.data(), id: doc.id } as TodoItem);
    });
    setNewArray(myArray);
  };
  useEffect(() => {
    getData();
  }, []);
  const setData = async () => {
    await addDoc(collection(db, "todos-task"), {
      title: inputValue,
      isCompleted: false,
    });
    getData();
    setInputValue("");
  };


  return (
    <div className='flex items-center min-h-screen '>
       <div className="rounded-lg w-full  bg-white border border-solid border-[#E2E8F0] p-7 max-w-[480px] mx-auto">
       <h1 className="text-[24px] font-[600] text-[#020617] leading-normal text-center mb-7">Todos</h1>
       <p className='text-[12px] font-medium mb-2 text-[#64748B] leading-normal'>Enter Todo</p>
       <div className="flex justify-between mb-[18px] pt-1 pb-1 pr-[6px] pl-6 rounded-lg bg-white border border-solid border-[#E2E8F0]">
        <input   value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                
              }} className='w-[80%] text-[#334155] text-[14px] font-normal leading-normal ' type="text" placeholder='Learn html css'/>
        <button  onClick={setData} className="common_btn">Add</button>
       </div>
       {newArray.map((item, index) => (
              <Todolist
              key={index}
              title={item.title}
              isCompleted={item.isCompleted}
              id={item.id}
              />
            ))}
       </div>
    </div>
  )
}

export default Todos
