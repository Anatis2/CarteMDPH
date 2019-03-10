<!DOCTYPE html>

<html>
    
    <head>
        <meta charset="UTF-8">
        <title>Carte MDPH</title>
        <link rel="stylesheet" type="text/css" href="css/cssCarteMDPH.css"/>
        <link rel="stylesheet" type="text/css" media="screen and (max-width: 1540px)" href="css/cssCarteMDPH_Petit.css"/>
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script type="text/javascript" src="carteMDPH.js"></script>
        
    </head>
    
    <body>
        
        <div class="mapAndInfo">
            
            <div class="map">
                
                <?php
                    //include('CarteMDPH.svg');
                    echo file_get_contents('CarteMDPH.svg' );
                ?>
                
            </div>
            
            <div class="infos">

                <h3>Cliquez sur un département pour avoir les coordonnées de sa MDPH</h3>
                
                <p class="paragrapheBackground">
                    <span id="infoBulle"></span>
                </p>
                
                <p class="paragrapheBackground">
                    <span id="infosDepartement"></span>
                </p>
                
            </div>
            
        </div>
            
    </body>
    
</html>


