$(document).ready(function() {
  var pozycja = 0;
  var pozycja1 = 0;
  var pozycja2 = 0;
  var szerokosc =0;
  var szerokosc_diva = $("body").css("width");
  var szer_formularza = 0;
  if(szerokosc_diva.length>5){
  szerokosc =  szerokosc_diva.charAt(0)+szerokosc_diva.charAt(1)+szerokosc_diva.charAt(2)+szerokosc_diva.charAt(3);
  }
  else{
  szerokosc =  szerokosc_diva.charAt(0)+szerokosc_diva.charAt(1)+szerokosc_diva.charAt(2);
  }
  //console.log(szerokosc);
  if(szerokosc>280){
      document.getElementById('lista').innerHTML = '</br><li><a href="#">Link</a></li><li><hr /></li><li><a href="#">Link</a></li><li><hr /></li><li><a href="#">Link</a></li><li><hr /></li><li><a href="#">Link</a></li><li><hr /></li><li><a href="#">Link</a></li><li><hr /></li><li><a href="#">Link</a></li></br> ';
  }
  else{
    document.getElementById('lista').innerHTML = '</br><li><a href="#">Lista linków</a></li></br>';
  }
  //zmiana wielkości okna,
  $(window).resize(myHandler);
    function myHandler() {
      szerokosc_diva = $("body").css("width");
      //console.log(szerokosc_diva);
      if(szerokosc_diva.length>5){
        szerokosc =  szerokosc_diva.charAt(0)+szerokosc_diva.charAt(1)+szerokosc_diva.charAt(2)+szerokosc_diva.charAt(3);
      }
      else{
        szerokosc =  szerokosc_diva.charAt(0)+szerokosc_diva.charAt(1)+szerokosc_diva.charAt(2);
      }console.log(szerokosc);
      if(szerokosc>280){
        document.getElementById('lista').innerHTML = '</br><li><a href="#">Link</a></li><li><hr /></li><li><a href="#">Link</a></li><li><hr /></li><li><a href="#">Link</a></li><li><hr /></li><li><a href="#">Link</a></li><li><hr /></li><li><a href="#">Link</a></li><li><hr /></li><li><a href="#">Link</a></li></br> ';
      }
      else{
        document.getElementById('lista').innerHTML = '</br><li><a href="#">Lista linków</a></li></br>';
      }
    }
  //klikniecie, najechanie i opuszczenie elementu lista
  $('#lista').mouseenter(function(){
     $('#zamian').css( "color", "grey");
  });  
  $('#lista').click(function(){
      if(szerokosc<=280){
       document.getElementById('lista').innerHTML = '</br><li><a href="#">Link</a></li><li><hr /></li><li><a href="#">Link</a></li><li><hr /></li><li><a href="#">Link</a></li><li><hr /></li><li><a href="#">Link</a></li><li><hr /></li><li><a href="#">Link</a></li><li><hr /></li><li><a href="#">Link</a></li></br> ';
      }
  });
  $('#lista').mouseleave(function(){
      if(szerokosc<=280){
      document.getElementById('lista').innerHTML = '</br><li><a href="#" class="linki">Lista linków</a></li></br>';
      }
  });
  //najechanie i opuszczenie formularza
  $('#najechanie').mouseenter(function(){
    szer_formularza = $('.formularz').css("width");
    //console.log(szer_formularza);
    szer_formularza =  szer_formularza.charAt(0)+szer_formularza.charAt(1)+szer_formularza.charAt(2);
    //console.log(szer_formularza);
    if(szer_formularza<=290){
      pozycja2=szer_formularza-90;
    }
    else{
      pozycja2=0;
    }
    pozycja=$('.pozycjadiva').position().left;
    if(pozycja2==0){
      pozycja1=200;
    }else{
      pozycja1=pozycja2;
    }
    document.getElementById('odstep').innerHTML = "animuje";
    $('#odstep').stop().animate(
      {
        left:pozycja1
      },1000,
      'linear');
  });

  $('#najechanie').mouseleave(function(){
    document.getElementById('odstep').innerHTML = "Odwróć";
    $('#odstep').stop().animate(
      {
        left: pozycja
      },1000,
      'linear');
  });
  //funkcja do sortowania
  function MySort(alphabet){
    return function(a, b) {
      var index_a = alphabet.indexOf(a[0]),
          index_b = alphabet.indexOf(b[0]);

      if (index_a === index_b){
          if (a < b) {
            return -1;
          } 
          else if (a > b) {
                  return 1;
               }
          return 0;
      } else {
         return index_a - index_b;
        }
    }
  }
  //Przycisk sortowania
  $('#odstep1').click(function(){
      var tablica = new Array(4);
      tablica[0]= $('#imie1').text();
      tablica[1]= $('#imie2').text();
      tablica[2]= $('#imie3').text();
      tablica[3]= $('#imie4').text();
      sorter = MySort('*!@_.()#^&%-=+01234567989aAąĄbBCcĆćdDEeęFfGgHhIiJjKkLlłŁMmNnńŃOoóÓpPRrSsśŚTtuUWwyYZzźŹżŻ');
      tablica.sort(sorter);
      document.getElementById('imie1').innerHTML = tablica[0];
      document.getElementById('imie2').innerHTML = tablica[1];
      document.getElementById('imie3').innerHTML = tablica[2];
      document.getElementById('imie4').innerHTML = tablica[3];
  });
  //Przycisk odwracania wyrazów
  $('#odstep').click(function(){
    $('#podmiana').css( "visibility", "visible");
    if($('#exampleInputEmail2').val()!=""){
      var fieldValue = $('#exampleInputEmail2').val();
      fieldValue = Odwroc(fieldValue);
      document.getElementById('podmiana').innerHTML = fieldValue;
    }
    else
      document.getElementById('podmiana').innerHTML = "zsipW tsket";
  }); 
  //funkcja odwracająca wyrazy
  function Odwroc(str){
      if (str.length == 0)
          return '';
      var wynik = str.charAt(0);
      var zwrot="";
      var zwrotcaly="";
      for (n = 1; n < str.length; ++n){
        if(str.charAt(n)!=" "){
          wynik +=str.charAt(n); 
        }else{
          for (m = wynik.length-1; 0 <= m; m--){
            zwrot += wynik.charAt(m);
          }
          zwrotcaly+=zwrot;
          zwrotcaly+=" ";
          zwrot="";
          wynik="";
        }
      }
      for (m = wynik.length-1; 0 <= m; m--){
        zwrot += wynik.charAt(m);
      }
      zwrotcaly+=zwrot;
      wynik = zwrotcaly;
      return wynik;
  }
});
  