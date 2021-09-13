var list = [];
function showList() {
    $(".list li").remove();
    for (var i = 0; i < list.length; i++) {
        $(".list").append(`
<<<<<<< HEAD
           <li>
               <input class='input' type="checkbox" class='btn-bck'>
              <label>${list[i]}</label>
                <img class="delete-button" src="images/vector.svg" onclick="delData('${list[i]}')">
            </li>
       `);
    }}
showList();
$(".inputData").keyup(function (e) {
    $(".inputData").keyup(function (e) {
        if (e.keyCode == 13) {
            if($(".inputData").val() !== ""){
                list.push($(".inputData").val());
                $(".inputData").val("");
                showList();
            }
        }
    });});
function delData(removeItem) {
    list = jQuery.grep(list, function(value) {
        return value != removeItem;
    });
    showList();
}

=======
             <li>
                  <input class='input' type="checkbox" class='btn-bck'>
                  <label>${data}</label>
                  <img class="delete-button" src="images/vector.svg" alt="">
             </li>
        `);}
});
$("body").on("click", ".delete-button", function () {
    $(this).parent().remove();
});
>>>>>>> e202f67472ce62f871be58a2e575b676b5ce15a0
