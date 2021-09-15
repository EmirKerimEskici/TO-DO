var list = [];
function pushList() {
    $(".list li").remove();
    console.log(list)
    for (var i = 0; i < list.length; i++) {
        $(".list").append(`
           <li>
               <input class='input btn-bck' value="${list[i].id}" type="checkbox" >
              <label>${list[i].todo}</label>
                <img class="delete-button" src="images/vector.svg" onclick="removeLi(${list[i].id})">
            </li>
       `);}
}
pushList();
$(".inputData").keyup(function (e) {
    if (e.keyCode == 13) {
        if ($(".inputData").val() !== "") {
            var data = {
                id: Date.now(),
                todo: $(".inputData").val(),
                isCompleted: false

            }
            list.push(data);
            $(".inputData").val("");
            pushList();
        } }
});
$("body").on("change", ".btn-bck", function () {
    if (this.checked) {
        list.find(x => x.id === parseInt($(this).val())).isCompleted = true;
    } else {
        list.find(x => x.id == parseInt($(this).val())).isCompleted = false;
    }
    console.log(list)
});
function removeLi(removeItem) {
    list.splice(list.findIndex(x => x.id === parseInt(removeItem)), 1)
    pushList();
}



