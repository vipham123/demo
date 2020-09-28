// JavaScript Document  <div class="bar learning" data-skill="AI"></div>
   // Progress bars
     $(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });