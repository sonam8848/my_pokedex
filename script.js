 
    $(function(){
          
        $('button#btn').click(function(){

            var inputText = $('input.poke').val();
           var container = $('div.container');
            var image = $('#image');

                $.ajax({
                type:'GET',
                url:'pokemons.json',
                dataType:'json',
                success: function(data) {     
               
   for (var i in data) {

                 var pokemonName = data[i].name;
                 //var errorBlock = $('.errorMessage');

                if (isNaN(inputText) === true && inputText === data[i].name)  {
                    //errorBlock.text('');
                    image.attr('src', 'https://img.pokemondb.net/artwork/' + pokemonName.toLowerCase() + '.jpg');
                    container.html('Name:'+data[i].name + '<br>' + 'Type:'+data[i].type );

          }

                else if (isNaN(inputText) === false && inputText === i)  {
                    //errorBlock.text('');
                    image.attr('src', 'https://img.pokemondb.net/artwork/' + pokemonName.toLowerCase() + '.jpg');
                    container.html('Name:'+data[i].name + '<br>' + 'Type:'+ data[i].type);
    } 
                 //else {
                    // errorBlock.text('This pokemon does not exist'); }


                

              }
                   }
   
               

                       });
            
          

                             })
                                    });
         