'use strict'
appointMain();

function appointMain(){
    const DEFAULT_OPTION = "Choose Category";

    let inputElem,
        inputElem2,
        button,
        selectElem,
        appointments = [];


    getElements();
    addListeners();

    function getElements(){
        inputElem = document.getElementsByTagName("input")[0];
        inputElem2 = document.getElementsByTagName("input")[1];
        button = document.getElementById("categoryFilter");
    }

}
  
/* function renderRows(){
    todoList.forEach(todoObj =>{
        renderRow(todoObj);
    })
    draw(todoList.map(obj=>{
        return {
            title:
            start:
        }
    }))
} */

appointments.push(inputValue);
save();

function save(){
    localStorage.saveItem("appointment", appointments);
}
function draw(data) {
        var calendarEl = document.getElementById('calendar');
    
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
          initialDate: '2023-07-07',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          },
          events: data
        });
    
        calendar.render();
      };

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();

  

  

