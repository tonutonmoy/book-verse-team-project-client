
import './BookCard.css'


const BookCard = () => {
    return (
        <div className=" w-[90%] mx-auto py-[50px] duration-[2s] ">

            {/* card 1 start */}
            <div className="group book-card-container relative block bg-black  h-[500px] w-[300px] 
            overflow-hidden  duration-[2s]
            
             " >
                <img
                    alt="Developer"
                    src="https://pictures.abebooks.com/inventory/22769705644.jpg"
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-30   duration-[1s] book-card-img "

                />

                <div className="relative p-4 sm:p-6 lg:p-8   ">
                    {/* <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                        Developer
                    </p>

                    <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p> */}

                    <div className="mt-32 sm:mt-48 lg:mt-[50%]   ">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100  duration-[2s]  "
                        >
                            <h3 className="text-[20px] text-white my-5 ">
                                Name:  By The Book  lorem

                            </h3>
                            <p className="text-[18px] text-white my-5 ">
                                Author:  Jasmine Juillory


                            </p>

                            <p className="text-[18px] text-white my-5">
                                Price:  $45
                            </p>


                            <div className=' flex items-center  mt-5 pb-[100px]'>
                                <p className="text-[18px] text-white mr-2">

                                    Rating:
                                </p>
                                <div>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>


                            </div>


                            <section className='flex gap-3 w-full  absolute bottom-0   '>

                                <div>
                                    <button
                                        className="primary-button  "
                                    >
                                        Rent Now
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className="primary-button  "
                                    >
                                        Buy Now
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className="primary-button 

                                    
                                    
                                    "
                                    >
                                        View Details
                                    </button>
                                </div>




                            </section>


                        </div>
                    </div>
                </div>
            </div>

            {/* card 1 end */}


            <div className='mt-[50px] text-center'>

                {/* Button 1 */}

                <button className="primary-button hover:scale-105  " type="button">HOVER ME</button>
                {/* Button end 1*/}
            </div>

        </div>
    );
};

export default BookCard;