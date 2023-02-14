let a="abcde";
let b="cde"

let result="";

if(b.length<a.length)
  {
    
    for(let i=0;i<=a.length-1;i++)
      {
        for(let j=0;j<=b.length-1;j++)
          {
            if(b[j]===a[i])
              result.push(b[j]);
          }
      }
    console.log(result);
  }
