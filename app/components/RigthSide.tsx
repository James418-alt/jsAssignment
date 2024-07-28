"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Editor } from "@monaco-editor/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { log } from "util";

const RigthSide = ({ url, ans }: any) => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const editorRef: any = useRef(null);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  function showValue() {
    setText(editorRef.current?.getValue());
  }
  console.log(text);

  const validate = () => {
    if (text === ans) {
      setShow(true);
      console.log("true");
    } else {
      setShow(false);
      console.log("fs");
    }
  };
  useEffect(() => {
    validate();
  }, [showValue]);

  return (
    <div>
      <div className="flex gap-3 justify-end items-center mb-2">
        <Button onClick={showValue}>Submit</Button>
        {show ? (
          <Button>
            <Link href={url}>Next</Link>
          </Button>
        ) : (
          <Button disabled className="disabled:cursor-help">
            <Link href={url}>Next</Link>
          </Button>
        )}
      </div>
      <div>
        <h1 className="text-white px-4 py-2 rounded-t-md font-semibold text-[13px] bg-[#1e1e1e]">
          Solution
        </h1>
      </div>
      {show ? (
        <div className="flex h-[250px] text-white font-semibold bg-[#1e1e1e] w-full justify-center items-center">
          <h1>Hurray 🎉🎉</h1>
        </div>
      ) : (
        <Editor
          className="h-[250px]"
          onMount={handleEditorDidMount}
          min-width={500}
          theme="vs-dark"
          defaultLanguage="javascript"
        />
      )}
    </div>
  );
};

export default RigthSide;
