import React, { useEffect, useRef, useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import "./Keyboard.css";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Code from "@editorjs/code";
import Embed from "@editorjs/embed";
// import Link from "@editorjs/link";
import LinkTool from "@editorjs/link";
import Marker from "@editorjs/marker";
import { number } from "joi";
import Quote from "@editorjs/quote";
import BlockquoteTool from "./BlockquoteTool";

export default function Keyboard({
  setText,
  defaultData = [
    {
      type: "header",
      data: {
        text: "This is the title",
        level: 1,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "This is some content.",
      },
    },
  ],
}) {
  console.log(defaultData);
  const [body, setbody] = useState({});
  let editorRef = useRef(null);

  const textEdittor = () => {
    const editor = new EditorJS({
      holder: "edittor",
      tools: {
        header: {
          class: Header,
          config: {
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 2,
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            // Set the types of list markers you want to use
            // For example, you can use "ordered" for numbers and "bullet" for bullets
            types: ["ordered", "bullet", "unordered"],
            // Set the default type of list marker
            // defaultType: "bullet",
            // Set the maximum depth of nested lists
            // For example, if set to 3, you can have up to three levels of nested lists
            maxDepth: 3,
          },
        },
        marker: {
          class: Marker,
          shortcut: "CMD+SHIFT+H",
          config: {
            // Set the background color of the highlight
            // You can also use a custom CSS class
            // For example: css: 'my-highlight'
            css: "background-color: lightgrey",
          },
        },
        image: Image,
        code: Code,
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true,
              codepen: {
                regex:
                  /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
                embedUrl:
                  "https://codepen.io/$1/embed/$2?theme-id=dark&default-tab=result",
              },
            },
          },
        },
        link: {
          class: LinkTool,
          config: {
            // Other link tool configurations...
          },
          shortcut: "CMD+K", // Define the keyboard shortcut here
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
        },
      },

      data: {
        blocks: defaultData,
      },
      onReady: () => {
        editorRef.current = editor;
        console.log("edittor i ready to work");
      },
      onChange: async () => {
        let content = await editor.saver.save();
        setText({ ...content });
      },

      autofocus: true,
      placeholder: "Let`s write an awesome story!",
    });
  };
  useEffect(() => {
    if (editorRef.current === null) {
      textEdittor();
    }

    return () => {
      editorRef?.current?.destroy();
      editorRef.current = null;
    };
  }, []);

  return (
    <div className="keyboard">
      <div id="edittor"></div>
    </div>
  );
}
