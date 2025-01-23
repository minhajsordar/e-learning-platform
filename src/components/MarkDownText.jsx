"use client"
import React from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";

const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6`;

const MarkdownText = ({value}) => {
  return <MarkdownEditor value={value} onChange={(value, viewUpdate) => {}} />;
};

export default MarkdownText;
