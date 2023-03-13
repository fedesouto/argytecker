fetch("/api/tasks")
  .then((res) => res.json())
  .then((tasks) => {
    fetch("./templates/task.hbs")
      .then((res) => res.text())
      .then((template) => {
        const tasksTemplate = Handlebars.compile(template);
        
        const pendingTasks = tasks.filter(task => !task.done)
        const html = tasksTemplate({ tasks: pendingTasks });
        document.querySelector("#tasksContainer").innerHTML = html;

        const newTaskForm = document.querySelector("#newTaskForm");
        newTaskForm.addEventListener("submit", async (event) => {
          event.preventDefault();
          const dto = {};
          for (let i = 0; i < event.target.elements.length - 1; i++) {
            dto[event.target.elements[i].name] = event.target.elements[i].value;
          }
          const res = await fetch("/api/tasks", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dto),
          });
          const json = await res.json();
          console.log(json);
          newTaskForm.reset();
          window.location.reload();
        });
      });
  });
