import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import React from "react";
import LeftSide from "./LeftSide";
import RigthSide from "./RigthSide";

const Structure = ({ task, example, desc, url, answer }: any) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10 ">
        <div className="md:col-span-1 border h-[335px] overflow-x-auto  p-3 rounded-md">
          <LeftSide task={task} desc={desc} example={example} />
        </div>

        <div className="md:col-span-1">
          <RigthSide url={url} ans={answer} />

          {/* <Button>Submit</Button> */}
        </div>
      </div>
    </div>
  );
};

export default Structure;
