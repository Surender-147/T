import { TrashIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

interface TodoProps {
   title: string;
   isCompleted: boolean;
   id: string;
 }
const Todolist = ({ title, isCompleted, id }: TodoProps)  => {
    
  return (
    <div className="border border-solid border-[#E2E8F0] border_btm_remove overflow-hidden border_btm_remove ">
       <div id={id} className="bg-white  border_btm_remove">
       <div className="bg-white transition-all ease-in-out hover:bg-slate-100 flex justify-between  py-[10px] px-4 ">
          <p  className={`ff_inter text-black text-sm ${
            isCompleted ? "line-through" : ""
          }`} >{title}</p>
          <div className="flex gap-3">
                 <button>
                 <TrashIcon height={24} width={24} />
                 </button>
              <button className={`ff_inter text-black text-sm ${
            isCompleted ? "!text-green-700" : ""
          }`}>
              <CheckCircleIcon height={24} width={24} />
              </button>
          </div>
       </div>
       </div>
    </div>
  )
}

export default Todolist
