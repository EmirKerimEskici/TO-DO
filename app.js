$(".inputData").keyup(function (e) {
    if (e.keyCode == 13) {
        var data = $(".inputData").val()
        $(".list").append(`
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