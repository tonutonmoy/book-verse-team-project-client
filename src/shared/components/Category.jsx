import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";
import Heading from "./heading/Heading";
import UseBooks from "../../hooks/UseBooks";
const Category = () => {
  const {books}=UseBooks();
  console.log(books)
  return (
    <div className="section">
      <Heading title={'Categories'}></Heading>
      <style>
        {`
            .react-tabs__tab--selected{
              background-color: #d71d24;  
              opacity: 90%;
              color: #fff; 
              border-radius: 10px;
              border:0;
              }
              .react-tabs__tab-list{
                border: none;
              }
            `}
      </style>

      <div className="p-10">
        <div className="text-center p-5">
          <Tabs>
            <TabList>
              <Tab>Fiction</Tab>
              <Tab>Comics</Tab>
              <Tab>Mystery & Thriller</Tab>
              <Tab>Romance</Tab>
              <Tab>Science Fiction </Tab>
              <Tab>Biography & Memoir</Tab>
              <Tab>Sports</Tab>
              <Tab> History Science & Nature</Tab>
              <Tab>Art & Photography</Tab>
              <Tab>Cookbooks & Food Travel</Tab>
              <Tab>Travel</Tab>
              <Tab>Business & Economics</Tab>
              <Tab>Children </Tab>
              <Tab>Young Adult </Tab>
              <Tab>Horror</Tab>
              <Tab>Classics</Tab>
            </TabList>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {
                  books.filter(card => card?.category === "Fiction").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)
                }
              </div>
              <button className="button-52 text-white font-bold">See more</button>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
                {books.filter(card => card?.category === "Comics").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
              {books.filter(card => card?.category === "Mystery and Thriller").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
              {books.filter(card => card?.category === "Romance").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
              {books.filter(card => card?.category === "Science Fiction").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
              {books.filter(card => card?.category === "Biography and Memoir").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
              {books.filter(card => card?.category === "Sports").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
              {books.filter(card => card?.category === "History Science and Nature").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
              {books.filter(card => card?.category === "Art and Photography").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
              {books.filter(card => card?.category === "Cookbooks and Food Travel").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
              {books.filter(card => card?.category === "Travel").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
              {books.filter(card => card?.category === "Business and Economics").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
              {books.filter(card => card?.category === "Children").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
              {books.filter(card => card?.category === "Young Adult").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
              {books.filter(card => card?.category === "Horror").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:p-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5 justify-items-center">
              {books.filter(card => card?.category === "Classics").map(card => <CategoryCard key={card._id} data={card} />).slice(0,4)}
              </div>
            </TabPanel>
          </Tabs>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Category;
