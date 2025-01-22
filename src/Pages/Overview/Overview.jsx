import React from 'react'
import { SelectComponent } from './Search'
import { Card, Dropdown } from 'keep-react'
import { SelectComponent2 } from './Dropdown'
import MyCard from './MyCard'
import { Link } from 'react-router-dom'



function Overview() {
  return (
     <>
    <div className='flex mx-auto my-auto'>
     <section className='w-[212px] border-r-2 border-red-50 invisible md:visible'>

        <div className='mx-auto my-auto p-4 grid gap-y-2.5'>
            <div className='flex items-center'>
            <img src="../Icon.png" alt="" />
             <p className='text-[14px]'>ByeWind</p>
            </div>

            <div className='flex items-center gap-3'>
                <p className='text-[14px] text-red-400'>Favorites</p>
                <p className='text-[14px] text-red-400'>Recently</p>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src="../Dot.png" alt="" />
                    <p className='text-[14px]'>Overview</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="../Dot.png" alt="" />
                    <p className='text-[14px]'>projects</p>
                </div> 

            </div>
        </div>

        <div className='mx-auto my-auto p-4 grid gap-y-2'>
            <p className='text-[14px] text-red-400'>Dashboards</p>
            <div className='flex items-center gap-1 px-3'>
                <img src="../Icon (1).png" alt="" />
                <p className='text-[14px]'>Overview</p>
            </div>
            <div className='flex items-center gap-1 px-3'>
                <img src="../ArrowLineRight-s.png" alt="" />
                <img src="../Icon (2).png" alt="" />
                <p className='text-[14px]'>eCommerce</p>
            </div>
            <div className='flex items-center gap-1 px-3'>
                <img src="../ArrowLineRight-s.png" alt="" />
                <img src="../Icon (3).png" alt="" />
                <p className='text-[14px]'>projects</p>
            </div>
        </div>

        <div className='mx-auto my-auto p-4 grid gap-y-2'>
            <p className='text-[14px] text-red-400'>Pages</p>
            <div className='flex items-center gap-1 px-3'>
                <img src="../ArrowLineRight-s.png" alt="" />
                <img src="../Icon (5).png" alt="" />
                <p className='text-[14px]'>User Profile</p>

            </div>

            <div className='flex items-center gap-1 px-8 py-1 '>
                
                <p className='text-[14px]'>Overview</p>

            </div>

            <div className='flex items-center gap-1 px-8  py-1'>
                
                <p className='text-[14px]'>Projects</p>

            </div>

            <div className='flex items-center gap-1 px-8  py-1'>
                
                <p className='text-[14px]'>Campaigns</p>

            </div>

            <div className='flex items-center gap-1 px-8  py-1'>
                
                <p className='text-[14px]'>Documents</p>

            </div>

            
            <div className='flex items-center gap-1 px-8  py-1'>
                
                <p className='text-[14px]'>Followers</p>

            </div>

            <div className='flex items-center gap-1 py-1'>
                <img src="../ArrowLineRight-s.png" alt="" />
                <img src="../Icon (6).png" alt="" />
                <p className='text-[14px]'>Account</p>
            </div>
            
            <div className='flex items-center gap-1 py-1'>
                <img src="../ArrowLineRight-s.png" alt="" />
                <img src="../UsersThree.png" alt="" />
                <p className='text-[14px]'>Corporate</p>
            </div>

            <div className='flex items-center gap-1 py-1'>
                <img src="../ArrowLineRight-s.png" alt="" />
                <img src="../Icon (8).png" alt="" />
                <p className='text-[14px]'>Blog</p>
            </div>

            <div className='flex items-center gap-1 py-1'>
                <img src="../ArrowLineRight-s.png" alt="" />
                <img src="../Icon (9).png" alt="" />
                <p className='text-[14px]'>Social</p>
            </div>
            
        </div>

 
  <div className='mx-5 my-10'>
    <img src="../SnowUI Logo.png" alt="" />
  </div>

     </section>  
      {/* Sidenav end */}
       
       {/* Navbar + Main Content */}
     <section className='w-[892px] mx-auto my-2'>
        {/* Navbar  */}
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
       {/* Navbar end */}

       {/* Main section */}
         <div className='mx-auto md:my-5'>
            <div className='flex justify-between items-center'>
                <p className='text-[14px] font-bold'>Overview</p>
              <SelectComponent2/>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
               <MyCard/>
               <MyCard/>
               <MyCard/>
               <MyCard/>
            </div>
            <div className='w-[160px] md:w-fit md:h-fit'>
                <div className='flex justify-between items-center gap-3'>
             
                <img src="../Block.png" alt="" />
                <img src="../Block (1).png" alt="" />
                </div>
            </div>
            <div className='w-[170px] md:w-fit md:h-fit'>
            <div className='flex justify-between items-center gap-3'>
             
             <img src="../Block (2).png" alt="" />
             <img src="../Block (3).png" alt="" />
             </div>
            </div>
         </div>
     </section>

     <section className='w-[230px]'>
         <div>
            <img src="../Dashboard Right Bar.png" alt="" />
         </div>
     </section>
   
    </div>
 </>
  )
}

export default Overview