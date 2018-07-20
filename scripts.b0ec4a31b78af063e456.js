var selectedVoice,availableVoices=[],langVoices=[],selectedVoiceIndexFromLangVoices=-1,VOICE_CONFIG_KEY="Voice-Config",requestFullscreen=function(e){e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():console.log("Fullscreen API is not supported.")},exitFullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():console.log("Fullscreen API is not supported.")};function WebRequestFullscreen(){requestFullscreen(document.documentElement)}function WebLeaveFullscreen(){exitFullscreen(document.documentElement)}function WebSpeechCheckBrowserSupport(){window}function loadVoices(){speechSynthesis.getVoices().forEach(function(e,c){availableVoices.push(e)})}function WebSpeechLoadVoices(){availableVoices=[],loadVoices(),window.speechSynthesis.onvoiceschanged=function(e){loadVoices()}}function WebSpeechSpeakLangAvailableVoices(e,c=!1){c&&(langVoices=[]);for(var n=0;n<availableVoices.length;n++)availableVoices[n].lang===e&&langVoices.push(availableVoices[n])}function WebSpeechSetVoice(e){selectedVoice=e}function WebSpeechSetVoiceByName(e){selectedVoiceIndexFromLangVoices=-1;for(var c=0;c<langVoices.length;c++)langVoices[c].name===e&&(WebSpeechSetVoice(langVoices[c]),selectedVoiceIndexFromLangVoices=c,localStorage.setItem(VOICE_CONFIG_KEY,e))}function WebSpeechSpeak(e){if(!window.speechSynthesis.speaking){var c=new SpeechSynthesisUtterance;c.text=e,c.voice=selectedVoice,window.speechSynthesis.speak(c)}}export{availableVoices,langVoices,VOICE_CONFIG_KEY,selectedVoiceIndexFromLangVoices,WebSpeechSpeak,WebSpeechSetVoiceByName,WebSpeechSpeakLangAvailableVoices,WebSpeechLoadVoices,WebRequestFullscreen,WebLeaveFullscreen};