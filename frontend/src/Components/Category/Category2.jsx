import image3 from "../../assets/category/macbook.png";
import image4 from "../../assets/category/smartwatch2-removebg-preview.png";
import image5 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";
const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-4 gap-8">
          <div
            className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90
          to-primary/70 text-white rounded-3xl relative h-[320px]
          flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgcolor="bg-white"
                  textcolor="text-primary"
                />
              </div>
            </div>
            <img
              src={image3}
              alt="Earphone"
              className="w-[250px] absolute -right-0 lg:top-[30px]"
            />
          </div>
          <div
            className="py-10 pl-5 bg-gradient-to-br from-black/90
          to-black/70 text-white rounded-3xl relative h-[320px]
          flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgcolor="bg-primary"
                  textcolor="text-white"
                />
              </div>
            </div>
            <img
              src={image5}
              alt="Earphone"
              className="w-[320px] absolute bottom-0"
            />
          </div>
          {/* {second row} */}

          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandYellow/90
          to-brandYellow/90 text-white rounded-3xl relative h-[320px]
          flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgcolor="bg-primary"
                  textcolor="text-brandYellow"
                />
              </div>
            </div>
            <img
              src={image4}
              alt="Earphone"
              className="w-[250px] absolute -right-4 lg:top-[30px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Category2
