<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
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