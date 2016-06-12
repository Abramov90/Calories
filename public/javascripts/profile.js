// A $( document ).ready() block.
 $(function() {
    $('#exampleInputPassword0').datepicker({
        format: 'mm-dd-yyyy',
        todayBtn: 'linked'
    });

    $(".btn-default").on("click", function(e){
        e.preventDefault();
        var date = $("#exampleInputPassword0").val();

        var data = {
            "date": date
        }

        $.ajax({
            url: "/profile",
            method: "POST",
            data: data,
            complete: function(data){
                $("table tbody").html($(data.responseText).find("table tbody").html());
            }
        });
    });

    function click(e) {
        var userId = $(this).data("id");

        $.ajax({
            url: "/profile",
            method: "DELETE",
            data: {
                "id": userId
            },
            complete: function(data){
                $("table tbody").html($(data.responseText).find("table tbody").html());
                $("table .btn-danger").on("click", click);
            }
        });
    }

    $(".btn-danger").on("click", click);
});