// my transaction
const transaction = () => {
    const NotePrfrn = parseInt(document.getElementById('prfrn').value);
    const atmAmount = parseInt(document.getElementById('atmInput').value);

    // to get number of notes that are requested
    const prfrnValue = atmAmount / NotePrfrn
    // console.log(`prfrnValue ${prfrnValue}`);

    const notes = [500, 100, 50, 20, 10, 5, 1]
    let noteCounter ;
    // limit of notes
    const limitValue = 200

    for (let i = 0; i <= noteCounter.lenght; i++){
        
    }

        // condition fo distribution
        if (prfrnValue > 200) {
            if (NotePrfrn === 50) {
                const leftValue = prfrnValue - limitValue
                console.log(`${NotePrfrn} = ${limitValue}`);
                const prfrnValAmt = NotePrfrn * limitValue
                const remainingVal = atmAmount - (prfrnValAmt);
                const fiveHndNOtes = Math.floor(remainingVal / 500);
                console.log(`500 = ${fiveHndNOtes}`);
                const fiveHnNotesamt = 500 * fiveHndNOtes
                const remainingvalue2 = remainingVal - fiveHnNotesamt
                const oneHndNotes = Math.floor(remainingvalue2 / 100)
                console.log(`100 = ${oneHndNotes}`);
                const oneHndNoteVal = oneHndNotes * 100
                const remaining3 = remainingvalue2 - oneHndNoteVal
                const twentyNotes = Math.floor(remaining3 / 20)
                console.log(`20 = ${twentyNotes}`);
                const twentyNoteVal = twentyNotes * 20
                const remaining4 = remaining3 - twentyNoteVal
                const tenNOtes = Math.floor(remaining4 / 10)
                console.log(`10 = ${tenNOtes}`);
                const tenNoteval = tenNOtes * 10
                const remaining5 = remaining4 - tenNoteval
                const fiveNotes = Math.floor(remaining5 / 5)
                console.log(`5 = ${fiveNotes}`);
                const fiveNoteVal = fiveNotes * 5
                const remaining6 = remaining5 - fiveNoteVal
                const oneNotes = Math.floor(remaining6 / 1)
                console.log(`1 = ${oneNotes}`);

            }

        }
}

