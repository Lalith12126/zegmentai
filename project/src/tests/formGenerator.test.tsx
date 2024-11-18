import { render, screen } from "@testing-library/react";
import { FormPreview } from "../components/FormPreview";

test("renders form with fields", () => {
  const schema = {
    formTitle: "Test Form",
    fields: [
      { id: "name", type: "text", label: "Name", required: true },
      { id: "email", type: "email", label: "Email", required: true },
    ],
  };
  render(<FormPreview schema={schema} />);
  expect(screen.getByText("Name")).toBeInTheDocument();
  expect(screen.getByText("Email")).toBeInTheDocument();
});
