let listContainer = $("#inner-container");

$("#btn-submit").on("click", function() {
    let text = $(".text-field")[0].value;
    if (text !== ''){
        listContainer.append(`<li>${text}<span>×</span></li>`);
        $(".text-field")[0].value = '';
        saveData();
    }
});

listContainer.on("click", "li", function() {
    $(this).toggleClass("checked");
    saveData();
});

listContainer.on("click", "span", function() {
    $(this).parent().remove();
    saveData();
});

function saveData() {
    localStorage.setItem("data", listContainer.html())
}

function loadData() {
    let data = localStorage.getItem("data");
    if (data) {
        listContainer.html(data);
    }
}
$(document).ready(function() {
    loadData();
});