document.getElementById('head').addEventListener('mouseenter', e => {
    document.getElementById('head').style.backgroundSize = "110%";
  });
  document.getElementById('head').addEventListener('mouseleave', function() {
    document.getElementById('head').style.backgroundSize = "100%";
  });