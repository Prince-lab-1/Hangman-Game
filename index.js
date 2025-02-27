function starting() {


    document.querySelector('.keyboard').innerHTML = '';
    document.querySelector('.word').innerHTML = '';
    document.querySelector('.won_panel').style.display = "none";
    document.querySelector('.lose_panel').style.display = "none";
    document.querySelector('#Hangman_img').src = "assets/1.png";


    
    let keys = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','w'];


    let words = ['brick','orange','snow','usa'];





let words_length = words.length;

let word_description = ['something hard that is used to build','a fruit simillar to lemon its is commonly yellow ','a hard white substance that occur in strong cold','strong country in northern america'];



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
    h1.innerHTML = character;

    word.appendChild(h1)

    
    });

   

    // console.log(new_word);
}














// console.log(words_slctd);



let keyboard = document.getElementById('keyboard');

let miss_score = 0;

let win_score = 0;

keys.forEach(button => {

    var btn_keys = document.createElement('button');
    btn_keys.innerHTML = button ; 
    keyboard.appendChild(btn_keys);


    btn_keys.addEventListener('click',()=>{

       guessed_word.push(button);

       console.log(guessed_word);

        if (words_slctd.includes(button)) {

            document.querySelector('#success').play();

                win_score++;

            if (win_score == words_slctd.length) {

                setTimeout(() => {
                    document.querySelector('#victory').play();
                    document.querySelector('.won_panel').style.display = "block";
                    document.querySelector('.won_panel_img').src='assets/giphy happy.gif';
                }, 500);

                
            }
            
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
 
 img.src = `/assets/${img_count}.png`;

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
