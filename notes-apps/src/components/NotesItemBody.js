import React from 'react';
 
function NotesItemBody({ title, body }) {
 return (
   <div className="notes-item__body">
     <h3 className="notes-item__title">{title}</h3>
     <p className="notes-item__notes">{body}</p>
   </div>
 );
}
 
export default NotesItemBody;