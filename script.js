function handleDragStart(e) {}function handleDragOver(e) {    }function handleDrop(e) {}const listItems = document.querySelectorAll('.draggable-list li');
listItems.forEach(item => {    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('drop', handleDrop);});
function handleDragStart(e) {    const target = e.target;    target.setAttribute('data-dragged-item', 'true');}
function handleDragOver(e) {    e.preventDefault();}
function handleDrop(e) {    e.preventDefault();
    const target = e.target;
    const draggedItem = document.querySelector('li[data-dragged-item]');
    target.parentNode.insertBefore(draggedItem, target.nextSibling);
    draggedItem.removeAttribute('data-dragged-item');}
function handleDragStart(event) {    const target = event.target;
    target.setAttribute('data-dragged-item', 'true');
    target.style.opacity = 0.5;}
function handleDragEnd(e) {    e.target.style.opacity = 1;}
item.addEventListener('dragend', handleDragEnd);
