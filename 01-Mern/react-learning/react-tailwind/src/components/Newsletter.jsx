/* The code you provided is a React functional component named `Newsletter`. This component is
responsible for rendering a newsletter subscription form on a web page. Here's a breakdown of what
the code is doing: */


const Newsletter = () => {
  return (
    <div>
       
    <div className='flex justify-center items-center p-5'>
      <div>
        <div className='h-62.5 w-150 bg-white border-2 flex justify-center items-center' >
          <div className='card h-56.25 w-143.75 bg-white border '>


            <div className='top bg-linear-to-t from-sky-500 to-indigo-500 h-10 flex justify-center items-center font-bold text-white '>

              <h2>News You Can Trust.</h2>

            </div>
            <div className='flex text-center items-center flex-col  p-4'>
              <div  >
                <h4 className='font-semibold'>Stay up to date with the latest!</h4>
                <p> Subscribe to our newsletter for the latest news straight into your inbox</p>
              </div>
              <div className='flex flex-col p-4 items-center justify-center '>
                <input className='border-2 text-center rounded-md w-full  px-2 mb-2'

                  type="email"
                  placeholder='You@example.com'

                />
                <button className='bg-blue-500 text-white rounded-lg w-full font-semibold hover:bg-blue-600 transition mb-2 '>Subscribe Now</button>
                <span className='p-1'>We Value Your Privacy </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Newsletter
