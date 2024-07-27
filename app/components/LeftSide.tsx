import React from "react";

const LeftSide = ({ task, example, desc }: any) => {
  return (
    <div>
      <div className="leading-7 rounded-md">
        <h1 className="font-medium text-[16px] pb-2">Task</h1>
        <p className="font-normal text-[14px]">{task}</p>
        <div className="py-6 ">
          <h1 className="text-[15px]   pb-3 font-bold">Examples</h1>
          <div className="flex flex-col mb-5 gap-3">
            {example?.map((el: any, id: number) => (
              //   <h1>{el.input}</h1>
              <div key={id} className="flex gap-3 items-center">
                <div className="flex gap-2 items-center">
                  <span>Input:</span>{" "}
                  <h1 className="border rounded-md p-1 text-[12px] font-medium">
                    {el.input}
                  </h1>
                </div>
                <div className="flex gap-2 items-center">
                  <span>Output:</span>{" "}
                  <h1 className="border rounded-md p-1 text-[12px] font-medium">
                    {el.output}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <h1>{desc}</h1>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
