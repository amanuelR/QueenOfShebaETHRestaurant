
$(function () {
    $("#options").change(function () {
        if ($(this).val() == "option_one") {
            $("#lunch").show();
            $("#breakfast").hide();
        }

        else if ($(this).val() == "option_two") {
            $("#lunch").hide();
            $("#breakfast").show();
        }
        else {
            $("#lunch").show();
            $("#breakfast").hide();
        }
    });
});