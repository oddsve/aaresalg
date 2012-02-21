<body onLoad="document.myForm.newNumber.focus()">

<?php 
	if ($_POST['newGame']) {
		array($alleTall);	
	} else {
		$alleTall = $_POST['alleTall'];
	}	
?><center><span style='font-size:25em;'>
<?php  
		do {
			$tall = rand(1,$_POST['maxTall']);
		}
		while ( in_array( $tall, $alleTall)); 	
		
		echo $tall;
?>
</span><br>
<?php
	print "Antall runder " . (count($alleTall)+1) . "<br>";
	asort( $alleTall );
	foreach ($alleTall as $value) {
		echo $value . ' ';	
	}
    
?>
<form name=myForm action='index.php' method='post'>
  Makstall <input name=maxTall type=text value="<?php echo $_POST['maxTall'] ?>" ></input>
  <input type=submit name=newNumber value='Nytt tall'>
  <input type=submit name=newGame value='Ny omgang'>
<?php 
	foreach ($alleTall as $value) {
		echo '<input name="alleTall[]" type=hidden value="'.$value.'"></input>';
	}
?>
<input name="alleTall[]" type=hidden value="<?php echo $tall ?>"></input>
</form></center>
 
 
