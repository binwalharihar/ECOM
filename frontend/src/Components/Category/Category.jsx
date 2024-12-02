import image1 from "../../assets/category/earphone.png";
import image2 from "../../assets/category/gaming.png";
import image7 from "../../assets/category/watch.png";
import Button from "../Shared/Button";
const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-4 gap-8">
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
              src={image1}
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
              src={image7}
              alt="Earphone"
              className="w-[250px] absolute -right-4 lg:top-[30px] "
            />
          </div>
          {/* {third row} */}
          <div
            className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90
          to-primary/70 text-white rounded-3xl relative h-[320px]
          flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Gaming
                </p>
                <Button
                  text="Browse"
                  bgcolor="bg-white"
                  textcolor="text-primary"
                />
              </div>
            </div>
            <img
              src={image2}
              alt="Earphone"
              className="w-[250px] absolute -right-0 lg:top-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
