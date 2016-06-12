(function() {
    $('#date').datepicker({
        format: 'mm-dd-yyyy',
        todayBtn: 'linked'
    });

    $(".btn-default").on("click", function(e){
        e.preventDefault();
        var product = $("#product").val();
        var calories = $("#calories").val();
        var name = $("#name").val();
        var date = $("#date").val();
        
        if (!(product && calories && name && date)) return false;

        $.ajax({
            url: "/main",
            method: "POST",
            data: {
                "product": product,
                "calories": calories,
                "name": name,
                "date": date
            },
            complete: function(){
                $(".alert-success").removeClass("hidden");
                setTimeout(function(){
                    $(".alert-success").addClass("hidden");
                }, 1000);
            }
        });
    })
})();