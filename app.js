// //transaction function
// const transaction = () => {
//   const atmAmount = Number(document.getElementById("atmInput").value);
//   const notePrfrn = Number(document.getElementById("prfrn").value);
//   const atmMoney = document.getElementById("atmMoney");
//   //let currencyLimit = 200;
//   const notes = [500, 100, 50, 20, 10, 5, 1];
//   let noteCounter = Array(7).fill(0);
//   const prfrnValue = Math.floor(atmAmount / notePrfrn);
//   console.log(noteCounter, notePrfrn, prfrnValue);

//   if (atmAmount > 100000 || atmAmount < 100) {
//     let listItem = document.createElement("p");
//     listItem.innerText = `This Transaction is not allowed`;
//     atmMoney.appendChild(listItem);
//   } else {
//     //Spliting the perefered note
//     for (let i = 0; i < notes.length; i++) {
//       if (notePrfrn === notes[i]) {
//         notes.splice(i, 1);
//       }
//     }
//     // if the required notes are above limit
//     if (prfrnValue > 200) {
//       if (notePrfrn === 1) {
//       }

//       let prfrnNoteAmt = notePrfrn * 200;
//       let remainsAmt = atmAmount - prfrnNoteAmt;
//       console.log(`${notePrfrn} : ${200}`);
//       let listItem = document.createElement("p");

//       listItem.innerText = `${notePrfrn} : ${200}`;
//       atmMoney.appendChild(listItem);

//       // // Note Counter
//       for (let j = 0; j < notes.length; j++) {
//         if (remainsAmt >= notes[j]) {
//           noteCounter = Math.floor(remainsAmt / notes[j]);
//           remainsAmt -= noteCounter * notes[j];
//           // console.log(remainsAmt);
//           console.log(`${notes[j]} : ${noteCounter}`);
//           let listItem = document.createElement("p");

//           listItem.innerText = `${notes[j]} : ${noteCounter}`;
//           atmMoney.appendChild(listItem);
//         }
//       }
//     } else {
//       // if required value is within limit
//       let prfrnNoteAmt = notePrfrn * prfrnValue;
//       let remainsAmt = atmAmount - prfrnNoteAmt;
//       console.log(remainsAmt, notes);
//       console.log(`${notePrfrn} :  ${prfrnValue}`);
//       let listItem = document.createElement("p");

//       listItem.innerText = `${notePrfrn} :  ${prfrnValue}`;
//       atmMoney.appendChild(listItem);

//       // Note Counter
//       for (let k = 0; k < notes.length; k++) {
//         if (remainsAmt >= notes[k]) {
//           noteCounter = Math.floor(remainsAmt / notes[k]);
//           remainsAmt -= noteCounter * notes[k];
//           console.log(`${notes[k]} : ${noteCounter}`);
//           let listItem = document.createElement("p");

//           listItem.innerText = `${notes[k]} : ${noteCounter}`;
//           atmMoney.appendChild(listItem);
//         }
//       }
//     }
//   }
// };

const atmAmount = document.getElementById("atmInput");
const notePrfrn = document.getElementById("prfrn");
const atmMoney = document.getElementById("atmMoney");
const notes = [500, 100, 50, 20, 10, 5, 1];
const money = [];
let remainingAmt = 0;

const transaction = () => {
  if (
    +atmAmount.value > 1000000 ||
    +atmAmount.value < 100 ||
    notePrfrn.value === undefined
  ) {
    atmMoney.innerHTML = `<p>This Transaction is not allowed</p>`;
  } else {
    // to distribute the notes according to the money preferences
    // separate the prefered notes first
    for (const note of notes) {
      if (note.value === notePrfrn.value) {
        const fvrtNoteValue = note / notePrfrn.value;
        money.push(fvrtNoteValue);
        remainingAmt += +atmAmount.value - fvrtNoteValue;
      }
    }

    for (let i = 0; i < notes.length; i++) {
        
    }
  }
};
