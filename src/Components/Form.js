import { useState } from "react";
function Form() {
  const [count, set_count] = useState(0);
  function handleTextareaChange(e) {
    let name = document.getElementById("Count").value;
    name = name.trim();
    const arr = name.split(" ");
    set_count(arr.length);
  }
  return (
    <>
      <div
        className="shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto"
        style={{ width: "70%", marginTop: "10%"}}
      >
        <h1 className="mx-auto" style={{ width: "40%" }}>
          Responsive Word Counter
        </h1>
        <textarea
          id="Count"
          className="form-control mx-auto mt-5 border border-black"
          style={{ height: "200px", width: "50%" }}
          onChange={handleTextareaChange}
        ></textarea>
        <p className="mt-4" style={{ margin: "auto", width: "50%" }}>
          Word Count - {count}
        </p>
      </div>
    </>
  );
}
export default Form;