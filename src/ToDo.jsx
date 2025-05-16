
import React, { useState } from 'react';

function ToDo({ task, completed }) {
  const [check, setCheck] = useState(completed);

  return (
    <article>
      <label>
        <input
          type="checkbox"
          checked={check}
          onChange={() => setCheck(!check)}
        />
        {task}
      </label>
    </article>
  );
}

export default ToDo;
