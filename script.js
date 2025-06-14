//your JS code here. If required.
const line=document.getElementById("line");
let angle=0;
setInterval(()=>
	{
		angle += 1;// increase angle
		line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; 
	},20)
