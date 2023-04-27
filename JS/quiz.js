function checkAnswer() {
  var answer = document.querySelector('input[name="planet"]:checked').value;
  var result = document.getElementById("result");
  if (answer == "1") {
    result.innerHTML = "Mercur poate fi cea mai apropiată planetă de Soare, dar nu este la fel de fierbinte ca Venus. Mercur are o atmosferă ușoară care permite căldurii să scape, spre deosebire de Venus, care are o atmosferă densă care captează căldura. Partea lui Mercur care se confruntă cu Soarele suferă temperaturi de aproximativ 427 °C, în timp ce partea alternativă poate fi la fel de rece ca -173 °C.  Venus are o temperatură medie de 427 °C, deoarece atmosfera sa densă circulă căldura uniform pe întreaga planetă.";
  } else if (answer == "2") {
    result.innerHTML = "Presiunea atmosferică asupra planetei Venus este de 92 de ori mai mare decât cea a Pământului. Din cauza acesteia asteroizi mici sunt zdrobiti atunci când intră în atmosfera sa de aceea Venus nu prezinta cratere mici. Presiunea resimțită pe suprafața lui Venus este echivalentă cu cea adâncă de sub mare de pe Pământ.";
  } else if (answer == "3") {
    result.innerHTML = "Cu toții călătorim în jurul Soarelui cu o viteză medie de 107.182 de kilometri pe oră. Și, în același timp, ne învârtim și cu o viteză enormă – care ar putea fi de 1000 de mile pe oră, în funcție de poziția voastră pe Pământ.";
  } else if (answer == "4") {
    result.innerHTML = "Știați că babilonienii antici au creat pentru prima dată săptămâna și au împărțit-o în șapte zile? Ei au numit fiecare zi a săptămânii pe cele șapte corpuri cunoscute de pe cer: Soarele, Luna, Marte, Mercur, Venus, Jupiter și Saturn. Prin urmare, marți este ziua lui Marte";
  } else if (answer == "5") {
    result.innerHTML = "Interiorul lui Jupiter este realizat din rocă, metal și compuși ai hidrogenului. Sub atmosfera masivă a lui Jupiter (care este făcută în principal din hidrogen), există straturi de gaz de hidrogen comprimat, hidrogen metalic lichid și un miez de gheață, rocă și metale.";
  } else if (answer == "6") {
    result.innerHTML = "Viitoarele misiuni pe Saturn includ Misiunea Sistemului Titan Saturn (TSSM), care va explora Saturn și sateliții săi Titan și Enceladus. Cu un cost de 2,5 miliarde de dolari și o lansare estimată în 2020, misiunea include circumnavigarea titanului cu un balon cu aer cald";
  } else if (answer == "7"){
    result.innerHTML = "Uranus face o călătorie în jurul Soarelui la fiecare 84 de ani pământeni. În timpul unor părți ale orbitei sale, unul sau altul dintre polii săi se îndreaptă direct spre Soare și obține aproximativ 42 de ani de lumină directă a soarelui. În restul timpului sunt în întuneric.";
  } else if (answer == "8"){
    result.innerHTML = "Neptun are un climat foarte activ. Furtunile mari se învârt prin atmosfera sa superioară, iar vânturile de mare viteză urmăresc în jurul planetei până la 600 de metri pe secundă. Una dintre cele mai mari furtuni văzute vreodată a fost înregistrată în 1989. Se numea Marea Pată Întunecată. A durat aproximativ cinci ani.";
  }

  var quiz = document.getElementById("quiz");
  quiz.style.backgroundColor = "rgb(225,225,225)";
}
