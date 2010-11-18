
// JScript File

      var map = null;
      var hasInnerText;
      var RouteAbbr;
      var RefreshRate;
      var StopDisplayTypeDesc = 2;
      function Load()
      {      
         var parameters = parms.split('*');
         var unit = parameters[0];
         var legs = parameters[1].split('|');   
         var penParms = parameters[2].split(',');
         var latLons = legs[0].split(';');        
         var coordinates = latLons[0].split(' ');
         InitMap(coordinates[0],coordinates[1], unit);
         for (i=0; i<legs.length-1;i++)                                 
           DrawPoly(i, legs[i],penParms[0], penParms[2]);     
              
         InitializeLayers();
         setInterval('UpdateMap()',RefreshRate);
      }   
      function InitializeLayers()
      {          
        var dataArray = initInfoString.split('*');
        RouteAbbr = dataArray[0];
        RefreshRate = parseInt(dataArray[1]);
        StopDisplayTypeDesc = dataArray[2];
        var timestamp = dataArray[3];
        AddStops(dataArray[6], true, 0 ); //minor stops
        
        AddStops(dataArray[4], true, 1 ); //major stops   
        //*** use textContent for firefox, use innerText for IE
        var myTextElem = document.getElementById ('MyText');
        hasInnerText =
            (document.getElementsByTagName("body")[0].innerText != undefined) ? true : false;
        if(!hasInnerText)            
          myTextElem.textContent = "Last updated "+timestamp;      
        else
          MyText.innerText = "Last updated "+timestamp;      
        //***                   
        AddVehicles(dataArray[5]);      
     }
      function UpdateMap()
      {        
          xhReq = new XMLHttpRequest();          
          xhReq.open("GET","UpdateWebMap.aspx?u="+RouteAbbr+"&timestamp="+new Date().getTime(), false);
          xhReq.send(null);
          var serverResponse = xhReq.responseText;
         
          var dataArray = serverResponse.split('*');
          var timestamp = dataArray[0];    
          if (dataArray[3]!="")
            AddStops(dataArray[3], false, 0); 
                 
          AddStops(dataArray[1], false, 1);
          
          var myTextElem = document.getElementById ('MyText');
          if(!hasInnerText)            
            myTextElem.textContent = "Last updated "+timestamp;      
          else
            MyText.innerText = "Last updated "+timestamp;
          AddVehicles(dataArray[2]);
          
      }