import { useState } from "react"
import { calendar, chart, chartFill, chat, controls, file, logo, search, setting, user } from "./assets"
import Items from "./components/items/items"

function App() {
  const [open , setOpen] = useState(false)


  return (
    
    <div className="flex">
      <div className={`${open ? 'w-72' : 'w-[110px]'} flex flex-col gap-10 duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}>
        <img src={controls} onClick={() => setOpen(!open)} className={` absolute cursor-pointer rounded-full -right-3 top-9 border-2 border-dark-purple ${!open && 'rotate-[180deg]'}` } alt="" />

        <div className="flex gap-x-4 items-center">
          <img src={logo} className={` cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} alt="" />
          <h1 className={`text-[white] origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}> <span className="text-[red]">MO</span>devco</h1>
        </div>

        <div className="flex flex-col gap-10 text-gray-400"> 
          <Items img={chartFill} title={  `Dashboart`} open={open} />
          <Items img={chat} title={  `Inbox`} open={open}  />
          <Items img={user} title={  `Acound`} open={open}  />
          <Items img={calendar} title={  `Schedule`} open={open}  />
          <Items img={search} title={  `Search`} open={open}  />
          <Items img={chart} title={  `Analitiks`} open={open}  />
          <Items img={file} title={  `Files`} open={open}  />
          <Items img={setting} title={  `Settings`} open={open}  />
        </div>

      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home page...</h1>
      </div>
    </div>
  )
}

export default App