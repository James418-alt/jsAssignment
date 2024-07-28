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
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      Welcome to Js game..
      <Button>
        <Link href={"/stages/stage1/level1"}>Start Game</Link>
      </Button>
    </div>
  );
}
