

const Card = ({data}) => {
  return (
    <div>
       <div className=" w-48 h-80 bg-amber-50 relative overflow-hidden shadow-lg flex flex-col justify-end p-4 rounded-2xl">
            <img src={data.img}alt="bgimage"  className="absolute inset-0 w-full h-full object-cover z-0"/>
<div className="absolute inset-0 bg-black/40 z-0"></div>

     
      
      <div className="relative z-10 p-5 h-full flex flex-col justify-end gap-3">
       
        <p className="text-white text-sm font-medium">
          {data.desc}
        </p>
        <button className="bg-blue-600 text-white rounded-full py-2 px-4 w-full">
          Satisfied
        </button>
      </div>
          </div>
    </div>
  )
}

export default Card
