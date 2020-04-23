<?php

  include 'database.php';

  $all_data = [];
  $counter = 1;

  if (($counter == 1) && (${'data_milestone'.$counter} !== null)) {
    // print_r(${'data_milestone'.$counter});
    // array_push($all_data, ${'data_milestone'.$counter});
    $all_data["milestone" . $counter] = ${'data_milestone'.$counter};
    $counter++;
  }

  if ($counter > 1) {
    while (${'data_milestone'.$counter} !== null) {
      // print_r(${'data_milestone'.$counter});
      // array_push($all_data, ${'data_milestone'.$counter});
      $all_data["milestone" . $counter] = ${'data_milestone'.$counter};
      $counter++;
    }
  }

  echo(json_encode($all_data));

  // var_dump($data);
  // var_dump(json_encode($data));
  // header('Content-Type: application/json');

  // echo json_encode($data);

?>
