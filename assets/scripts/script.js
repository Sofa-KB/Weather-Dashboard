    var currentDate = moment().format('llll')
    $('#currentDate').text(currentDate)
    
    function weatherSearch() {
        event.preventDefault()
        var searchQuery = $('#search').val()
        var APIKey = 'aa46a7af9f0ebfa98b879e10000350af';
        var APIUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + searchQuery + '&appid=' + APIKey;
  
        $.ajax({
          url: APIUrl,
          method: "GET"
        }).then(function (response) {
          console.log(response)
          var temp1 = (response.list[0].main.temp - 273) * 1.8 + 32
          var temp2 = (response.list[8].main.temp - 273) * 1.8 + 32
          var temp3 = (response.list[16].main.temp - 273) * 1.16 + 32
          var temp4 = (response.list[24].main.temp - 273) * 1.8 + 32
          var temp5 = (response.list[32].main.temp - 273) * 1.8 + 32
          var humidity1 = response.list[0].main.humidity
          var humidity2 = response.list[8].main.humidity
          var humidity3 = response.list[16].main.humidity
          var humidity4 = response.list[24].main.humidity
          var humidity5 = response.list[32].main.humidity
          var wind1 = response.list[0].wind.speed
          var wind2 = response.list[8].wind.speed
          var wind3 = response.list[16].wind.speed
          var wind4 = response.list[24].wind.speed
          var wind5 = response.list[32].wind.speed
          var date2 = response.list[8].dt_txt
          var date3 = response.list[16].dt_txt
          var date4 = response.list[24].dt_txt
          var date5 = response.list[32].dt_txt
          var city = response.city.name
          console.log(response.list[8].dt_txt)
         
          $('#city').text(city)

          $('#temp1').text('Temperature: ' + temp1.toFixed(1) + ' °F')
          $('#wind1').text('Wind Speed: ' + wind1 + ' Km/h')
          $('#humidity1').text('Humidity: ' + humidity1 + ' %')

          $('#temp2').text('Temperature: ' + temp2.toFixed(1) + ' °F')
          $('#wind2').text('Wind Speed: ' + wind2 + ' Km/h')
          $('#humidity2').text('Humidity: ' + humidity2 + ' %')
          $('#weatherDate2').text(date2)
          

          $('#temp3').text('Temperature: ' + temp3.toFixed(1) + ' °F')
          $('#wind3').text('Wind Speed: ' + wind3 + ' Km/h')
          $('#humidity3').text('Humidity: ' + humidity3 + ' %')
          $('#weatherDate3').text(date3)
         

          $('#temp4').text('Temperature: ' + temp4.toFixed(1) + ' °F')
          $('#wind4').text('Wind Speed: ' + wind4 + ' Km/h')
          $('#humidity4').text('Humidity: ' + humidity4 + ' %')
          $('#weatherDate4').text(date4)
          

          $('#temp5').text('Temperature: ' + temp5.toFixed(1) + ' °F')
          $('#wind5').text('Wind Speed: ' + wind5 + ' Km/h')
          $('#humidity5').text('Humidity: ' + humidity5 + ' %')
          $('#weatherDate5').text(date5)
        })
      }

      $('#submit').click(function(){
          $('#currentDate').removeClass('hide')

      }) 