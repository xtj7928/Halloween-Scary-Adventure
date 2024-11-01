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
    alert("our phone is now dead. 45 minutes went by and the power was still off. You think you hear footsteps coming up the stairs and you poke your head out of your room but since you have no light you didn’t see anything. You go back to your room with no worries.");
    alert("You’re hungry and go downstairs for a snack. As you’re opening the fridge door you feel something grab your ankle. A cold and big hand. You kick the hand away but your ankle is bleeding. You can’t even run away but the creature who grabbed you disappeared again. ");
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
        choice_c();
    }
}








function choice_b() {
    alert("You are really bored and tired but at least you have a flashlight right? You think you hear footsteps coming up the stairs and you poke your head out of your room with your flashlight on. You panic as you are convinced that you just saw a tall black creature that vanished. You know that someone or something is in your house. You go back to your room worried. You lock your door and your windows.\n");
    alert("You’re hungry but know that something is lurking inside of your house. You look up and remember that the attic door is above your head so you stand on your drawer and make a break for the attic where you want to look for a place to escape. Anything, even a weapon just in incase. You find an ax which you use to thrash at your roof. You squeeze through and make it onto the roof of your house.");
    choice_c();
}




function choice_c() {
    alert("Congratulations, if you have made it this far.");
    alert("As you’re on the roof you see the creature burst out of the house as it knocks down the door. You finally get a chance to see what it is, although you don't know what it is because it is all black. The monster rushes down the street doing everything it can to try and find you but you’re good on the roof.");
    alert("You also notice that your neighbourhood has become a dark and scary ghost town. How could this be?");
    let choice3 = prompt("Now you have two options: \n1) You are really hungry and very low on energy. Do you stay put and keep hiding?\n2) Do you make a run for the nearest supermarket to stash up on food?\n(Write: 1 or 2)");

    if (choice3 == 1)
    {
        alert("You feel very weak. You wish you could have something to eat. You sit and think for a while that that sandwich you made this morning might be the last meal you ever ate. Your house isn't even safe anymore. After about what you think was an hour the monster comes back rushing towards your house. You try not to make eye contact with it as you blend in with the roof but it locks eyes with you.");
        alert("Options: Give up, or... Give up. There is no chance for escape anymore. You don’t have energy to run away from it and surrender.");
        alert("This is the end.");
    }
    else
    {
        alert("You make it to the supermarket. Walmart to be specific. You feel insanely relieved and you lay down to catch your breath in the middle of the store. You feel like a little kid again because you’ve never been this happy to see so many items. You wonder to yourself if the monster would be able to find you but to you, it isn’t the biggest worry at the moment. Your tummy feels bad because you haven’t eaten anything so you completely destroy 2 bags of chips and you make yourself a frozen pizza with a microwave you find in the employee room.");
        alert("After eating you feel knocked out. You check the time thinking it would be something like 10 or 11 but it's actually 2 in the morning. You don't believe it. You would do anything to have a nice sleep but you feel really worried.");

        let choice4 = prompt("Now you have two options: \n 1) You feel like the monster might find you hiding in Walmart so you drink 2 energy drinks to force you awake. Therefore you set up traps everywhere. Flammable liquids on the floor, you arrange the shelves in places that force the monster to go into specific places. You have it all laid out. You think that you’re a mastermind like Kevin from Home Alone.\n2) Your fear isn’t as great as your tiredness. It isn't a place like Sleep Country where there are mattresses but you find an inflatable mattress in a box that you inflate and with some XXL hoodies that you lay out you have a makeshift bed. You decide that resting is the best thing you can do in order to have energy to fight off the monster if the time arises.\n(Write 1 or 2)");
        if(choice4 == 1)
        {
            alert("You prepare for the fight of your life or so you think so. Your heart is pounding as you hear the sound of a whistle outside. Its 8:30 right now and the sun is rising.\nYou see the monster in the lot approaching the front door. You assume that the monster needs a dark place to stay in because of the sun outside. You prepare a match to light up the store with the alcohol you poured on the floor to burn and kill the monster. You hide behind the couch you set up to peek over when the monster would come inside. As it walks inside you throw the lighter so hard you get scared it would lose its flame. It lands in the puddle of alcohol under the monster.");
            alert("Insane. You’ve never seen something so bright before. Your eyes hurt as you see the fire cover up the tall figure. The figure shines brighter than the sun. Your ears hurt because you’ve never heard a scream so powerful in your life. Suddenly it goes dark again. You’ve won. The figure turns into ash and then the light of the sun peeks through the windows of the store.");
            alert("You’ve won! Congratulations 😊");
        }
        else
        {
            alert("Dumb idea… Terrible idea. You fell asleep for 6 hours. Almost 7 if it wasn't for the monster who ripped you apart and ate you alive.");
            alert("This is the end.");
        }
    }
}




startGame();