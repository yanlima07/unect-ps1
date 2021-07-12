
const modal = document.querySelector(".modal")
const btn = document.querySelector(".btn")
const aplicar = document.querySelector(".aplicar")

function exibirModal()
{
    const modal = document.querySelector('.modal');
    modal.style.display = 'flex';
}

function esconderModal()
{
    const modal = document.querySelector('.modal');
    window.onclick = (event) => {
        if(event.target == modal)
            modal.style.display='none';
    }

}

btn.addEventListener("click", () => {
    exibirModal();
});

aplicar.addEventListener("click", () => {
    esconderModal();
});

esconderModal();