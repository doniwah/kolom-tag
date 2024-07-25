const ul= document.querySelector("ul"),
input= document.querySelector("input"),
tagNumb= document.querySelector(.details span);

let maxTags=10, tags=["Sarjana IT", "Pemrograman Web"];

CountTag();
createTag();

function CountTag(){
    input.focus();
    tagNumb.innerText= maxTags- tags.length;
}
function createTag()
{
    ul.querySelectorAll("li").forEach(li=>li.remove());
    tags.slice().reverse().forEach(tags=>(
        let liTag=`<li>${tag}<i class="uit uit-multiply" onclick="remove(this. '${tag}')"></i></li>`
    ))
}