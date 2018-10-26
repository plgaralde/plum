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
   let tempDoc = createElement('div'),
      company_name = createElement('div')
   ;
   
   // header - company info
   company_name.createTextNode(plum.json.company);
   company_name.createTextNode(plum.json.address);
   
   // checklist
   
   tempDoc.appendChild(company_name);
   
   return tempDoc;
};
    
doc.getElementsByTagName('body').innerHTML = plum.doc;
