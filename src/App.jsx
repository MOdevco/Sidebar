import { useState } from "react"

function App() {
  const [open , setOpen] = useState(false)
  const Menus = [
    {title: "Dashboard", src: 'Chart_fill'},
    {title: "Inbox", src: 'Chat'},
    {title: "Accounts", src: 'User' , gap: true},
    {title: "Schedule", src: 'Calendar'},
    {title: "Search", src: 'Search'},
    {title: "Analitiks", src: 'Chart'},
    {title: "Files", src: 'Folder' , gap: true},
    {title: "Settings", src: 'Setting'},
  ]
  return (
    
    <div className="flex">
      <div className={`${open ? 'w-72' : 'w-[110px]'} duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}>
        <img src="./src/assets/control.png" onClick={() => setOpen(!open)} className={` absolute cursor-pointer rounded-full -right-3 top-9 border-2 border-dark-purple ${!open && 'rotate-[180deg]'}` } alt="" />

        <div className="flex gap-x-4 items-center">
          <img src="./src/assets/logo.png" className={` cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} alt="" />
          <h1 className={`text-[white] origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}> <span className="text-[red]">MO</span>devco</h1>
        </div>
        <ul className=" pt-6">
          {Menus.map((manu , i) => (
            <li key={i} className={` ${manu.gap ? "mt-9" : "mt-2"} text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer hover:bg-light-white rounded-[10px] p-2`} >
              <img src={`./src/assets/${manu.src}.png`} alt="" />
              <span className={`${!open && 'scale-0'} duration-300 `}>{manu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home page</h1>
      </div>
    </div>
  )
}

export default App