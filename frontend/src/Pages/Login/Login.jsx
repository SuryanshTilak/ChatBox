import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
      backdrop-filter backdrop-blur-lg bg-opacity-0'>

        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
          <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" className='w-full input input-bordered h-10'  placeholder='Enter Password'/>
          </div>

          <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 inline-block mt-2'>
            Don't have an Acoount
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-4'>Login</button>
          </div>

        </form>
      </div>
    </div>
  )
}


//STARTER CODE FOR THIS FILE
// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
//       backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Login
//           <span className='text-blue-500'> ChatApp</span>
//         </h1>

//         <form>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>
//           </div>

//           <div>
//             <label className='label'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input type="password" className='w-full input input-bordered h-10'  placeholder='Enter Password'/>
//           </div>

//           <a href="#" className='text-sm hover:underline hover:text-blue-600 inline-block mt-2'>
//             Don't have an Acoount
//           </a>

//           <div>
//             <button className='btn btn-block btn-sm mt-2'>Login</button>
//           </div>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login



