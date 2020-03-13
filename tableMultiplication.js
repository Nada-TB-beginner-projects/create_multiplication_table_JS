'use strict';

var table=[];
table.length= prompt('give us your number!');


for(let i=0; i<table.length; i++){
	table[i]=[];
	table[i].length=table.length;
	for( let y=0; y<table.length; y++){
		table[i][y]=(i+1)*(y+1);
		if(y !==i){
			table[i][y]= '<td>'+table[i][y]+'</td>';
		}else{
			table[i][y]= '<td id="red">'+table[i][y]+'</td>';
		}
		
	}
	table[i]='<tr>'+table[i].join('')+'</tr';
	
}

table=table.join(' ');

document.querySelector('tbody').innerHTML=table;




