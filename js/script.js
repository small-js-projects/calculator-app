// caches element references - parts of the dom we need to touch

const $button = $("button");
const $equal = $("#equal");
const $input = $("#myText");
const $reset = $("#reset");

// This function renders a clicked button's value to input field

$button.click(function(){
    let aVal = $(this).val();
    $input.val($input.val() + aVal);
});

// This function renders the evaluated result of the
// input field values and clears the input field upon clicking the "equal" button

$equal.click(function(){
    let aResult= (eval($input.val()));
    $input.val('');
    console.log(aResult);
    $input.val($input.val() + aResult);
});

// this function clears/resets all input values from the input field
$reset.click(function(){
    $input.val('');
});


