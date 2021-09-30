<link rel="stylesheet" href="/assets/css/styles.css">
<script>
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "/assets/menu.html", false);
  ajax.send();
  document.getElementById('menu').innerHTML += ajax.responseText;
</script>
<div id="menu"></div>

test
