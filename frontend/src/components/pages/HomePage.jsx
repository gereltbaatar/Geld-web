import { Card1_2, Card1_3, Header } from "../parts";
import { ArrowCircleUpIcon, EllipseGreenIcon } from "../svg";

const HomePage = () => {
  // const data = {
  //   labels: ["Red", "Blue", "Yellow"],
  //   datasets: [
  //     {
  //       label: "My First Dataset",
  //       data: [300, 50, 100],
  //       backgroundColor: [
  //         "rgb(255, 99, 132)",
  //         "rgb(54, 162, 235)",
  //         "rgb(255, 205, 86)",
  //       ],
  //       hoverOffset: 4,
  //     },
  //   ],
  // };

  // const config = {
  //   type: "doughnut",
  //   data: data,
  // };
  return (
    <main className="h-full bg-base100">
      <div className="flex flex-col gap-8">
        <Header />
        <div className="container m-auto border border-black">
          <div className="flex flex-col gap-6">
            <div className="flex gap-6 justify-between">
              <div className="bg-blue w-96 h-[216px] rounded-[18px]"></div>
              <Card1_2 />
              <Card1_3 />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-[18px]">
                <div className="px-6 py-4">
                  <p className="font-roboto font-bold not-italic text-base text-[#0F172A]">
                    Income - Expense
                  </p>
                </div>
                <div className="w-full border-[0.5px]"></div>
                <div className="px-6 py-8">chart</div>
              </div>
              <div className=" bg-white rounded-[18px]">
                <div className="flex justify-between px-6 py-4">
                  <p className="font-roboto font-bold not-italic text-base text-[#0F172A]">
                    Income - Expense
                  </p>
                  <p className="font-roboto font-normal not-italic text-base text-[#6B7280]">
                    Jun 1 - Nov 30
                  </p>
                </div>
                <div className="w-full border-[0.5px]"></div>
                <div className="px-6 py-8">chart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
