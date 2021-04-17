const $button = $("button");
const $equal = $("#equal");
const $input = $("#myText");

$button.click(function(){
    let aVal = $(this).val();
    $input.val($input.val() + aVal);
});

let aResult = (eval($input.val()))

$equal.click(function(){
    let aResult= (eval($input.val()));
    console.log(aResult);
    $input.val($input.val() + aResult);
});




