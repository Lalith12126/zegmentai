import React, { useState } from "react";
import { Editor } from "../components/Editor";
import { FormPreview } from "../components/FormPreview";

const App: React.FC = () => {
  const [schema, setSchema] = useState<any>(null);

  const handleSchemaChange = (schemaString: string) => {
    try {
      const parsedSchema = JSON.parse(schemaString);
      setSchema(parsedSchema);
    } catch {
      setSchema(null);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2">
        <Editor onChange={handleSchemaChange} />
      </div>
      <div className="w-full lg:w-1/2 bg-gray-100">
        <FormPreview schema={schema} />
      </div>
    </div>
  );
};

export default App;
