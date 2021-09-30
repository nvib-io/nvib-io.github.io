<link rel="stylesheet" href="/assets/css/styles.css">

test

<script>
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "/assets/menu.html", false);
  ajax.send();
  document.footer.innerHTML += ajax.responseText;
</script>
