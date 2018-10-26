'use strict';

let doc = document,
  plum = {}
  ;
  
plum.json = {
      company: 'ABC',
      address: 'json/ABC.json',
      action: {
         items: ['checklist']
      }
   };
    
plum.doc = function () {
   let tempDoc = createElement('div')
   ;
   
   // header - company info
   tempDoc.appendChild(doc.createTextNode(plum.json.company));
   tempDoc.appendChild(doc.createTextNode(plum.json.address));
   
   // checklist
   
   return tempDoc;
};
    
doc.getElementsByTagName('body').innerHTML = plum.doc;
