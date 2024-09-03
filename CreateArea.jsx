import React, { useState } from "react";

function CreateArea(props) {
  const [Input, setInput] = useState({
    title: "",
    content: "",
  });
  function handle(event) {
    const { name, value } = event.target;
    console.log(value);
    setInput((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          onChange={handle}
          name="title"
          placeholder="Title"
          value={Input.title}
        />
        <textarea
          onChange={handle}
          name="content"
          value={Input.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={() => {
            props.meth(Input);
            setInput({
              title: "",
              content: "",
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
