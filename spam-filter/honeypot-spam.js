document.addEventListener("DOMContentLoaded", function(event) { 
     var input = document.createElement('input')
     input.setAttribute('style', 'display:none;')
     input.setAttribute('type', 'text')
     input.setAttribute('id', 'inputHide')

     document.getElementById('content').appendChild(input)

     document.getElementById('inputHide').oninput = function() {
          var buttons = document.getElementsByClassName('gform_button')
          Array.prototype.map.call(buttons, function(x) { x.parentNode.removeChild(x) })
     }
})