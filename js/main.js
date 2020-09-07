let input = document.querySelector('#inp');
let btn = document.querySelector('#btn');
const obj = [];
btn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  if(!input.value) {
    alert('please write in');
    return;
  }
  let tasks = document.querySelector('.list ul');
  let li = document.createElement('li');

  // let editBtn = document.createElement('button');
  // let deleteBtn = document.createElement('button');
  
  
  // let typeOne = 'Edit';
  // let typeTwo = 'Delete';
  
  //<button>Edit</button>
  // editBtn.append(typeOne);
  
  
  //<button>Delete</button>
  // deleteBtn.append(typeTwo);
  
  
  //<ul>
  // <li></li>
  // </ul>
  const newObj = {
    task: input.value,
    id: 0,
  };
  obj.push(newObj);
  console.log(obj);
  tasks.appendChild(li);
  input.value = ''; 
  
  // for(var i=0; i<obj.length;i++){
  //   obj[i].id = i;
  // }
  
  obj.map((item, index) => {
    return item.id = index
  })
  let inpTasks = document.createElement('input');
  
  inpTasks.disabled = true;
  inpTasks.type = 'text';
  inpTasks.classList.add('item_input');

  let btnDelete = document.createElement('button');
  let btnEdit = document.createElement('button');
  let typeEdit = 'Edit';
  let typeBtn = 'Delete';
  btnDelete.append(typeBtn);
  btnEdit.append(typeEdit);
  btnDelete.className = 'delete';
  btnEdit.className = 'edit';

  
  obj.map((item,index) => {
    
    li.appendChild(inpTasks)
    inpTasks.value = item.task
    // li.innerHTML = inpTasks;
    btnDelete.setAttribute('data-id',index)
    btnEdit.setAttribute('data-id', index)
    li.setAttribute('id','elem');
    li.appendChild(btnDelete);
    li.appendChild(btnEdit);
    // inpTasks.value.onclick = console.log('hello');
    // function lineThrough(){
    //   if(inpTasks.disabled = false){
    //     console.log('s')

    //   }
    // }
  });
  
  btnDelete.addEventListener('click', function (e) {
    let elem = e.target.parentNode;
    let id =e.target.getAttribute('data-id')
    
    
    // console.log(id)
    
    obj.map((item,index) => {
      // btnDelete.setAttribute('data-id',item.id)
      if(item.id === Number(id)){
        return obj.splice(index,1);
      }
    });

    console.log(obj);
    elem.remove();
  });

  // btnEdit.addEventListener('click', e => {
  //   e.preventDefault();
  //   let id = e.target.getAttribute('data-id');
  //   let elem = document.querySelectorAll('.item_input');
  //   obj.map((item,index)=> {
  //     if(item.id === Number(id)){
  //       inpTasks.disabled = !inpTasks.disabled;
  //       elem[index].style.boxShadow = '1px 4px 5px blue'; 
  //       btnEdit.onclick = styleOff;
  //       function styleOff(){
  //         elem[index].style.boxShadow = 'none';
  //       }
  //       // btnEdit.onclick = styleOff;
  //       // function styleOff(){
  //       //   elem.classList.toggle('.item_input')
  //       // }
  //     }
  //   });
  btnEdit.addEventListener('click', e => {
    e.preventDefault();
    let id = e.target.getAttribute('data-id');
    let elem = document.querySelectorAll('.item_input');
    btnEdit = !btnEdit
    inpTasks.disabled = !inpTasks.disabled;
    obj.map((item,index)=> {
      if(btnEdit === true && index == Number(id)) {
        elem[index].style.boxShadow = '1px 4px 5px blue';
        elem[index].style.background = 'white';
        let saveBtn = document.querySelector('.edit')
        saveBtn.innerHTML = 'Save'
        
        
      }
      else {
        elem[index].style.background = 'none';
        elem[index].style.boxShadow = 'none';
        let saveBtn = document.querySelector('.edit');
        saveBtn.innerHTML = 'Edit';
      }


      console.log(btnEdit)
    })
    
  });
  btnEdit = false;

    // inpTasks.style.background = 'white';
    // document.querySelector('.item_input').style.boxShadow = 'none';
    // document.querySelector('.edit').style.display = 'none';


    // let saveBtn = document.createElement('button');
    // let typeSave = 'Save';
    // saveBtn.append(typeSave);
    // saveBtn.className = 'save';
    // li.appendChild(saveBtn)
    // // document.querySelector('.save').style.display = 'block';
    // console.log(saveBtn)

    // saveBtn.addEventListener('click', e => {
    //   e.preventDefault();
    //   document.querySelector('.item_input').style.boxShadow = 'none'
    //   saveBtn.style.display = 'none';
    //   btnEdit.style.display = 'block'
    // })
    // document.querySelector('.item_input').addEventListener('dblclick', e => {
    //   document.querySelector('.item_input').style.textDecoration = 'line-through';
    // });


    // btnEdit.onclick = styleoff;
    // function styleoff(){
    // return document.querySelector('.item_input').style.boxShadow = 'none';
    // }
  // btnEdit.addEventListener('click', (e) =>  {
    //   e.preventDefault();
    //     inpTasks.disabled = !inpTasks.disabled
    //     inpTasks.style.background = 'white';
    //     let saveBtn = document.createElement('button');
    //     btnEdit.style.display = 'none';
    //     let typeSave = 'Save';
    //     saveBtn.append(typeSave)
    //     saveBtn.className = 'save';
    //     let btnSave = document.querySelector('.save');
    //     console.log(saveBtn)
    //     li.appendChild(saveBtn);
    //   });
    //       btnSave.addEventListener('click', () => {
      //         btnSave.style.display = 'none';
      //         btnEdit.style.display = 'block';
      //         li.append(btnEdit)
      //         inpTasks.style.background = 'none';
      //         inpTasks.disabled = !inpTasks.disabled
      //   });
  });
    // let toggleDiv = document.querySelector('.toggleDiv');
    // let toggleBtn = document.querySelectorAll('.toggleDiv button');
    // toggleBtn.onclick = toggle;
    // function toggle(){
    //   toggleDiv.toggleC;
    // }
    // console.log(arr.splice(0,1))
// console.log(arr)

// var removeByAttr = function(arr, attr, value){
//   var i = arr.length;
//   console.log(arguments.length)
//   while(i--){
//      if( arr[i] 
      
//          && arr[i].hasOwnProperty(attr) 
//          && (arguments.length > 2 && arr[i][attr] === value ) ){ 
//          arr.splice(i,1);

//      }
//   }
//   return arr;
// }
// var arr = [{id:1,name:'serdar'}, {id:2,name:'alfalfa'},{id:3,name:'joe'}];
// removeByAttr(arr, 'id', 1);   
// console.log(arr)
// let arr =[1,2,3,4,5]