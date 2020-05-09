(function ($) {
    $('#citiesTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/cities",
        "columns": [
            { "data": "id" },
            { "data": "Eruption_length_mins" },
            { "data": "Eruption_wait_mins" },
          ]
    } );

})(jQuery);