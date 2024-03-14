type Props = {
  amount: number;
  day: string;
  today: string;
};

const Pillar = ({ amount, day, today }: Props) => {
  return (
    <div className="flex flex-col mt-auto items-center">
      <div className="group space-y-1 h-full">
        <p className="text-xs text-Verypaleorange bg-Darkbrown rounded p-1 invisible group-hover:visible transition-all">
          ${amount}
        </p>
        <div
          className={`${
            today.match(day)
              ? "bg-Cyan group-hover:bg-Cyan/40"
              : "bg-Softred group-hover:bg-Softred/40"
          } rounded cursor-pointer w-[80%] md:w-full mx-auto transition-all`}
          style={{ height: `${amount * 3}px` }}
        ></div>
      </div>
      <p className="text-[10px] text-Mediumbrown">{day}</p>
    </div>
  );
};

export default Pillar;
