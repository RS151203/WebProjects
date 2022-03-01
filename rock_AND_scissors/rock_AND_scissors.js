function change_robot_hand() {
    let random_number = Math.floor((Math.random() * 3) + 1)
    if (random_number == 1) {
        document.getElementById("robot_hand_img").src = "robot_rock.jpg"
    }
    else if (random_number == 2) {
        document.getElementById("robot_hand_img").src = "robot_paper.jpg"
    }
    else {
        document.getElementById("robot_hand_img").src = "robot_scissor.jpg"
    }
    return random_number

}
let ai_point
let ai_points
let human_point
let human_points
function ai_wins() {
    ai_point = $("#ai_points").val()
    ai_points = parseInt(ai_point) + 1
    $("#ai_points").val(ai_points)
    human_point = $("#player_points").val()
    human_points = parseInt(human_point) + 0 //use val instead of text extract value then update
    $("#player_points").val(human_points)
    $("#round_winner").text("AI WINS")
}
function draw() {
    ai_point = $("#ai_points").val()
    ai_points = parseInt(ai_point) + 0
    $("#ai_points").val(ai_points)
    human_point = $("#player_points").val()
    human_points = parseInt(human_point) + 0
    $("#player_points").val(human_points)
    $("#round_winner").text("TIE")
}
function player_wins() {
    ai_point = $("#ai_points").val()
    ai_points = parseInt(ai_point) + 0
    $("#ai_points").val(ai_points)
    human_point = $("#player_points").val()
    human_points = parseInt(human_point) + 1
    $("#player_points").val(human_points)
    $("#round_winner").text("PLAYER WINS")
}


$(document).ready(function () {
    $("#start_game").click(function () {
        document.getElementById("intro_name").style.display = "none"
        document.getElementById("intro_rounds").style.display = "none"
        document.getElementById("player_name").style.display = "none"
        document.getElementById("submit_player_name").style.display = "none"
        document.getElementById("total_number_of_rounds").style.display = "none"
        document.getElementById("submit_total_number_of_rounds").style.display = "none"
        document.getElementById("start_game").style.display = "none"
        document.getElementById("welcome_player").style.display = "block"
        document.getElementById("number_of_rounds").style.display = "block"
        document.getElementById("rounds_played").style.display = "block"
        document.getElementById("ai_block").style.display = "inline-block"
        document.getElementById("player_block").style.display = "inline-block"
        let player = $("#player_name").val()
        let rounds = $("#total_number_of_rounds").val()
        if (player == "") {
            alert("Please enter valid name and  please don't keep it empty leader.")
        }
        else {
            let welome_msg = "Let's Rock And Roll Leader " + player + ":-)"
            $("#welcome_player").text(welome_msg)
        }

        if (rounds == "") {
            alert("Please enter valid number of rounds and  please don't keep it empty leader.")
        }
        else {
            let number_of_rounds = "Total Number Of Rounds To Be Fought Is  " + rounds
            $("#number_of_rounds").text(number_of_rounds)
        }
        let name_of_player = $("#player_name").val()
        $("#player_title").text("LEADER " + name_of_player)
    })

    let no_of_time_rock_button_pressed = 0
    $("#rock").click(function () {
        document.getElementById("human_hand_img").src = "rock_img.jpg"
        let num = change_robot_hand()
        if (num == 2) {
            ai_wins()
        }
        else if (num == 1) {
            draw()
        }
        else {
            player_wins()
        }
        no_of_time_rock_button_pressed += 1
        $("#rock_points").val(no_of_time_rock_button_pressed)
    })

    let no_of_time_paper_button_pressed = 0
    $("#paper").click(function () {
        document.getElementById("human_hand_img").src = "paper_img.jpg"
        let num = change_robot_hand()
        if (num == 3) {
            ai_wins()
        }
        else if (num == 2) {
            draw()
        }
        else {
            player_wins()
        }
        no_of_time_paper_button_pressed += 1
        $("#paper_points").val(no_of_time_paper_button_pressed)
    })

    let no_of_time_scissor_button_pressed = 0
    $("#scissor").click(function () {
        document.getElementById("human_hand_img").src = "scissor_img.jpg"
        let num = change_robot_hand()
        if (num == 1) {
            ai_wins()
        }
        else if (num == 3) {
            draw()
        }
        else {
            player_wins()
        }
        no_of_time_scissor_button_pressed += 1
        $("#scissor_points").val(no_of_time_scissor_button_pressed)
    })

    $("#rock,#paper,#scissor").click(function () {
        let no_of_rock = parseInt($("#rock_points").val())
        let no_of_paper = parseInt($("#paper_points").val())
        let no_of_scissor = parseInt($("#scissor_points").val())
        let points_altogether = no_of_rock + no_of_paper + no_of_scissor
        let round = document.getElementById("total_number_of_rounds")
        let rounds = round.value
        if (points_altogether == rounds) {
            let final_ai_points = parseInt($("#ai_points").val())
            let final_player_points = parseInt($("#player_points").val())
            document.getElementById("ai_block").style.display = "none"
            document.getElementById("player_block").style.display = "none"
            document.getElementById("welcome_player").style.display = "none"
            document.getElementById("number_of_rounds").style.display = "none"
            document.getElementById("rounds_played").style.display = "none"
            let round_played_count = parseInt($("#round_played_count").text())
            let final_count = round_played_count + 1
            $("#round_played_count").text(final_count)
            if (final_player_points > final_ai_points) {
                $("#round_winner").text("PLAYER WINS THE MATCH-:)")
            }
            else if (final_ai_points > final_player_points) {
                $("#round_winner").text("AI WINS THE MATCH-:(")
            }
            else {
                $("#round_winner").text("DRAW")
            }
        }
        else {
            $("#round_played_count").text(points_altogether)
        }
    })
})
