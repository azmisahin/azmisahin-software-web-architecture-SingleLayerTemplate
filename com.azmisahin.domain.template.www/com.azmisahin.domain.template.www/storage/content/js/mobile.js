﻿/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Application: application.js v0.0.0.1
    * http://azmisahin.com
    ════════════════════════════════════════════════════════════════════════════════════════════════════
    * Copyright bilgi@azmisahin.com
    * Licence (https://github.com/azmisahin)
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/

Mobile.Name = 'Mobile Application';
Mobile.Version = 'v0.0.0.1';

/*
    ════════════════════════════════════════════════════════════════════════════════════════════════════
    * Jquery: jquery.js v1.9.1
    ════════════════════════════════════════════════════════════════════════════════════════════════════
*/
if (typeof jQuery === 'undefined') { throw new Error(Mobile.Name + '\'s JavaScript requires jQuery') } else console.log(Mobile.Name + " initalize " + Application.Version);
+function ($) {
    'use strict';
    var version = $.fn.jquery.split(' ')[0].split('.')
    if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
        throw new Error(Mobile.Name + ' \'s JavaScript requires jQuery version 1.9.1 or higher')
    } else {
        //console.log(Mobile.Name + " Jquery version requestment is OK : " + version)
    }
}(jQuery);


/*
    ════════════════════════════════════════════════════════════════════════════════════════════════════
    * Application: application.js v0.0.0.1
    ════════════════════════════════════════════════════════════════════════════════════════════════════
*/

Mobile.prototype = (function () {

    /// Init
    /// Initialize Test
    function Init() {
    }

    /*
    Public Functions
    ────────────────────────────────────────────────────────────────────────────────────────────────────*/
    return {
        constructor: Mobile
        , init: function () { Init(); }
    }

})();

Mobile = new Mobile();

/// <returns type="Application" />
function Mobile() { this.init(); }