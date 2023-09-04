const images = document.getElementsByTagName('img');

const getImmovableImages = (elements) => {
    for (let j = elements.length - 1; j >= 0; j--) {
      const {left, top} = elements[j].getBoundingClientRect();
      elements[j].style.position = 'absolute';
      elements[j].style.top = top + 'px';
      elements[j].style.left = left + 'px'; 
    }
  return elements;
  }

getImmovableImages(images);

for (i = 0; i < images.length; i ++) {
  let image = images[i];
  image.addEventListener('mousedown', capturePicture, false);
  
  function capturePicture (event) {
    event = event || window.event;
    let shiftX = event.clientX - image.getBoundingClientRect().left;
    let shiftY = event.clientY - image.getBoundingClientRect().top;
    image.style.zIndex = 5;
    function moveAt(pageX, pageY) {
      image.style.left = pageX - shiftX + 'px';
      image.style.top = pageY - shiftY + 'px';
    }
    
    document.addEventListener('mousemove', movePicture, false); 
    function movePicture (event) {
      event = event || window.event;
      moveAt(event.pageX, event.pageY); 
      document.body.style.cursor = "move";
    }
  
    image.addEventListener('mouseup', dropPicture, false);
    function dropPicture (event) {
      event = event || window.event;
      image.style.zIndex = 'auto';
      document.body.style.cursor = "default";
      document.removeEventListener('mousemove', movePicture, false);
      image.removeEventListener('mouseup', dropPicture, false);
    }
  }
  
  image.ondragstart = function() {
  return false;
  }
}