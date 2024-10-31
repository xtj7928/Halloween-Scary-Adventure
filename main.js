function startGame() {
    let name = prompt("Hello user, please enter your name: ");
    let anwswer = prompt("Welcome " + name +  ", prepare for a night of thrills and chills. \n Are you ready to start? (Write: Yes or No)")
    if (anwswer == "Yes")
    {   
    let chocie = prompt("Ok then…\n You are at home, alone at night and the power has gone out so there's no light. \n Your phone is at 7% and you have no way to charge it.\n (a)Do you watch videos to pass time and hope the power comes back on? \n  (b)Do you preserve your phone battery just in case you need a flashlight later? \n (Write: a or b)")
    
        if (choice == "a")
        {
            choice_a();
        }
        else
        {
            choice_b()
        }
    }
    else
    {
        let ending = prompt("Looks like someone is too scared.");
    }
}

function choice_a() {
    let choiceA = prompt("Your phone is now dead. 45 minutes went by and the power was still off. You think you hear footsteps coming up the stairs and you poke your head out of your room but since you have no light you didn’t see anything. You go back to your room with no worries. ");
}

function choice_b() {
    let choiceB = prompt("You are really bored and tired but at least you have a flashlight right? You think you hear footsteps coming up the stairs and you poke your head out of your room with your flashlight on. You panic as you are convinced that you just saw a tall black creature that vanished. You know that someone or something is in your house. You go back to your room worried. You lock your door and your windows.");
}
















startGame();