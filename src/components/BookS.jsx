import { useEffect, useState } from 'react';
import banner from '../../public/images/banner.jpg';
function BookS() {
    const [books, setBooks] = useState([]);
    console.log(books);
    useEffect(()=>{
        fetch('bookData.json').then((res)=>res.json().then((data)=>setBooks(data)));
    },[])
    return (
        
        <div>
            <div className="w-full max-w-[1250px] m-auto py-4 border-b-2 border-gray-200 "  >
                <div className="flex justify-center md:justify-between lg:justify-between ">
                    <div>
                        <h1 className="text-4xl font-bold">SHOPPING</h1>
                    </div>
                    <div className="hidden md:block lg:block">
                        <a className="mx-4" href="#">Home</a>
                        <a className="mx-4" href="#">Products</a>
                        <a className="mx-4" href="#">Services</a>
                        <a className="mx-4" href="#">Pricing</a>
                    </div>
                    <div className='hidden md:block lg:block'> 
                        <a className="mx-4 text-3xl" href=""><i className="fa-solid fa-magnifying-glass"></i></a>
                        <a className="mx-4 text-3xl" href=""><i className="fa-solid fa-cart-shopping"></i></a>
                        <a className="mx-4 text-3xl" href=""><i className="fa-regular fa-user"></i></a>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-[1250px] mx-auto '>
                <img className='w-full' src={banner} alt="" />
                 <br />
                 <br />
                 <h1 className='whitespace-nowrap text-[22px] md:text-[24px] lg:text-[32px] animate-[marquee_5s_linear_infinite]'>Welcome you come to our website Store Book Quoc Nam No.1 📚🚀 </h1>
            </div>
                <div className='text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-[1250px] mx-auto mt-[50px] mb-[50px]  gap-4' >
                        {books.map((book)=>(
                    <div className=' flex flex-col px-[16px] bg-gray-200 ' key={book.id}>
                        <img className='w-full  mt-[20px] max-h-[500px] h-full' src={book.image} alt="" />
                        <h4 className='font-bold text-[18px] my-[10px] overflow-hidden'>{book.title}</h4>
                        <h4 className='flex-grow'>{book.description}</h4>
                        <button className='bg-black text-white p-[10px] rounded-l  my-[10px] hover:bg-white hover:text-black w-full'>Mua ngay </button>
                     </div>
                        ))}
                </div>
                
        </div>
        
    )
}
export default BookS;