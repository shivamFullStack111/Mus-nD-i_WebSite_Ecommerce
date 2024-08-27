import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaBoxes, FaUser } from "react-icons/fa";
import { IoShirtSharp } from "react-icons/io5";
import { useWindowSize } from "react-use";
import { RxCross1 } from "react-icons/rx";
import { IoReorderThree } from "react-icons/io5";

const Dashboard = () => {
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
        <div className="min-w-[370px] absolute h-[100vh] top-0 bg-[#081028] left-0 w-[370px]  overflow-y-scroll hidden-scrollbar  border-r-4 border-slate-800 p-6">
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
            className={`flex items-center gap-3 font-semibold text-xl text-[#CB3CFF] hover:text-[#0B1739] cursor-pointer mt-14 `}
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
            className={`flex items-center gap-3 font-semibold text-xl text-[#fff] hover:text-gray-500 cursor-pointer mt-6`}
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
              className={`flex items-center gap-3 font-semibold text-xl text-[#CB3CFF] hover:text-[#0B1739] cursor-pointer mt-14 `}
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
              className={`flex items-center gap-3 font-semibold text-xl text-[#fff] hover:text-gray-500 cursor-pointer mt-6`}
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
            Analytics
          </p>
          <div className="grid mt-7 800px:mt-10 800px:grid-cols-2 w-full justify-center gap-6 800px:gap-10   ">
            <div
              className={`600px:h-32 max-800px:w-[90vw] 800px:h-40 rounded-2xl 800px:rounded-3xl bg-[#0B1739] w-[100%] p-5 800px:p-10 `}
            >
              <p className="font-semibold text-xl 800px:text-2xl text-gray-400">
                Sale Products
              </p>
              <p className="font-semibold text-[25px] 800px:text-[30px] text-white">
                $3483
              </p>
            </div>
            <div
              className={`600px:h-32 max-800px:w-[90vw] 800px:h-40 rounded-2xl 800px:rounded-3xl bg-[#0B1739] w-[100%] p-5 800px:p-10 `}
            >
              <p className="font-semibold text-xl 800px:text-2xl text-gray-400">
                Total Products
              </p>
              <p className="font-semibold text-[25px] 800px:text-[30px] text-white">
                93
              </p>
            </div>
          </div>
          <div className="grid mt-7 800px:mt-10 800px:grid-cols-2 w-full justify-center gap-6 800px:gap-10   ">
            <div
              className={`600px:h-32 max-800px:w-[90vw] 800px:h-40 rounded-2xl 800px:rounded-3xl bg-[#0B1739] w-[100%] p-5 800px:p-10 `}
            >
              <p className="font-semibold text-xl 800px:text-2xl text-gray-400">
                Users
              </p>
              <p className="font-semibold text-[25px] 800px:text-[30px] text-white">
                39
              </p>
            </div>
            <div
              className={`600px:h-32 max-800px:w-[90vw] 800px:h-40 rounded-2xl 800px:rounded-3xl bg-[#0B1739] w-[100%] p-5 800px:p-10 `}
            >
              <p className="font-semibold text-xl 800px:text-2xl text-gray-400">
                Total Products
              </p>
              <p className="font-semibold text-[25px] 800px:text-[30px] text-white">
                93
              </p>
            </div>
          </div>
          <p className="font-semibold text-xl 800px:text-2xl  mt-7 text-gray-500">
            Sales Analytics
          </p>
          <div className="flex mt-3 800px:mt-10  w-full justify-center items-center   ">
            <SalesBarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Link } from "react-router-dom";

// Register the required components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesBarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"], // X-axis labels
    datasets: [
      {
        label: "Sales", // Dataset label
        data: [12000, 15000, 8000, 14000, 17000, 20000], // Data points for Y-axis
        backgroundColor: "#CB3CFF", // Bar color
        borderColor: "rgba(75, 192, 192, 1)", // Border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Data",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        barThickness: 20, // Set the width of the bars (in pixels)
      },
    },
  };

  return <Bar className="w-full min-h-64" data={data} options={options} />;
};

// export default SalesBarChart;
