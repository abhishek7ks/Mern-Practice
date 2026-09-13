import { MoveUpRight, Phone } from "lucide-react";
import Card from "./components/Card";
import {cardData} from './components/Data'



const App = () => {
  return (
    <div className="min-h-screen bg-slate-500 flex flex-col justify-center items-center p-10">
      {/* Header Row */}

      <div className="flex flex-col border-2  w-200 ">
        <div className="flex justify-start px-5 py-5 items-center ">
          <div className="flex justify-between    py-10 t">
            <img
              src="data:image/jpeg;base64,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"
              alt="Header Img"
              className="h-30 w-30 rounded-full"
            />

            <div className="px-10 py-5 flex items-center flex-col">
              <h1 className="text-4xl font-bold uppercase font-mono">
                {" "}
                Presentation Design{" "}
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700">
                My Instagram Profile @Abhishek.{" "}
              </h2>
            </div>
          </div>
        </div>

        <div className=" py-5 px-5 ">
          <div className="  flex justify-between items-center">
            <h2 className="rounded-full bg-black text-white px-4 py-1 uppercase font-semibold">
              Target Audience
            </h2>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <p className="text-gray-700 uppercase font-semibold">
                
                Digital Banking Platform
              </p>
            </div>
          </div>


<div className="grid grid-cols-[1fr_2fr] gap-10 py-5">
          <div className=" flex flex-col  py-5">
            <h1 className="font-bold text-2xl">Perspective Customer Segmentation </h1>
            <p className="py-5 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam at necessitatibus illum. Reiciendis numquam vitae repudiandae, aperiam veritatis magni ipsum quas perferendis laborum recusandae, architecto hic, non minus officia reprehenderit!
            </p>
            <MoveUpRight size={32} />
          </div>

<div className="flex gap-4 overflow-x-auto pb-4">
{cardData.map((item) => (

<Card key={item.id} data={item}/>

))}
         
         </div>
         

</div>


        </div>
      </div>
    </div>
  );
};

export default App;
