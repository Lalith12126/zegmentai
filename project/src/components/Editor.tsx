import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

interface EditorProps {
  onChange: (schema: string) => void;
}

export const Editor: React.FC<EditorProps> = ({ onChange }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="w-full h-full p-4">
      <h2 className="font-bold mb-2">JSON Editor</h2>
      <AceEditor
        mode="json"
        theme="github"
        value={value}
        onChange={handleChange}
        name="json-editor"
        width="100%"
        height="400px"
        setOptions={{ useWorker: false }}
      />
    </div>
  );
};
