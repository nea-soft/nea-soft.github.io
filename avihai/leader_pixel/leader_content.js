// JavaScript Document

				
//function getReferrerDomain name() {
	// if you want all the url path simply use last_referrer ==document.referrer; instead of all this lines
	//function getReferrerDomain() {
    var refurl = document.createElement('a');
    refurl.href = document.referrer;
    //return url.hostname;
	var refhostname = refurl.hostname;
	
	// if the document refferer is not our domain insert value in last_refferer
	if ((refhostname) != (window.location.hostname)) {
		var hostname_nowwww = refhostname.replace(/^www./, "");		
		var last_referrer = hostname_nowwww;
		//console.log ('the last refferer is'+last_referrer);
	}
	
	else {
		//console.log ('the document.referrer is our domain so last_refferer will be empty');
		var last_referrer = "";
		//console.log ('the last refferer is empty'+last_referrer);	 
	}
	



	//}

//}


	
//////////////// cookie functions //////////////////////////////////////////////////////////////////////
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

/////////////// cookie functions end ////////////////////////////////////////////////////////////////



////////////// start take utm variables from url and save to cookies
  // Parse the URL
  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  // Give the URL parameters variable names
  var c_utm_source = getParameterByName('utm_source');
  var c_utm_medium = getParameterByName('utm_medium');
  var c_utm_campaign = getParameterByName('utm_campaign');
  var c_AgId = getParameterByName('AgId');
  var c_utm_term = getParameterByName('utm_term');
  var c_AdPos = getParameterByName('AdPos');
  var c_utm_content = getParameterByName('utm_content');
  var c_device = getParameterByName('device');
  var c_GeoLoc = getParameterByName('GeoLoc');
  var c_content_site = getParameterByName('content_site');
  var c_lp = getParameterByName('lp');
/////////////////////////////// take variables from url and create cokies from varibles
  if (c_utm_source) {
    createCookie('cc_utm_source',c_utm_source,7);// Set cookie
    createCookie('cc_utm_medium',c_utm_medium,7);// Set cookie
    createCookie('cc_utm_campaign',c_utm_campaign,7);// Set cookie
    createCookie('cc_AgId',c_AgId,7);// Set cookie
    createCookie('cc_utm_term',c_utm_term,7);// Set cookie
    createCookie('cc_AdPos',c_AdPos,7);// Set cookie
    createCookie('cc_utm_content',c_utm_content,7);// Set cookie
    createCookie('cc_device',c_device,7);// Set cookie
    createCookie('cc_GeoLoc',c_GeoLoc,7);// Set cookie
    createCookie('cc_content_site',c_content_site,7);// Set cookie
    createCookie('cc_lp',c_lp,7);// Set cookie
  
  		}
		




  // now get cookies variables and give theme variable names to use later 
  gt_cc_utm_source = readCookie('cc_utm_source');
  gt_cc_utm_medium = readCookie('cc_utm_medium');
  gt_cc_utm_campaign = readCookie('cc_utm_campaign');
  gt_cc_AgId = readCookie('cc_AgId');
  gt_cc_utm_term = readCookie('cc_utm_term');
  gt_cc_AdPos = readCookie('cc_AdPos');
  gt_cc_utm_content = readCookie('cc_utm_content');
  gt_cc_device = readCookie('cc_device');
  gt_cc_GeoLoc = readCookie('cc_GeoLoc');
  gt_cc_content_site = readCookie('cc_content_site');
  gt_cc_lp = readCookie('cc_lp');
  
  
  
  if(gt_cc_utm_source)  {
	  //console.log("have utm_source, not seeking for refferer");
	  //console.log("utm_source:" + gt_cc_utm_source);
	  
	  if (last_referrer) {
	 	 //console.log ("just to let you know that we have but dont use this refferer: " + last_referrer);
	  }
	  
	  
  } else {
	  
		
		//console.log('no utm now checking for last_referrer');
		if (last_referrer) {
			//console.log('utm_source from reff now');
			createCookie('cc_utm_source',last_referrer,7);// Set cookie
			gt_cc_utm_source = readCookie('cc_utm_source');
			} else {
				gt_cc_utm_source = 'direct';
				//console.log ("did not find any refferer so call it direct");
				//console.log("utm_source:" + gt_cc_utm_source);
			}
	
  }
  			
  
    	  console.log("utms:" + gt_cc_utm_source);


  



///////// phones part start /////////////////////////////////////////////////////////////////////////////////////			 

///////// choose the right phone to display /////		 
////////// start from here to switch phones
//////////by the gt_cc_utm_source which tell us
//////////the name of the utm_source correctly
///////// even if it is direct.

//console.log ('the gt is:'+gt_cc_utm_source)
// choose the number to display
//var number_to_display = '09-9999997';

      if (gt_cc_utm_source == 'google_ads') {var number_to_display = '077-1111-101';}
      else if (gt_cc_utm_source == 'facebook') {var number_to_display = '077-1111-102';}
      else if (gt_cc_utm_source == 'facebook.com') {var number_to_display = '077-1111-103';}
      else if (gt_cc_utm_source == 'google.co.il') {var number_to_display = '077-1111-104';}
      else if (gt_cc_utm_source == 'google.com') {var number_to_display = '077-1111-105';}
      else if (gt_cc_utm_source == 'newsletter') {var number_to_display = '077-1111-106';}
      else if (gt_cc_utm_source == 'sms') {var number_to_display = '077-1111-107';}
      else if (gt_cc_utm_source == 'habama') {var number_to_display = '077-1111-108';}
	  else if (gt_cc_utm_source == 'direct') {var number_to_display = '077-1111-109';}
      else {var number_to_display = '077-1111-110';} 
	  


