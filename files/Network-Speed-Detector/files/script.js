			var userImageLink = "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
			var time_start, end_time; 
			
			// The size in bytes 
			var downloadSize = 359130;
			var downloadImgSrc = new Image(); 

			downloadImgSrc.onload = function () { 
				end_time = new Date().getTime(); 
				displaySpeed(); 
			}; 
			time_start = new Date().getTime(); 
			downloadImgSrc.src = userImageLink; 
			// document.write("time start: " + time_start); 
			// document.write("<br>"); 

			function displaySpeed() { 
				var timeDuration = (end_time - time_start) / 1000; 
				var loadedBits = downloadSize * 8; 
				
				/* Converts a number into string 
				using toFixed(2) rounding to 2 */
				var bps = (loadedBits / timeDuration).toFixed(2); 
				var speedInKbps = (bps / 1024).toFixed(2);
				var speedInMbps = (speedInKbps / 1024).toFixed(2); 
                document.getElementById("bps").textContent = `Speed in bits : ${bps}`;
                document.getElementById("kbps").textContent = `Speed in kilobits : ${speedInKbps}`;
                document.getElementById("mbps").textContent = `Speed in megabits : ${speedInMbps}`;
			}