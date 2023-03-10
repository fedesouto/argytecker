fetch("/api/tasks")
  .then((res) => res.json())
  .then((tasks) => {
    fetch('./templates/task.hbs').then(res => res.text())
    .then((template) => 
    {const tasksTemplate = Handlebars.compile(template)
        
        tasks.sort((a, b) => a.done - b.done)
        const html = tasksTemplate({tasks})
        document.querySelector('#tasksContainer').innerHTML = html;

    })
  });
