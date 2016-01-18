<?php
$score = $_GET["score"];
$scorex = explode(":", $score);
$highscore = $scorex[0];
?>
<html>
<head>
<title>Weebe Jello Jumper HighScore</title>
<meta property="og:title" content="Highscore on Jello Jumper is <?echo $highscore;?>!"/>
<meta property="og:image" content="http://weebe.nl/jellojumper/jello.png"/>
<meta property="og:site_name" content="Weebe Game Studio"/>
<meta property="og:description" content="<?echo $highscore;?> is mine new highscore on Jello Jumper! How far do you think you can get? Try it for free!"/>	
</head>
<body>
<meta http-equiv="refresh" content="0;URL=http://www.yoursite.com" />
</body>
</html>