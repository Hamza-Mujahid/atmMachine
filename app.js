// my transaction
const transaction = () => {
    const atmAmount = document.getElementById('atmInput').value;
    console.log(`your requested amount is  ${atmAmount}`);
    const oneThNotes = Math.floor(atmAmount / 1000);
    const oneThNotesAmt = oneThNotes * 1000;
    console.log(`one thousand rupees note ${oneThNotes} = ${oneThNotesAmt} remaining ${atmAmount - oneThNotesAmt}`);
    const fiveHnNotes = Math.floor((atmAmount - oneThNotesAmt) / 500);
    const fiveHnNotesamt = fiveHnNotes * 500
    console.log(`five Hundered notes are ${fiveHnNotes} = ${fiveHnNotesamt} remaing ${atmAmount - (oneThNotesAmt + fiveHnNotesamt)}`);
    const 
    

}
/*
is ko aesa krenge k men sab k lie alg alg function bnaunga ta k ham user se uske psnd k notes nikal sken

*/