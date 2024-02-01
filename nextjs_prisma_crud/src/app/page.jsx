async function loadTasks() {
  const res = await fetch("http://localhost:300/api/tasks");
  const data = await res.json();
  console.log(data)
}

function Homepage() {
  return <div>Tareas</div>;
}

export default Homepage;
