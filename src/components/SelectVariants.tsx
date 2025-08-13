import * as React from "react";

type Props = {
  priority: string;
  setPriority: (value: string) => void;
};

export default function SelectVariants({ priority, setPriority }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(event.target.value);
  };

  return (
    <div className="m-2 bg-white">
      <select
        id="category-select"
        value={priority}
        onChange={handleChange}
        style={{
          display: "block",
          width: "100%",
          padding: "2px",
          borderRadius: 4,
          border: "1px solid #ccc",
        }}
      >
        <option value="None">None</option>
        <option value="Groceries">Groceries</option>
        <option value="College">College</option>
        <option value="Payments">Payments</option>
      </select>
    </div>
  );
}
