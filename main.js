function startGame() {
    let name = prompt("Hello user, please enter your name: ");
    let anwswer = prompt("Welcome " + name +  ", prepare for a night of thrills and chills.\n Are you ready to start? (Write: Yes or No)")
    if (anwswer == "Yes")
    {   
    let choice1 = prompt("Ok then…\n You are at home, alone at night and the power has gone out so there's no light.\n Your phone is at 7% and you have no way to charge it.\n (a)Do you watch videos to pass time and hope the power comes back on?\n  (b)Do you preserve your phone battery just in case you need a flashlight later?\n (Write: a or b)")
    
        if (choice1 == "a")
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
        alert("Looks like someone is too scared.");
    }
}







function choice_a() {
    alert("our phone is now dead. 45 minutes went by and the power was still off. You think you hear footsteps coming up the stairs and you poke your head out of your room but since you have no light you didn’t see anything. You go back to your room with no worries.\nYou’re hungry and go downstairs for a snack. As you’re opening the fridge door you feel something grab your ankle. A cold and big hand. You kick the hand away but your ankle is bleeding. You can’t even run away but the creature who grabbed you disappeared again. ");
    alert("You have no idea what happened or what the hell just grabbed you.");
    let choice2 = prompt("1) Do you make a run back upstairs to your room to lock yourself inside?\n2) Do you make a run to the door and slam it behind you as you run to safety.\n(Write: 1 or 2)");
    
    if(choice2 == 1)
    {
        alert("As you climb stairs 1-5 you think you’re gonna make it okay. As you climb stairs 6-12, you’re almost there but you hear something chase after you. Four stairs left. It caught your shirt. It’s not letting go as you fight for your life. It is too strong for you and it grabs you and rips you into parts.");
        alert("This is the end for you...");
    }
    else
    {
        alert("You made the right decision. You made it outside barely. You slam the door behind you and the creature isn't smart enough to open the door. You climb your house to trick the monster just in case it can get out.");
    }
}








function choice_b() {
    alert("You are really bored and tired but at least you have a flashlight right? You think you hear footsteps coming up the stairs and you poke your head out of your room with your flashlight on. You panic as you are convinced that you just saw a tall black creature that vanished. You know that someone or something is in your house. You go back to your room worried. You lock your door and your windows.\nYou’re hungry but know that something is lurking inside of your house. You look up and remember that the attic door is above your head so you stand on your drawer and make a break for the attic where you want to look for a place to escape. Anything, even a weapon just in incase. You find an ax which you use to thrash at your roof. You squeeze through and make it onto the roof of your house.");


}
















startGame();