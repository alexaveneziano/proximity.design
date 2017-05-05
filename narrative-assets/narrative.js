  window.addEventListener('DOMContentLoaded', splitWords, false);

  function splitWords() {

    var elems = document.querySelectorAll('.draggable'),
        text,
        textNode,
        words,
        elem;

    // iterate through all .draggable elements
    for (var i = 0, l = elems.length; i < l; i++) {

        elem = elems[i]; 
        textNode = elem.childNodes[0];
        text = textNode.nodeValue;

        // remove current text node
        elem.removeChild(textNode);      
        words = text.split(' ');

      // iterate through words
      for (var k = 0, ll = words.length; k < ll; k++) {
         // create node for all words
         textNode = document.createElement('span');
         textNode.id = 'word_' + i + k;
         // allow dragging for words
         textNode.draggable = true;
         textNode.ondragstart = drag;
         textNode.appendChild(document.createTextNode(words[k] + ' '));
         elem.appendChild(textNode)
      }
 
    }
    
  }
  
function allowDrop(ev)
{
ev.preventDefault();
}

function drag(ev)
{
ev.dataTransfer.setData("Text",ev.target.id);
  console.log('targetid: ' + ev.target.id);
}

function drop(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
ev.target.appendChild(document.getElementById(data));
}