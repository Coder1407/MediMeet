import { useContext } from "react"
import { AppContext } from "../context/AppContext"


function MyAppointments() {

  const { doctors } = useContext(AppContext)

  return (
    <div>
      <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b'>My Appointments</p>
      <div>
        {doctors.slice(0,3).map((item, index)=>(
          <div key={index}  className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
            <div>
              <img className='w-36 bg-[#EAEFFF]' src={item.image} alt="" />
            </div>
            <div className='flex-1 text-sm text-[#5E5E5E]'>
              <p className='text-[#262626] text-base font-semibold'>{item.name}</p>
              <p>{item.speciality}</p>
              <p className='text-[#464646] font-medium mt-1'>Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className='text-xs mt-1'><span className='text-sm text-[#3C3C3C] font-medium'>Date & Time: </span> 28th March, 2025 | 12:15 PM</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-end text-sm text-center'>
              <button className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
              <button className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments