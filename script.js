   
        let res = document.querySelector('div#result')
        let divs = document.querySelectorAll('div.elements')
        let btn = document.querySelector('button')
        let btnZera = document.getElementById('zera')
        let linha = document.querySelector('div.linhas')

        let enter = document.addEventListener('keypress', (e) => {
            if (e.keyCode == 13) {
                addMatrix()
            }
        })

        btn.addEventListener('click', addMatrix)
        btnZera.addEventListener('click', zeraMatrix)
 

        function addMatrix() {

            res.classList.remove('hide')
            res.innerHTML=""

         let p1
         let p2
         let p3

         let s1
         let s2
         let s3
        
         let sum=0
            //soma diagonal primaria
            divs.forEach(div => {
                
                if(div.dataset.id==1){
                    p1 = Number(div.textContent)
                    div.classList.add('pink')
                }
                if(div.dataset.id==5){
                    p2 =  Number(div.textContent)
                    div.classList.add('pink')
                }
                if(div.dataset.id==9){
                    p3 =  Number(div.textContent)
                    div.classList.add('pink')
                }

             })
            //soma diagonal secundaria
            divs.forEach(div => {
                
            if(div.dataset.id==3){
                s1 = Number(div.textContent)
                div.classList.add('green')
            }
            if(div.dataset.id==5){
                s2 =  Number(div.textContent)
                div.classList.add('green')
            }
            if(div.dataset.id==7){
                s3 =  Number(div.textContent)
                div.classList.add('green')
            }

             })
             //soma de todos elementos
        divs.forEach(div=>{
         sum = sum +  Number(div.textContent)
        })
     
        let sumPrim = p1+p2+p3
        let sumSec = s1+s2+s3
            
      res.innerHTML += `<p>Soma da diagonal primária: ${sumPrim}</p>` 
      res.innerHTML += `<p>Soma da diagonal secundária: ${sumSec}</p>` 
      res.innerHTML += `<p>Soma de todos elementos: ${sum}</p>`      

        
    }

    function zeraMatrix(){
        
        divs.forEach(div=>{
            div.textContent = ""
            div.classList.remove('pink')
            div.classList.remove('green')
        })

        res.classList.add('hide')
        
    }