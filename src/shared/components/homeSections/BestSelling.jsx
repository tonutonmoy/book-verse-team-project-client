import Heading from "../heading/Heading";
import BookCard from "../BookCard/BookCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setBestSelling } from '../../../pages/payment/redux/BestSellingSlice';
import ProductCard from "../productCard/ProductCard";


const BestSelling = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://book-verse-server-phi.vercel.app/bestSelling')
      .then(res => res.json())
      .then(data => {
        dispatch(setBestSelling({ bestSelling: data }));
      })
      .catch(error => console.log(error));
  }, [dispatch]);

  const bestSellingData = useSelector(state => state.bestSelling.bestSelling);

  

  // console.log(books,'tonu')
  return (
    <div className="section ">
      <div className="flex justify-between items-center">
        <Heading title={"Best Selling"}></Heading>
        <Link to='/allBestSelling' className="btn-primary ">See More</Link>
      </div>
      <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-10 content-center py-5 place-items-center">
        {bestSellingData?.slice(0, 10).map((book) => (
          <ProductCard key={book._id} data={book} text='bestSelling'></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
