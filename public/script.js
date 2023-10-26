const list = document.getElementById("list");
        const input = document.getElementById("input");
        const btn = document.getElementById("btn");
        btn.onclick = function exec(){
            const li = document.createElement('li');
            li.innerText=input.value;
            list.appendChild(li);
            if(input.value.trim() !== ""){
                list.appendChild(li);
                input.value = "";
            }

        }