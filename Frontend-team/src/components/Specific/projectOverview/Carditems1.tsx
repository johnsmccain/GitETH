import elish from "../../../assets/images/Ellipse 5.png";
import imag from "../../../assets/images/Ellipse 4(1).png";
import usdt from "../../../assets/images/usdt.png";
import image from "../../../assets/images/Ellipse 4 (1).png";
import image2 from "../../../assets/images/Ellipse 4.png";
import { useNavigate } from "react-router-dom";
import Carditem2 from "./Carditem2";
import elis2 from "../../../assets/images/Ellipse 5 (1).png";

const Carditems1 = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="w-full h-[140px] rounded-[16px] border border-[#293056] mt-8 p-8  bg-white bg-opacity-5  gap-2 max-sm:p-4 max-sm:w-full ">
        <h3 className="w-fit h-[29px] font-kern text-[24px] font-medium leading-[28.8px] ml-1">
          Project Leads
        </h3>
        <div className="flex mt-4 gap-2">
          <p className="rounded-[20px] border border-[#293056] w-fit h-[40px] bg-black p-2 flex items-center gap-2">
            <img src={elish} alt="" /> Noyi24_7
          </p>
          <p className="rounded-[20px] border border-[#293056] w-fit h-[40px] bg-black p-2 flex items-center gap-2">
            <img src={elis2} alt="" className="" />
            Vhee
          </p>
        </div>
      </div>
      <Carditem2 />
      <div className="w-full h-[742px] border border-[#293056] mt-5 rounded-[26px] p-3 bg-white bg-opacity-5 max-sm:w-full max-sm:hidden">
        <table className="w-full text-left rtl:text-right  table-auto bg-[#101323]  rounded-lg p-4 ">
          <thead className="text-sm  bg-[#0D0F1C] w-full h-[80px] max-sm:hidden ">
            <tr>
              <th className="py-3 px-4">Contributors</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Contributions</th>
              <th className="py-3 px-4">Earnings</th>
            </tr>
          </thead>
          <tbody className=" ">
            {/* Row 1 */}

            <tr
              className="w-full h-[80px] "
              onClick={() => {
                navigate("/Profile");
              }}
            >
              <td className="rounded-[20px] border border-[#293056] w-fit h-[40px] bg-[#0D0F1C] ml-6  items-center gap-2 mt-4 flex p-1">
                <img src={elish} alt="" className="w-[24px] h-[24px]" />{" "}
                Noyi24_7
              </td>
              <td className="py-3 px-4"> Designer</td>
              <td className="py-3 px-4"> 50</td>
              <td className="py-3 px-4">
                <span className="flex items-center space-x-2">
                  <img src={usdt} alt="" />
                  <span>15,000 USDT</span>
                </span>
              </td>
            </tr>

            {/* Row 2 */}
            <tr
              className="w-full h-[80px]"
              onClick={() => {
                navigate("/Profile");
              }}
            >
              <td className="rounded-[20px] border border-[#293056] w-fit h-[32px] bg-[#0D0F1C] p-1 flex items-center gap-2 mt-4 ml-6">
                <img src={imag} alt="" className="" />
                Vhee
              </td>
              <td className="py-3 px-4">Developer</td>
              <td className="py-3 px-4">45</td>
              <td className="py-3 px-4">
                <span className="flex items-center space-x-2">
                  <img src={usdt} alt="" />
                  <span>10,000 USDT</span>
                </span>
              </td>
            </tr>
            {/* Row 3 */}
            <tr
              className="w-full h-[80px]"
              onClick={() => {
                navigate("/Profile");
              }}
            >
              <td className="rounded-[20px] border border-[#293056] w-fit h-[32px] bg-[#0D0F1C] p-1 flex items-center gap-2 mt-4 ml-6">
                <img src={image2} alt="" className="" />
                Aj
              </td>
              <td className="py-3 px-4">Designer</td>
              <td className="py-3 px-4">12</td>
              <td className="py-3 px-4">
                <span className="flex items-center space-x-2">
                  <img src={usdt} alt="" />
                  <span>9,500 USDT</span>
                </span>
              </td>
            </tr>
            {/* Add more rows as needed */}
            <tr
              className="w-full h-[80px]"
              onClick={() => {
                navigate("/Profile");
              }}
            >
              <td className="rounded-[20px] border border-[#293056] w-fit h-[32px] bg-[#0D0F1C] p-1 flex items-center gap-2 mt-4 ml-6">
                <img src={image} alt="" className="" />
                Fufu
              </td>
              <td className="py-3 px-4">Android Developer</td>
              <td className="py-3 px-4">15</td>
              <td className="py-3 px-4">
                <span className="flex items-center space-x-2">
                  <img src={usdt} alt="" />
                  <span>10,500 USDT</span>
                </span>
              </td>
            </tr>
            <tr
              className="w-full h-[80px] "
              onClick={() => {
                navigate("/Profile");
              }}
            >
              <td className="rounded-[20px] border border-[#293056] w-fit h-[40px] bg-[#0D0F1C] p-1 flex items-center gap-2 mt-4 ml-6">
                <img src={elish} alt="" className="w-[24px] h-[24px]" />{" "}
                Noyi24_7
              </td>
              <td className="py-3 px-4">Designer</td>
              <td className="py-3 px-4">50</td>
              <td className="py-3 px-4">
                <span className="flex items-center space-x-2">
                  <img src={usdt} alt="" />
                  <span>15,000 USDT</span>
                </span>
              </td>
            </tr>
            {/* Row 2 */}
            <tr
              className="w-full h-[80px]"
              onClick={() => {
                navigate("/Profile");
              }}
            >
              <td className="rounded-[20px] border border-[#293056] w-fit h-[32px] bg-[#0D0F1C] p-1 flex items-center gap-2 mt-4 ml-6">
                <img src={imag} alt="" className="w-[24px] h-[24px]" />
                Vhee
              </td>
              <td className="py-3 px-4">Developer</td>
              <td className="py-3 px-4">45</td>
              <td className="py-3 px-4">
                <span className="flex items-center space-x-2">
                  <img src={usdt} alt="" />
                  <span>10,000 USDT</span>
                </span>
              </td>
            </tr>
            {/* Row 3 */}
            <tr
              className="w-full h-[80px]"
              onClick={() => {
                navigate("/Profile");
              }}
            >
              <td className="rounded-[20px] border border-[#293056] w-fit h-[32px] bg-[#0D0F1C] p-1 flex items-center gap-2 mt-4 ml-6">
                <img src={image2} alt="" className="" />
                Aj
              </td>
              <td className="py-3 px-4">Designer</td>
              <td className="py-3 px-4">12</td>
              <td className="py-3 px-4">
                <span className="flex items-center space-x-2">
                  <img src={usdt} alt="" />
                  <span>9,500 USDT</span>
                </span>
              </td>
            </tr>
            {/* Add more rows as needed */}
            <tr
              className="w-full h-[80px]"
              onClick={() => {
                navigate("/Profile");
              }}
            >
              <td className="rounded-[20px] border border-[#293056] w-fit h-[32px] bg-[#0D0F1C] p-1 flex items-center gap-2 mt-4 ml-6">
                <img src={image} alt="" className="" />
                Fufu
              </td>
              <td className="py-3 px-4">Android Developer</td>
              <td className="py-3 px-4">15</td>
              <td className="py-3 px-4">
                <span className="flex items-center space-x-2">
                  <img src={usdt} alt="" />
                  <span>10,500 USDT</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Carditems1;
