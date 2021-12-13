import charity from "../assets/charity.svg";
import restaurant from "../assets/restaurant.svg";
import home from "../assets/home.svg";
import prof from "../assets/prof.svg";
import retail from "../assets/retail.svg";
import ironchef from "../assets/ironchef.svg";

function Serve() {
  return (
    <div className="container mx-auto p-6">
      <p className="text-5xl font-bold">Who We Serve</p>
      <div className="flex justify-around flex-wrap	items-center mt-4 mb-6">
        <div className="p-6 rounded flex flex-col justify-items-center items-center w-48">
          <img src={charity} alt="charities" className="h-20 mb-4" />
          <p className="text-xl font-bold">Charities</p>
        </div>
        <div className="p-6 rounded flex flex-col justify-items-center items-center w-48">
          <img src={restaurant} alt="restaurants" className="h-20 mb-4" />
          <p className="text-xl font-bold">Restaurants</p>
        </div>
        <div className="p-6 rounded flex flex-col justify-items-center items-center w-48">
          <img src={home} alt="home services" className="h-20 mb-4" />
          <p className="text-xl font-bold">Home Services</p>
        </div>
        <div className="p-6 rounded flex flex-col justify-items-center items-center w-48">
          <img src={prof} alt="prof services" className="h-20 mb-4" />
          <p className="text-xl font-bold">Prof. Services</p>
        </div>
        <div className="p-6 rounded flex flex-col justify-items-center items-center w-48">
          <img src={retail} alt="retail stores" className="h-20 mb-4" />
          <p className="text-xl font-bold">Retail Stores</p>
        </div>
      </div>
      <div className="rounded bg-blue-200 flex justify-center items-center p-6">
        <img src={ironchef} alt="iron chef" className="mr-4 sm:h-20 h-10" />
        <div className="flex flex-col ml-4">
          <p className="text-xl">
            Yesleaf automates and simplifies my daily business processes saving
            me precious time and resources that I can now allocate on more
            productive activities 👍
          </p>
          <p className="italic">
            Joey, Manager @ Iron Chef Japanese Steakhouse
          </p>
        </div>
      </div>
    </div>
  );
}

export default Serve;
