

function Diary({ title, body, date }) {
    return (
      <article>
        <h2>{title}</h2>
        <p>{body}</p>
        <small>{date}</small>
      </article>
    );
  }

  export default Diary;