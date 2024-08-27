import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaBoxes, FaUser, FaArrowRight } from "react-icons/fa";
import { IoShirtSharp } from "react-icons/io5";
import { useWindowSize } from "react-use";
import { RxCross1 } from "react-icons/rx";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom";

const Dash_Users = () => {
  const { width } = useWindowSize();
  const [sideBarOpen, setsideBarOpen] = useState(false);
  return (
    <div className="h-[100vh] ">
      {/* {width < 1200 && ( */}
      {!sideBarOpen && (
        <div className="w-full h-[65px] 1200px:hidden bg-[#081028] border-b-2 border-black shadow-2xl flex justify-between items-center p-2">
          <IoReorderThree
            onClick={() => setsideBarOpen(true)}
            className="text-[40px] cursor-pointer hover:scale-105 text-white"
          />
        </div>
      )}
      {/* )} */}

      {width < 1200 && sideBarOpen && (
        <div className="min-w-[370px] z-40 absolute h-[100vh] top-0 bg-[#081028] left-0 w-[370px]  overflow-y-scroll hidden-scrollbar  border-r-4 border-slate-800 p-6">
          <RxCross1
            onClick={() => setsideBarOpen(false)}
            color="white"
            className="ml-auto text-2xl hover:scale-105 cursor-pointer"
          />
          <div className="font-bold text-2xl text-white flex items-center gap-5">
            <img
              className="w-8 h-8 "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABpCAYAAAA5gg06AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU1SURBVHgB7Z3NbhtVFMf/d+xILM2GbV0k1iRSQSA1rbNgTd8A9wFQ0hcgyRNAFqzj7JHaPkGmHwgokZIHQKr7BEQs8cflnGs7SvyViT1z5wz6/yQ7djxdND+fc8/9mHsBYh4HS5z6BurYxRBtWMGhO351IY8P8v4CfXnsuEtEwpak1/5YntuoAl5EOaTyeIltl6JA7EjSKKrhb1STrvwlOxJhJxJhXeSMJUlNkfQe1aeDAQ7zlJWA5E07fNk0desXLwcoqThU1jne+H2sCdNdHLqSAndWTYGMpDg0Q1S99m2sACXFoyGP41XSHyXFxuPgrqIoqQxU1KjjnglKKo921oiipDLJmPooqWxU1KlvLbuEkixQw/NloxOUZAMdXF5YSFCSHVpS8e3N+4CSbLEfpmymoCRbNMTITDRRkjUcdqejiZLsMRNNlGSRqWiiJJtoSd6evKEku3w7eUFJdmlNUh4lWaaGJ/qDkmzzWJ8oyTYtfaIk2zS1XaIk+zQpyTo1bFKSdTwjyT4O9yipAlBSBagjEuct3+j9i6ZzUvsnuKe51nts6mfyu6b7Ad0Hb1ypNxB887Pf/Ocj7P/x2ainb4VC/ygqpt+T0VwXBgtVSGPRtaJHJd2HAe7/4k/ffzLqSBqgU0gknW37JxIlu/2+/Edt3ZWbCRF0BJiRlF+6C1HTl8kqYE8ENVBlHC4lHdvA40Mukt5t+3avh31tW0DyRZqBtST99pVv1us4FtuVTGuVYIDuyiX4u4d+VwSdw1Du/p9ycedI0rZn0MOPviqbYlQZP9p55U6SNL1J23PKticSLmyVk33EQQXVahQUmVf6lEkSBZXEAKn+uFUSBZVGOtn3YakkLRIoqDROJi+WStIqjoJKwKOLR64zebuwutN+EMvsknCjtmjC3EjSdkgGEH4CKQfdiu0acyXJSMJzkHLws3vlzUjSwVKM5n5IbLQtGqIz/evZSBpi7f3ZyIq4+TtO3pCkUcRqrjQ61yu669yMJEZROfiwaeHhoo+vJDGKSsTh2bJdJa8kOY/vQOKj1dwj92LZJUGS9ovAybv4qKDH7uC2y4Kk2gYFRcfjKIsgJUhiqovMKIL2sl4+aZNaIHHImOKuU//z4fIN8UhOeFxKFfdUBL246z9NBp5DQBFIpQ+6dVsVt4h6wr5RcYyiR0vstWYUxBE+BymCzjh61p7y0Um/aq/btocezXMkIwgXyAmt7powgPdo6poKVBEfFvgfipyPJXKe5ilIMRVJ/UEY4H2GapCKmFeS0nRVT4oCiXanXyY89s62fWMo6WIwRLSDDaf5/i/g7NOrAxcvw+GLPhy6qKPVGiVxD16UfpKVO3EskX7x1u3ACLyxuQIk3l+FNTFK4lx5uZ9kQ9NdF8Q0idejoolpksmNSsQuyaB3c90xsUfy9e9hlQqLB8OEfpKU4S9BzJKMn1MQswRJGzXojCFTnlGCpK00DBamICa5PnZ3BGKSK0ky6puC0WSS6VHwQxBz3JDEaLLJvPkkRpMxZiRpNDkWEaaYOzNbq+OAk4F2mCtJ+01O1y0TEyxc4zAuItg+GWDpQhQRpWnvBKRUbl0ttLERDqblxGCJ3CpJ26d6HboGjaJKItO6O4oql8yLI1WUtFFb7EPF584rWB+8DTfksuqLyErLjLXq6/dxnx3eOKy8FlwXsEjltwVGVeGstWB/3E5Noor9qYLI5a4Kjaovf3VtyiqGXG99uSFLqsCqtll6KhoMUfiBOrqZxxBoJaPD1lswjpMvVm+AnfGiURP8BwDIlSd/wd8IAAAAAElFTkSuQmCC"
              alt=""
            />
            <p>Company Name</p>
          </div>

          <Link
            to={"/dashboard"}
            className={`flex items-center gap-3 font-semibold text-xl text-[#fff] hover:text-gray-500 cursor-pointer mt-14 `}
          >
            <MdDashboard className="h-7 w-7" />
            <p>Dashboard</p>
          </Link>

          <Link
            to={"/dashboard-orders"}
            className={`flex items-center gap-3 font-semibold text-xl text-[#fff] hover:text-gray-500 cursor-pointer mt-6`}
          >
            <FaBoxes className="h-7 w-7" />
            <p>Orders</p>
          </Link>
          <Link
            to={"/dashboard-users"}
            className={`flex items-center gap-3 font-semibold text-xl text-[#CB3CFF] hover:text-gray-500 cursor-pointer mt-6`}
          >
            <FaUser className="h-7 w-7" />
            <p>Users</p>
          </Link>
          <Link
            to={"/dashboard-products"}
            className={`flex items-center gap-3 font-semibold text-xl text-[#fff] hover:text-gray-500 cursor-pointer mt-6`}
          >
            <IoShirtSharp className="h-7 w-7" />
            <p>Products</p>
          </Link>

          <div className="flex items-center gap-3 text-white font-semibold  mt-20">
            <img
              className="w-11 h-11 bg-[#CB#CFF] rounded-full"
              src="https://themewagon.github.io/dashdarkX/assets/avater-CnKdNFHs.png"
              alt=""
            />
            <div>
              <p>karan john</p>
              <p className="text-gray-500 font-medium">karan@gmail.com</p>
            </div>
          </div>
        </div>
      )}

      <div
        style={{ backgroundColor: "#081028" }}
        className={`flex h-full  w-[100vw]  `}
      >
        {/* sidebar */}
        {width > 1200 && (
          <div className="min-w-[370px] w-[370px] h-full overflow-y-scroll hidden-scrollbar  border-r-4 border-slate-800 p-10">
            <div className="font-bold text-2xl text-white flex items-center gap-5">
              <img
                className="w-8 h-8 "
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABpCAYAAAA5gg06AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU1SURBVHgB7Z3NbhtVFMf/d+xILM2GbV0k1iRSQSA1rbNgTd8A9wFQ0hcgyRNAFqzj7JHaPkGmHwgokZIHQKr7BEQs8cflnGs7SvyViT1z5wz6/yQ7djxdND+fc8/9mHsBYh4HS5z6BurYxRBtWMGhO351IY8P8v4CfXnsuEtEwpak1/5YntuoAl5EOaTyeIltl6JA7EjSKKrhb1STrvwlOxJhJxJhXeSMJUlNkfQe1aeDAQ7zlJWA5E07fNk0desXLwcoqThU1jne+H2sCdNdHLqSAndWTYGMpDg0Q1S99m2sACXFoyGP41XSHyXFxuPgrqIoqQxU1KjjnglKKo921oiipDLJmPooqWxU1KlvLbuEkixQw/NloxOUZAMdXF5YSFCSHVpS8e3N+4CSbLEfpmymoCRbNMTITDRRkjUcdqejiZLsMRNNlGSRqWiiJJtoSd6evKEku3w7eUFJdmlNUh4lWaaGJ/qDkmzzWJ8oyTYtfaIk2zS1XaIk+zQpyTo1bFKSdTwjyT4O9yipAlBSBagjEuct3+j9i6ZzUvsnuKe51nts6mfyu6b7Ad0Hb1ypNxB887Pf/Ocj7P/x2ainb4VC/ygqpt+T0VwXBgtVSGPRtaJHJd2HAe7/4k/ffzLqSBqgU0gknW37JxIlu/2+/Edt3ZWbCRF0BJiRlF+6C1HTl8kqYE8ENVBlHC4lHdvA40Mukt5t+3avh31tW0DyRZqBtST99pVv1us4FtuVTGuVYIDuyiX4u4d+VwSdw1Du/p9ycedI0rZn0MOPviqbYlQZP9p55U6SNL1J23PKticSLmyVk33EQQXVahQUmVf6lEkSBZXEAKn+uFUSBZVGOtn3YakkLRIoqDROJi+WStIqjoJKwKOLR64zebuwutN+EMvsknCjtmjC3EjSdkgGEH4CKQfdiu0acyXJSMJzkHLws3vlzUjSwVKM5n5IbLQtGqIz/evZSBpi7f3ZyIq4+TtO3pCkUcRqrjQ61yu669yMJEZROfiwaeHhoo+vJDGKSsTh2bJdJa8kOY/vQOKj1dwj92LZJUGS9ovAybv4qKDH7uC2y4Kk2gYFRcfjKIsgJUhiqovMKIL2sl4+aZNaIHHImOKuU//z4fIN8UhOeFxKFfdUBL246z9NBp5DQBFIpQ+6dVsVt4h6wr5RcYyiR0vstWYUxBE+BymCzjh61p7y0Um/aq/btocezXMkIwgXyAmt7powgPdo6poKVBEfFvgfipyPJXKe5ilIMRVJ/UEY4H2GapCKmFeS0nRVT4oCiXanXyY89s62fWMo6WIwRLSDDaf5/i/g7NOrAxcvw+GLPhy6qKPVGiVxD16UfpKVO3EskX7x1u3ACLyxuQIk3l+FNTFK4lx5uZ9kQ9NdF8Q0idejoolpksmNSsQuyaB3c90xsUfy9e9hlQqLB8OEfpKU4S9BzJKMn1MQswRJGzXojCFTnlGCpK00DBamICa5PnZ3BGKSK0ky6puC0WSS6VHwQxBz3JDEaLLJvPkkRpMxZiRpNDkWEaaYOzNbq+OAk4F2mCtJ+01O1y0TEyxc4zAuItg+GWDpQhQRpWnvBKRUbl0ttLERDqblxGCJ3CpJ26d6HboGjaJKItO6O4oql8yLI1WUtFFb7EPF584rWB+8DTfksuqLyErLjLXq6/dxnx3eOKy8FlwXsEjltwVGVeGstWB/3E5Noor9qYLI5a4Kjaovf3VtyiqGXG99uSFLqsCqtll6KhoMUfiBOrqZxxBoJaPD1lswjpMvVm+AnfGiURP8BwDIlSd/wd8IAAAAAElFTkSuQmCC"
                alt=""
              />
              <p>Company Name</p>
            </div>

            <Link
              to={"/dashboard"}
              className={`flex items-center gap-3 font-semibold text-xl text-[#fff] hover:text-[#0B1739] cursor-pointer mt-14 `}
            >
              <MdDashboard className="h-7 w-7" />
              <p>Dashboard</p>
            </Link>

            <Link
              to={"/dashboard-orders"}
              className={`flex items-center gap-3 font-semibold text-xl text-[#fff] hover:text-gray-500 cursor-pointer mt-6`}
            >
              <FaBoxes className="h-7 w-7" />
              <p>Orders</p>
            </Link>
            <Link
              to={"/dashboard-users"}
              className={`flex items-center gap-3 font-semibold text-xl text-[#CB3CFF] hover:text-gray-500 cursor-pointer mt-6`}
            >
              <FaUser className="h-7 w-7" />
              <p>Users</p>
            </Link>
            <Link
              to={"/dashboard-products"}
              className={`flex items-center gap-3 font-semibold text-xl text-[#fff] hover:text-gray-500 cursor-pointer mt-6`}
            >
              <IoShirtSharp className="h-7 w-7" />
              <p>Products</p>
            </Link>

            <div className="flex items-center gap-3 text-white font-semibold  mt-20">
              <img
                className="w-11 h-11 bg-[#CB#CFF] rounded-full"
                src="https://themewagon.github.io/dashdarkX/assets/avater-CnKdNFHs.png"
                alt=""
              />
              <div>
                <p>karan john</p>
                <p className="text-gray-500 font-medium">karan@gmail.com</p>
              </div>
            </div>
          </div>
        )}

        {/* dashboard */}

        <div className="w-full p-5 800px:p-10 1200px:p-16 1200px:pt-10 overflow-y-scroll  ">
          <p className="font-semibold text-2xl 800px:text-3xl text-white font-mono  800px:mt-10  ">
            All Users
          </p>
          <AllUsersAdmin />
        </div>
      </div>
    </div>
  );
};

