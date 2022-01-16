// my transaction
const transaction = () => {
    const NotePrfrn = parseInt(document.getElementById('prfrn').value);
    let atmAmount = parseInt(document.getElementById('atmInput').value);

    // to get number of notes that are requested
    const prfrnValue = atmAmount / NotePrfrn
    // console.log(`prfrnValue ${prfrnValue}`);

    const notes = [500, 100, 50, 20, 10, 5, 1]
    // limit of notes
    const limitValue = 200


    if (atmAmount >= 100 && atmAmount <= 100000) {


        let noteCounter = Array(7).fill(0)

        if (noteCounter[i] > 200) {
            // num of perefered notes 
            const prfrdNotes = Math.floor(atmAmount / notePrfrn)

            let notePrfrnIndex = notes.indexOf(notePrfrn)
            // console.log(notePrfrnIndex);
            notes.splice(notePrfrnIndex, 1);
            let noteCount = notePrfrn * limitValue
            // console.log(noteCount);
            const newCount = noteCounter.unshift(noteCount);
            // console.log(newCount);
            noteCounter[i] = Math.floor(atmAmount / notes[i])
            atmAmount = atmAmount - (noteCounter[i] * notes[i])

            // console.log(noteCount);
            console.log(`${notes[i]} : ${noteCounter[i]}`);
        }
        else {

            //counting notes
            for (let i = 0; i < notes.length; i++) {

                noteCounter[i] = Math.floor(atmAmount / notes[i])
                atmAmount = atmAmount - (noteCounter[i] * notes[i])

                console.log(`${notes[i]} : ${noteCounter[i]}`)
                // noteCounter.splice
                // console.log(noteCounter.splice(0, 1))

            }

        }
    }


    // // condition fo distribution
    // if (prfrnValue > 200) {
    //     if (NotePrfrn === 50) {
    //         const leftValue = prfrnValue - limitValue
    //         console.log(`${NotePrfrn} = ${limitValue}`);
    //         const prfrnValAmt = NotePrfrn * limitValue
    //         const remainingVal = atmAmount - (prfrnValAmt);
    //         const fiveHndNOtes = Math.floor(remainingVal / 500);
    //         console.log(`500 = ${fiveHndNOtes}`);
    //         const fiveHnNotesamt = 500 * fiveHndNOtes
    //         const remainingvalue2 = remainingVal - fiveHnNotesamt
    //         const oneHndNotes = Math.floor(remainingvalue2 / 100)
    //         console.log(`100 = ${oneHndNotes}`);
    //         const oneHndNoteVal = oneHndNotes * 100
    //         const remaining3 = remainingvalue2 - oneHndNoteVal
    //         const twentyNotes = Math.floor(remaining3 / 20)
    //         console.log(`20 = ${twentyNotes}`);
    //         const twentyNoteVal = twentyNotes * 20
    //         const remaining4 = remaining3 - twentyNoteVal
    //         const tenNOtes = Math.floor(remaining4 / 10)
    //         console.log(`10 = ${tenNOtes}`);
    //         const tenNoteval = tenNOtes * 10
    //         const remaining5 = remaining4 - tenNoteval
    //         const fiveNotes = Math.floor(remaining5 / 5)
    //         console.log(`5 = ${fiveNotes}`);
    //         const fiveNoteVal = fiveNotes * 5
    //         const remaining6 = remaining5 - fiveNoteVal
    //         const oneNotes = Math.floor(remaining6 / 1)
    //         console.log(`1 = ${oneNotes}`);

    //     }

    // }
}




//     const notes = [500, 100, 50, 20, 10, 5, 1]
//     let noteCounter;



//     if (atmAmount < 100 || atmAmount > 100000) {
//         alert("Amount not allowed")
//     } else {
//         for (let i = 0; i < notes.length; i++) {
//             if (atmAmount >= notes[i]) {
//                 noteCounter = Math.floor(atmAmount / notes[i])
//                 console.log(noteCounter);
//                 atmAmount = atmAmount - noteCounter * notes[i]
//                 console.log(`${noteCounter} : ${notes[i]}`);
//             }
//         }
//     }

