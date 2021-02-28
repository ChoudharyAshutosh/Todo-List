var id=1;
function add(event){
    let task=document.querySelector("#new_task").value;
    document.querySelector("#new_task").value='';
    let incomplete_container=document.querySelector("#current-task");
    incomplete_container.innerHTML+='<div id='+id+' class="task-container"><p class="task">'+task+'</p><i class="fa fa-trash-o trash" onclick="trash('+id+')"></i><i class="fa fa-check-circle check reverse"  id="'+id+'check" onclick="change_state('+id+')"></i></div>';
    id++;
}
function trash(id){
    document.getElementById(id).remove();
    if(document.getElementById('completed-task').innerHTML=='')
    {document.getElementsByTagName('hr')[0].remove();
    document.getElementById('completed-task').remove();
    }
}
function change_state(id){
    if(document.getElementById('completed-task')==undefined)
    document.getElementById('todo').innerHTML+='<hr><div id="completed-task"></div>';
    let task=document.getElementById(id);
    let complete_container=document.querySelector("#completed-task");
    complete_container.appendChild(task);
    document.getElementById(id+'check').classList.toggle('reverse');
    document.getElementById(id+'check').onclick='';
    
}