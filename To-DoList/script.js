const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".TODO-LIST");

btn.addEventListener("click", () => {

    const value = inp.value;

    if (value.trim() === "") return;

    todoBox.innerHTML += `
        <div class="li">
            <h3>${value}</h3>

            <div>
                <button class="btn edit">Edit</button>
                <button class="btn del">Delete</button>
            </div>
        </div>
    `;

    inp.value = "";
});

// EDIT AND DELETE
todoBox.addEventListener("click", (e) => {

    // DELETE
    if (e.target.classList.contains("del")) {
        e.target.closest(".li").remove();
    }


    // EDIT
    if (e.target.classList.contains("edit")) {

        const task = e.target.closest(".li");

        const text = task.querySelector("h3").textContent;

        inp.value = text;

        task.remove();
    }
});