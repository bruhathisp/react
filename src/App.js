// import React, { useState } from 'react';
// import './App.css';

// const students = [
//   { name: 'John', grade: 'A', mark: 85 },
//   { name: 'Alice', grade: 'B', mark: 70 },
//   { name: 'Bob', grade: 'C', mark: 60 },
//   // Add more student objects if needed
// ];

// function doubleMarks(studentsArray) {
//   return studentsArray.map(student => ({ ...student, mark: student.mark * 2 }));
// }

// const App = () => {
//   const [doubledStudents] = useState(doubleMarks(students));

//   return (
//     <div className="App">
//       <h1>Student Marks Doubler</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Grade</th>
//             <th>Original Mark</th>
//             <th>Doubled Mark</th>
//           </tr>
//         </thead>
//         <tbody>
//           {doubledStudents.map(student => (
//             <tr key={student.name}>
//               <td>{student.name}</td>
//               <td>{student.grade}</td>
//               <td>{student.mark / 2}</td>
//               <td>{student.mark}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;
// import React from 'react'
// import Header from './Header'

// function App() {
//   return (
//     <div>

// <Header title="rajalakshmi institute of technology"/>
//      <Header title="Welcome"/>
//     </div>
    
//   )
// }

// export default App

import './App.css';
import Header from './Header';
import Counter from './Counter';


function App() {
  return (
    <div className="App">
     <Header title="rajalakshmi institute of technology"/>
     <Counter/>
    </div>
   
  );
}

export default App;