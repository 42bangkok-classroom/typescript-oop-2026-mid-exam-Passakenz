// Write your code below
const input2 = process.argv[2]
const size = Number(input2);


for (let i = 1; i <= size; i++ ){
    let line =``;

    for (let j = 1; j < (size - i + 1); j++ ){
        line +=` `;
    }    

    for (let k = 1; k <= i; k++){
        line +=`${size}`
    }   
    console.log(line);
} 
