
<?php

$connection = mysqli_connect('localhost','root','','Book');

if(isset($_POST['send'])){
&placename = $_POST['place name'];
&number = $_POST['number of guests'];
&arrivals = $_POST['arrivals'];
&leaving = $_POST['leaving'];

$request= "insert into Book_Trip(Where To,number, Arrivals, Leaving)values('$placename','$number','$arrivals','$leaving')"
mysqli_query($connection,$request);
header('location:book.php');
}else{
echo'something went wrong please try again';
}

?>