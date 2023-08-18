
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../../footer/Footer';
import Navbar from '../../navbar/Navbar';
import Swal from 'sweetalert2'
import { AuthContext } from '../../../provider/AuthProvider';
import useLocalStorage from '../../../hooks/useLocalStorage';


const BookDetails = () => {
    const {cartRefetch}=useContext(AuthContext);
    const { getValue, setValue } = useLocalStorage();
    const singleBookDetails = useLoaderData();
    const {
        title,
        cover_image,
        author,
        rating,
        page_numbers,
        category,
        published,
        language,
        description,
        real_price,
        author_image,
        about_author
    } = singleBookDetails;

    const [activeTab, setActiveTab] = useState('description');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // add to cart by Tonmoy

    const handleAddToCart = () => {
        const cartItems = getValue("cartItems", []);
        
        
        // Ensure cartItems is initialized as an empty array
    
        if(cartItems){
    
          const find= cartItems.find(a=> a?._id === singleBookDetails?._id)
    
          if(find){
            return   Swal.fire({
              title: 'The book is already added to the cart',
              
              icon: 'error',
              confirmButtonText: 'Ok'
            })
    
    
          }
    
         
        }
        singleBookDetails.real_price2=  singleBookDetails?.real_price
        const updatedCart = [...cartItems, singleBookDetails];
        setValue("cartItems", updatedCart);
        
        Swal.fire({
          position: 'top-end',
      icon: 'success',
      title: 'The book is added to the cart',
      showConfirmButton: false,
      timer: 1500
        })
    
        cartRefetch()
      };

    //   add to cart end

    return (
      
      
        <div>
          <Navbar></Navbar>
            <div className="hero   ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={cover_image} className=" w-[300px] h-[350px] rounded-lg shadow-2xl" />
                    <div className='ms-3'>
                        <h1 className="text-5xl font-bold">{title}</h1>
                       
                        <p className="mt-1"><span className='font-semibold'>Price:</span> ${real_price}</p>
                        <p className="mt-1"><span className='font-semibold'>Rating:</span> {rating}</p>
                        <p className="mt-1"><span className='font-semibold'>Total Page:</span> {page_numbers}</p>
                        <p className="mt-1"><span className='font-semibold'>Category:</span> {category}</p>
                        <p className="mt-1"><span className='font-semibold'>Language:</span> {language}</p>
                        <p className="mt-1"><span className='font-semibold'>Published:</span> {published}</p>
                        
                        <div className='flex justify-center items-center mt-6'>
                            <button className="btn btn-primary mr-6 ">Rent Now</button>
                            <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tabs mt-6 mx-auto w-1/2">
                <button
                    className={`tab tab-lifted ${activeTab === 'description' ? 'tab-active' : ''}`}
                    onClick={() => handleTabChange('description')}
                >
                    Description
                </button>
                <button
                    className={`tab tab-lifted ${activeTab === 'price' ? 'tab-active' : ''}`}
                    onClick={() => handleTabChange('price')}
                >
                    Author
                </button>
            </div>
            
            <div className="tab-content mt-3 mx-auto w-1/2 mb-20">
                {activeTab === 'description' && (
                    <div>
                        {/* <h2>Description</h2> */}
                        <p>{description}</p>
                    </div>
                )}
                {activeTab === 'price' && (
                    <div className='flex'>
                       
                      
                       <img className='w-[250px] h-[250px] rounded-lg shadow-2xl' src={author_image} alt="" />
                      
                      <div className='ml-10'>
                      <h2 className='font-semibold'>{author}</h2>
                        <p>{about_author}</p>
                      </div>
                    </div>
                )}
            </div>
            <Footer></Footer>
        </div>
      
  );
};

export default BookDetails;











