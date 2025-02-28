function starting() {


    document.querySelector('.keyboard').innerHTML = '';
    document.querySelector('.word').innerHTML = '';
    document.querySelector('.won_panel').style.display = "none";
    document.querySelector('.lose_panel').style.display = "none";
    document.querySelector('#Hangman_img').src = "1.png";


    
    let keys = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m',];


 let words = ['brick','orange','snow','usa',"apple", "brick", "cloud", "dance", "eagle", "flame", "grape", "house", "igloo", "joker",
  "kite", "lemon", "mirror", "notebook", "orange", "pencil", "queen", "rocket", "snow", "tiger",
  "umbrella", "violin", "whistle", "xylophone", "yogurt", "zebra", "beach", "candle", "dragon", "engine",
  "forest", "guitar", "helmet", "island", "jungle", "king", "lantern", "mountain", "necklace", "ocean",
  "pirate", "quilt", "rainbow", "sunset", "treasure", "unicorn", "volcano", "window", "yacht", "zombie"];





let words_length = words.length;

let word_description = ['something hard that is used to build','a fruit simillar to lemon its is commonly yellow ','a hard white substance that occur in strong cold','strong country in northern america',"A red or green fruit",
  "A small, hard block used for building",
  "A white fluffy thing in the sky",
  "A way to move to music",
  "A large bird with sharp eyes",
  "The bright, hot part of a fire",
  "A small round fruit, often purple or green",
  "A place where people live",
  "A house made of ice",
  "A person who loves to make jokes",
  "A toy that flies in the wind",
  "A sour yellow fruit",
  "A glass that reflects your image",
  "A book for writing notes",
  "A round, juicy fruit and a color",
  "A tool used for writing",
  "A female ruler of a kingdom",
  "A vehicle that flies into space",
  "White frozen water that falls in winter",
  "A big wild cat with orange and black stripes",
  "Used to stay dry in the rain",
  "A small musical instrument with strings",
  "A sound made by blowing air",
  "A musical instrument with wooden bars",
  "A creamy dairy food",
  "A black-and-white striped animal",
  "A sandy place near the ocean",
  "A stick of wax that gives light",
  "A mythical fire-breathing creature",
  "A machine that makes things move",
  "A large area filled with trees",
  "A musical instrument with strings",
  "A hard hat that protects your head",
  "A piece of land surrounded by water",
  "A thick forest with many plants and animals",
  "A male ruler of a kingdom",
  "A light inside a case, often used outside",
  "A very tall landform",
  "A piece of jewelry worn around the neck",
  "A large body of saltwater",
  "A person who sails and steals from ships",
  "A thick, warm blanket made of stitched fabric",
  "A colorful arc in the sky after rain",
  "The time when the sun goes down",
  "Valuable things like gold or gems",
  "A magical horse with a single horn",
  "A mountain that can erupt with lava",
  "An opening in a wall to let in light",
  "A fancy boat used for fun",
  "A walking dead creature in horror stories"];



let random_word = Math.floor(Math.random()* words_length);



let words_slctd = words[random_word].split('');

let words_slctd_discription = word_description[random_word];

document.querySelector('.hint').textContent = words_slctd_discription;

let guessed_word = [];





function validate() {


    let word = document.querySelector('.word')
    let new_word = words_slctd.map(letter => guessed_word.includes(letter)? letter : '_');

   


    
    new_word.forEach(character => {
        
        
    let h1 = document.createElement('h1');
    h1.dataset.category = "word";
    h1.classList.add('word_h1')
    h1.innerHTML = character;

    word.appendChild(h1)

    
    });

    if (new_word.join('') == words_slctd.join('')) {
        // console.log('yes');
        
        checking();
    }

   

    // console.log(new_word);
}




function checking() {

                          

        setTimeout(() => {
            document.querySelector('#victory').play();
            document.querySelector('.won_panel').style.display = "block";
            document.querySelector('.won_panel_img').src='assets/giphy happy.gif';
        }, 500);
        // win_score=0;

        
    
}









// console.log(words_slctd);
// console.log(words_slctd.length);



let keyboard = document.getElementById('keyboard');

let miss_score = 0;

let win_score = 0;


keys.forEach(button => {

    var btn_keys = document.createElement('button');
    btn_keys.innerHTML = button ; 
    keyboard.appendChild(btn_keys);


    btn_keys.addEventListener('click',()=>{

       guessed_word.push(button);


        if (words_slctd.includes(button) ) {

            document.querySelector('#success').play();

            

                win_score++;

        //    checking();
            
        }else{

            document.querySelector('#error').play();

            miss_score++;

            if (miss_score == 6) {
                
                setTimeout(() => {

                    document.querySelector('#buzzer').play();
                    document.querySelector('.lose_panel').style.display = "block";
                    document.querySelector('.lose_panel').style.opacity = 1;
                    document.querySelector('.lose_panel').classList.add('zoom');

                    document.querySelector('.correct_word').textContent = words_slctd.join('');



                                    
                }, 500);

            }

    
            change_img();
            
        }
       
       let word = document.querySelector('.word').innerHTML= '';


       validate();
       
        btn_keys.disabled = true;

        
    })
});

let img_count = 1 ; 

function change_img() {

    if (img_count == 7) {
        img_count = 1;
    }

img_count++;
 var img  = document.querySelector('#Hangman_img');
 
 img.src = `${img_count}.png`;

}



document.querySelector('.close_btn').addEventListener('click',()=>{
    document.querySelector('.won_panel').style.display = "none";
    document.querySelector('.lose_panel').style.display = "none";
});

document.querySelector('.close_btn_won').addEventListener('click',()=>{
    document.querySelector('.won_panel').style.display = "none";
    document.querySelector('.lose_panel').style.display = "none";
});
validate();

}

starting();
