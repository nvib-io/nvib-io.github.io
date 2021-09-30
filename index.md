<link rel="stylesheet" href="/assets/css/styles.css">
<script>
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "/assets/menu.html", false);
  ajax.send();
  document.getElementsByClassName("view").innerHTML += ajax.responseText;
</script>

test
