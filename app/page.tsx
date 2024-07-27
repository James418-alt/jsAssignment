"use client";
import Image from "next/image";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { ModeToggle } from "./ModeToggle";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import LeftSide from "./components/LeftSide";
import RigthSide from "./components/RigthSide";
import { addData } from "./global/slice";
import { data } from "@/data";

export default function Home() {
  return (
    <div>
      <ResizablePanelGroup
        className="grid grid-cols-2 gap-5 p-10"
        direction="horizontal"
      >
        <ResizablePanel
          className="col-span-1 border p-3 rounded-md"
          defaultSize={60}
        >
          <LeftSide />
        </ResizablePanel>

        <ResizablePanel
          className="col-span-1"
          defaultSize={40}
          maxSize={50}
          minSize={30}
        >
          <RigthSide />

          {/* <Button>Submit</Button> */}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
