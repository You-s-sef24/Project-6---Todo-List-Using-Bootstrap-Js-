const todoList = JSON.parse(localStorage.getItem('todoList')) || [{ name: 'wash dishes', date: '2022-1-1' }];
const inp = document.querySelector('.inp');
const inpdate = document.querySelector('.inp-date');
const error=document.querySelector('.error');

show();
function show() {
  let list = '';
  for (let i = 0; i < todoList.length; i++) {
    const mission = todoList[i];
    const name = mission.name;
    const date = mission.date;

    const html = `
          <div class="row d-flex align-items-center justify-content-between text-light">
            <div class="col-4">
              <h6 class="me-3"><strong>${i + 1} - ${name}</strong></h6>
            </div>
            <div class="col-4">
              <h6 class="me-3"><strong>DueDate: ${date}</strong></h6>
            </div>
            <div class="col-1 mb-3 p-0">
              <button class="btn btn-danger" onclick="
                todoList.splice(${i},1);
                save();
                show();
              ">Delete</button>
            </div>
          </div>
        </div>
        <hr class="text-light">
        `;
    list += html;
  }
  document.querySelector('.list').innerHTML = list;
}
function add() {
  const name = inp.value;
  const date = inpdate.value;
  if(name!=='' && date!==''){
    todoList.push({ name: name, date: date });
    inp.value = '';
    inpdate.value = '';
    error.innerHTML='';
  }else{
    const html=`
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Missing Fields</strong>.
    </div>
    `;
    error.innerHTML=html;
  }
  save();
  show();
}

function save() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}