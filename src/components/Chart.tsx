import logo from "../assets/images/logo.svg";
import Pillar from "./Pillar";
import data from "../data/data.json";

const Chart = () => {
  const today = new Date()
    .toLocaleString("en-us", { weekday: "short" })
    .toLowerCase();

  return (
    <main className="min-w-[90%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[30%] flex flex-col gap-4">
      <section className="flex items-center justify-between px-8 py-4 text-Verypaleorange bg-Softred rounded-2xl">
        <div className="flex flex-col">
          <p className="text-base md:text-xs">My balance</p>
          <h1 className="font-bold text-2xl">$921.48</h1>
        </div>
        <img src={logo} alt="logo" />
      </section>

      <section className="bg-Verypaleorange p-8 rounded-2xl flex flex-col gap-6">
        <h1 className="text-2xl text-Darkbrown font-bold">
          Spending - Last 7 days
        </h1>
        <div className="flex justify-between">
          {data.map((d, i) => (
            <Pillar key={i} amount={d.amount} day={d.day} today={today} />
          ))}
        </div>
        <div className="flex justify-between border-t-2 border-Mediumbrown/40 pt-6">
          <div className="flex flex-col">
            <p className="text-base text-Mediumbrown">Total this month</p>
            <h1 className="font-bold text-3xl md:text-4xl text-Darkbrown">
              $478.33
            </h1>
          </div>
          <p className="flex flex-col text-xs font-bold text-right mt-auto text-Darkbrown">
            +2.4%
            <span className="font-normal text-Mediumbrown">
              from last month
            </span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Chart;
