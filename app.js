var list = [];
function showList() {
    $(".list li").remove();
    for (var i = 0; i < list.length; i++) {
        $(".list").append(`
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