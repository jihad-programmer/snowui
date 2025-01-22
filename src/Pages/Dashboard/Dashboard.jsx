import React from 'react'
import MyCard from '../Overview/MyCard'
import { SelectComponent } from '../Overview/Search'
import { Outlet, Link } from "react-router-dom";
import Overview from '../Overview/Overview'

function MyDashboard() {
  return (
    <div className='flex mx-auto my-auto'>
         <section className='w-[212px] border-r-2 border-red-50 invisible md:visible'>
             <img src="../Dashboard Sidebar.png" alt="" />
         </section>

         <section className='w-[892px] h-fit mx-3 my-2'>
            <div className='flex justify-between border-y-2 mx-auto invisible md:visible'>
                      <div className='flex gap-3 items-center'>
                        <img src="../Button.png" alt="" />
                        <img src="../Button (1).png" alt="" />
                        <button>
                        <Link to="/dashboard" className='text-[14px] text-red-400'> Dashboards / </Link>
                        </button>
                        
                        <button>
                        <Link to="/" className='text-[14px]'>Overview </Link>
                        </button>
                      </div>
                      <div className='flex gap-2'>
                        < SelectComponent/>
                        <button>
                        <img src="../Button (2).png" alt="" />
                        </button>
            
                        <button>
                        <img src="../Button (3).png" alt="" />
                        </button>
            
                        <button>
                        <img src="../Button (4).png" alt="" />
                        </button>
            
                        <button>
                        <img src="../Button (5).png" alt="" />
                        </button>
                       
                      </div>
                   </div> 

                <div className='mx-auto md:my-5'>
                    <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
                       <MyCard/>
                       <MyCard/>
                       <MyCard/>
                       <MyCard/>
                          </div>

                          <div className='w-[250px] md:w-fit md:h-fit'>
                            <img src="../Block (4).png" alt="" />
                          </div>

                 <div className='w-[170px] md:w-[440px] md:h-fit'>
                     <div className='flex justify-between items-center gap-3'>
             
                         <img src="../Block (5).png" alt="" />
                         <img src="../Block (6).png" alt="" />
                     </div>
                </div>


                <div className='w-[160px] md:w-fit md:h-fit'>
                            <img src="../Block (7).png" alt="" />
                          </div>

                          <div className='w-[160px] md:w-fit md:h-fit'>
                            <img src="../Block (8).png" alt="" />
                          </div>
                    
                       
                   </div>

                   <div className='w-[160px] md:w-fit md:h-fit'>
                            <img src="../Dashboard Footer.png" alt="" />
                          </div>
         </section>
         <Outlet />
    </div>
  )
}

export default MyDashboard