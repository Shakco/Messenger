var list = document.querySelector('.chat-content');
var items = list.children;
var newItemForm = document.querySelector('.chat-form');
var newMessage = newItemForm.querySelector('.chat-form-input');
var newMessageTemplate = document.querySelector('#message-template').content;
var newMessageItemTemplate = newMessageTemplate.querySelector('.chat-message');

newItemForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var taskText = newMessage.value;
  var task = newMessageItemTemplate.cloneNode(true);
  var taskDescription = task.querySelector('p');
  var deleteMessage = task.querySelector('.chat-message-button');
  taskDescription.textContent = taskText; 
  newMessage.value = '';
  deleteMessage.addEventListener('click', function () {
    task.remove();
  });
  list.appendChild(task);
});