// the base number we want to replace in the site
var base_number_to_replace = '03-1111111';
var footer_number_to_replace = '03-2222222';





//////////////////////////  phone replacement start

/// replace the base number in the body test
function GReplacePhoneTxt(rnew) {
        jQuery("span, p, h1, h2, h3, h4").each(function() {
            //replace the text 
            var rep = jQuery(this).html();
            rep = rep.replace(base_number_to_replace, rnew);
            jQuery(this).html(rep);
            //alert("found");
          //
        });
      }

//do it
GReplacePhoneTxt(number_to_display);


// from wp - replace the base numbers in links (href)
function GReplacePhoneLink(rnew) {
		  //var basenum = base_number_to_replace;
          var newnum = rnew;
        jQuery('a[href^="tel:'+base_number_to_replace+'"]').each(function() {
          //check if its base number
          //console.log('base number is: ' + base_number_to_replace,'  new number is: ' + rnew);
            //replace the link href
            jQuery(this).attr('href', 'tel:'+newnum);
            //replace the link text 
            var rep = jQuery(this).html();
            rep = rep.replace(base_number_to_replace, rnew);
            jQuery(this).html(rep);
            //alert("found");
          //
        });
      }
//do it
 GReplacePhoneLink(number_to_display);


/// replace the footer number
function GReplaceFooterPhoneTxt(rnew) {
        jQuery("p").each(function() {
            //replace the text 
            var rep = jQuery(this).html();
            rep = rep.replace(footer_number_to_replace, rnew);
            jQuery(this).html(rep);
            //alert("found");
          //
        });
      }

//do it
GReplaceFooterPhoneTxt(number_to_display);

//////////////////////////  phone replacement end



//////////////////// phone pixel with cookie data
   

            //<![CDATA[
            var MSQ_cmds = MSQ_cmds || [];
            MSQ_cmds.push(['ttl', 1000]);
            MSQ_cmds.push(['p', [{
                'maskyoo': number_to_display,
                'utm_source': gt_cc_utm_source,
                'utm_campaign': gt_cc_utm_campaign,
                'AgId': gt_cc_AgId,
                'utm_term': gt_cc_utm_term,
                'AdPos': gt_cc_AdPos,
                'utm_content': gt_cc_utm_content,
                'device': gt_cc_device,
                'GeoLoc': gt_cc_GeoLoc,
                'utm_medium': gt_cc_utm_medium,
                'content_site': gt_cc_content_site,
                'theurl': decodeURIComponent(window.location.href),
				'lp': gt_cc_lp
            }]]);

            (function() {
                var _owa = document.createElement('script');
                _owa.type =
                    'text/javascript';
                _owa.async = true;
                _owa.src =
                    'https://s3.eu-central-1.amazonaws.com/maskyoo-cdn/msq.tracker.js';
                var _owa_s = document.getElementsByTagName('script')[0];
                _owa_s.parentNode.insertBefore(_owa, _owa_s);
            }());
            //]]>

/////////////////////////////////////////////phone pixel end


///////////////////////////// phones part end //////////////////////////////////////////////////////////////////////////








///////////////////////////// form part start //////////////////////////////////////////////////////////////////////////


////////////////////// take the utm data from cookies to add later with form data

       window.leader_data = {
            'utm_source': gt_cc_utm_source,
            'utm_campaign': gt_cc_utm_campaign,
            'AgId': gt_cc_AgId,
            'utm_term': gt_cc_utm_term,
            'AdPos': gt_cc_AdPos,
            'utm_content': gt_cc_utm_content,
            'device': gt_cc_device,
            'GeoLoc': gt_cc_GeoLoc,
            'utm_medium': gt_cc_utm_medium,
            'content_site': gt_cc_content_site,
			'theurl': decodeURIComponent(window.location.href),
			'lp': gt_cc_lp
             };   
			 

/// form type A - contact forms submition
/// identify the form by class name
$( "#btn-transfer" ).click(function( event ) {
  //if ( $( "input:first" ).val() === "ggg" ) {
  if ( $( "#user_name" ).val().length > 1 ) {
	  // show validate succesfuly text and proceed to sending tasks
    //$( "span" ).text( "Validated..." ).show();
	
	//leader api
     var obj = $.extend({}, window.leader_data);
     obj.Fname = $("#user_name").val();
     //obj.Phone = $("#form_pre_phone").val() + $("#phone").val(); // in case you seperate prefix and phone in your form
	 obj.Phone = $("#user_phone-prefix").val() + $("#user_phone").val();
     obj.Age = $("input[name=user_age]").val();
     obj.Previous_Insurance = $("input[name=user_insurance]").val();
	 obj.Insurance_Cost = $("input[name=user_insurance-payment]").val();
	 obj.Location = $("input[name=user_residence]").val();
     $.ajax({
                    url: 'http://avihai-ins.co.il/insurance/dist/leader_pixel/send_to_leader.php',
                    type: 'POST',
                    data: obj
                })

.error(function (error) {
                    console.log("Error: " + error);
                })
                .success(function (data) {
					//show the response from leader
                    console.log("success: " + data);
					
					//debug check if checkbox clicked
                    //if (obj.agree == "yyy") {
                        //console.log("he clicked yes!!!!!!!!!!")
                    //}
                });


		//leader api end
	   //alert("יצירת קשר בוצעה בהצלחה");
				
    return;
  }
  
  // show validate error if customerNameFull < 2
  //$( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
  //event.preventDefault();
  
  
});


//////////////////////////////////////////////////////////////////form submition end
///////////////////////////// forms part end //////////////////////////////////////////////////////////////////////////
