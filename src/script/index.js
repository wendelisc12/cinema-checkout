$("document").ready(() => {

    for (var i = 1; i < 21; i++) {
        $(".movie_tickets_select_box_seats_a").append(`<span class="movie_tickets_select_box_seats_seat">A${i}</span>`)
    }
    for (var i = 1; i < 17; i++) {
        if (i == 3) {
            $(".movie_tickets_select_box_seats_b").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 3) {
            $(".movie_tickets_select_box_seats_b").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 15) {
            $(".movie_tickets_select_box_seats_b").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 15) {
            $(".movie_tickets_select_box_seats_b").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }

        $(".movie_tickets_select_box_seats_b").append(`<span class="movie_tickets_select_box_seats_seat">B${i}</span>`)
    }
    for (var i = 1; i < 17; i++) {
        if (i == 3) {
            $(".movie_tickets_select_box_seats_c").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 3) {
            $(".movie_tickets_select_box_seats_c").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 15) {
            $(".movie_tickets_select_box_seats_c").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 15) {
            $(".movie_tickets_select_box_seats_c").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }

        $(".movie_tickets_select_box_seats_c").append(`<span class="movie_tickets_select_box_seats_seat">C${i}</span>`)
    }
    for (var i = 1; i < 17; i++) {
        if (i == 3) {
            $(".movie_tickets_select_box_seats_d").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 3) {
            $(".movie_tickets_select_box_seats_d").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 15) {
            $(".movie_tickets_select_box_seats_d").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 15) {
            $(".movie_tickets_select_box_seats_d").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }

        $(".movie_tickets_select_box_seats_d").append(`<span class="movie_tickets_select_box_seats_seat">D${i}</span>`)
    }
    for (var i = 1; i < 17; i++) {
        if (i == 3) {
            $(".movie_tickets_select_box_seats_e").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 3) {
            $(".movie_tickets_select_box_seats_e").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 15) {
            $(".movie_tickets_select_box_seats_e").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 15) {
            $(".movie_tickets_select_box_seats_e").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }

        $(".movie_tickets_select_box_seats_e").append(`<span class="movie_tickets_select_box_seats_seat">E${i}</span>`)
    }
    for (var i = 1; i < 17; i++) {
        if (i == 3) {
            $(".movie_tickets_select_box_seats_f").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 3) {
            $(".movie_tickets_select_box_seats_f").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 15) {
            $(".movie_tickets_select_box_seats_f").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 15) {
            $(".movie_tickets_select_box_seats_f").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }

        $(".movie_tickets_select_box_seats_f").append(`<span class="movie_tickets_select_box_seats_seat">F${i}</span>`)
    }
    for (var i = 1; i < 17; i++) {
        if (i == 3) {
            $(".movie_tickets_select_box_seats_g").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 3) {
            $(".movie_tickets_select_box_seats_g").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 15) {
            $(".movie_tickets_select_box_seats_g").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }
        if (i == 15) {
            $(".movie_tickets_select_box_seats_g").append(`<span class="movie_tickets_select_box_seats_empty"></span>`)
        }

        $(".movie_tickets_select_box_seats_g").append(`<span class="movie_tickets_select_box_seats_seat">G${i}</span>`)
    }

    for (var i = 1; i < 12; i++) {
        $(".movie_tickets_select_box_seats_h").append(`<span class="movie_tickets_select_box_seats_seat">H${i}</span>`)
    }
    for (var i = 1; i < 10; i++) {
        $(".movie_tickets_select_box_seats_i").append(`<span class="movie_tickets_select_box_seats_seat">I${i}</span>`)
    }


    var tickets = []
    var ticketValue = 5.33

    $(".movie_tickets_select_box_seats_seat ").click(e=>{
        $(e.target).toggleClass("movie_tickets_select_box_seats_seat--selected")
        if(tickets.includes($(e.target).text()) == false){
            tickets.push($(e.target).text())
        }else{
            tickets = tickets.filter(item => item !== $(e.target).text());
        }

        $(".movie_tickets_select_checkout_description_item_ticket").text(tickets.length)
        if(tickets.length == 0){
            $(".movie_tickets_select_checkout_description_item_value").text("0.00")
        }else{
            $(".movie_tickets_select_checkout_description_item_value").text(tickets.length * ticketValue)
        }
        $(".movie_tickets_select_checkout_description_item_seatsSelected").text(tickets)
    })
})

