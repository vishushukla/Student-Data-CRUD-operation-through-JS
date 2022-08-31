var form = `<div>
<h1> Student Data </h1>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" pattern="[a-zA-Z]*" placeholder="Enter Name">
  </div>
  <div class="form-group mt-3">
    <label for="marks">Marks</label>
    <input type="number" class="form-control" id="marks" placeholder="Enter Marks">
  </div>
  <div class="text-center">
    <button type="submit" class="btn btn-primary mt-3 px-4" onclick="save()">Save</button>
  </div>
</div`;

function table() {
    let table = `<table class="table table-striped table-bordered">
  <thead>
    <tr class="bg-dark text-light">
      <th clsaa="col-1">Student ID</th>
      <th clsaa="col-3">Name</th>
      <th clsaa="col-4">Marks</th>
      <th clsaa="col-2">Edit</th>
      <th clsaa="col-2">Delete</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details[i].name}</td>
      <td>${details[i].marks}</td>
      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
     document.getElementById("table").innerHTML = table;
};

document.getElementById("form").innerHTML = form;
details = [];
getData();
table();
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};
function save() {
    let name = document.getElementById("name");
    let marks = document.getElementById("marks");

    if (name.value == 0) {
        alert("name is Empty");
        return
    }
    if (marks.value == 0) {
      alert("marks is Empty");
      return
  }
    let data = {
        name: name.value,
        marks: marks.value
    };
    details.push(data);
    setData();

    // console.log(details)
    // console.log(marks.value)
    table();
    name.value = "";
    marks.value = "";
};
function deleteData(index) {
    details.splice(index, 1);
    setData();
    table();

    // console.log('delete work')
    // console.log(details)
};

function edit(index) {
    let editForm = `<div>
    <h2> Update Student Data </h2>
  <div class="form-group">
    <label for="name">Update Name</label>
    <input type="text" value="${details[index].name}" class="form-control" pattern="[a-zA-Z]*" id="newName" aria-describedby="emailHelp" placeholder="Update  Name">
  </div>
  <div class="form-group mt-3">
    <label for="marks">Update Marks</label>
    <input type="number" value="${details[index].marks}" class="form-control" id="newMarks" placeholder="Update Marks">
  </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
</div>`;
    document.getElementById("form").innerHTML = editForm;
    // console.log('edit work');
};
function update(index) {
    let newName = document.getElementById('newName');
    let newMarks = document.getElementById('newMarks');

    if (newName.value == 0) {
      alert("name is Empty");
      return
  }
  if (newMarks.value == 0) {
    alert("marks is Empty");
    return
  }

    details[index] = {
        name: newName.value,
        marks: newMarks.value
    };
    setData();
    table();
    document.getElementById("form").innerHTML = form;
// console.log('update work')
// console.log(details)
}