export default Dash_Users;

const AllUsersAdmin = () => {
  const [products] = useState([
    {
      _id: "1",
      images: ["https://via.placeholder.com/150"],
      title: "Product 1",
      price: 1000,
      stock: 10,
    },
    {
      _id: "2",
      images: ["https://via.placeholder.com/150"],
      title: "Product 2",
      price: 1500,
      stock: 5,
    },
    {
      _id: "3",
      images: ["https://via.placeholder.com/150"],
      title: "Product 3",
      price: 2000,
      stock: 8,
    },
  ]);

  return (
    <div className="w-full container mx-auto mt-8 overflow-y-scroll">
      <div className="overflow-x-auto max-700px:text-[80%] 800px:w-4/5 p-2 mx-auto">
        <table className="min-w-full bg-tranparent text-white border-collapse border border-gray-200">
          <thead>
            <tr>
              {/* <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                Image
              </th> */}
              <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
               User Name
              </th>
              <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                User Email
              </th>
              <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                Items Buys
              </th>
              <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                Cancel Orders
              </th>
              <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-[#0004] ">
                {/* <td className="border border-gray-300 800px:px-4 px-1 py-2 800px:py-2">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-16 h-16 object-cover"
                  />
                </td> */}
                <td className="border border-gray-300 800px:px-4 px-6 py-2 800px:py-2">
                  {product._id}
                </td>
                <td className="border border-gray-300 800px:px-4  px-6  py-2 800px:py-2">
                  {product.title}
                </td>
                <td className="border border-gray-300 800px:px-4 px-6 py-2 800px:py-2">
                  ₹{product.price}
                </td>
                <td className="border border-gray-300 800px:px-4 px-6 py-2 800px:py-2">
                  {product.stock}
                </td>
                <td className="border border-gray-300 800px:px-4 px-6 py-2 800px:py-2">
                  <FaArrowRight />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="6" className="text-center p-4">
                {/* <div className="bg-green-500 text-white px-4 py-2 rounded-full inline-block transition transform hover:bg-green-600 hover:scale-105 duration-200 cursor-pointer">
                  Add New Product
                </div> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
