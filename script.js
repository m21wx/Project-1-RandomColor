		
		
		let title = document.getElementById('title');
	
		let contentPS = document.querySelector('.btn p span');
		let contentB = document.querySelector('.btn button');
		let colorArr =['#FF0000' ,'green' , '#00ff00', 'blue']
		let colorLingth = colorArr.length - 1;
			contentB.addEventListener('click',()=>{
				let colorRandom = Math.floor(Math.random() * colorLingth )
			     document.querySelector('section').style.backgroundColor = colorArr[colorRandom]
				 contentPS.innerHTML =` ${colorArr[colorRandom]}`;
					
			})
			
			
			let tableTitle = document.querySelector('table caption');
	
			function a(){
				title.innerHTML = 'كيفية إنشاء لون عشوائي للصفحة ';
				tableTitle.innerHTML = 'المفاهيم الأساسية المشمولة';
			}
			function le(){
				title.innerHTML = ' How to create a random color for the page';
				tableTitle.innerHTML = 'Key concepts covered';
			}
			
			let selectOp = Array.from(document.querySelectorAll('#select-id option'));
			
				selectOp.forEach((e)=>{

					if(e.value == 'a' ){
						a()
					}
				})
				
				console.log(selectOp)
				selectOp.forEach((e)=>{
					e.onclick = (g)=>{
						console.log(g.target)
					}
				})